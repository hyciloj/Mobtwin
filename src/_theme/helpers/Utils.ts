import {UserModel} from "../../app/modules/auth/models/UserModel";
import axios from "../../app/utils/axios";
import {AuthModel} from "../../app/modules/auth/models/AuthModel";
import {_RemoveStorage, _SetToken} from "../../app/functions";
import {ACCESS_TOKEN} from "../../config-global";
type TokenType = {
    token: string
}

export function jwtDecode({token}: TokenType): UserModel {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join('')
    );

    return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = ({token}: TokenType) => {
    if (!token) {
        return false;
    }

    const decoded = jwtDecode({token});

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

// // ----------------------------------------------------------------------
//
export const tokenExpired = (exp: number) => {
    // eslint-disable-next-line prefer-const
    let expiredTimer;

    const currentTime = Date.now();

    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;

    clearTimeout(expiredTimer);
    expiredTimer = setTimeout(async () => {

        const {data: {token}} = await axios.post<AuthModel>('token-refresh');
        _SetToken(token)
        window.location.reload()

    }, timeLeft);
};
//
// // ----------------------------------------------------------------------
//
export const setSession = (accessToken: string | null) => {
    if (accessToken) {

        localStorage.setItem(ACCESS_TOKEN, accessToken)

        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // This function below will handle when token is expired
        const { exp } = jwtDecode({token: accessToken});

        tokenExpired(exp);
    } else {
        console.log("else setSession")
        _RemoveStorage(ACCESS_TOKEN);
        delete axios.defaults.headers.common.Authorization;
    }
};
