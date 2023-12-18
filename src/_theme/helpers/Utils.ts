import {UserModel} from "../../app/modules/auth/models/UserModel";
import axios from "../../app/utils/axios";
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

    // clearTimeout(expiredTimer);

    expiredTimer = setTimeout(async () => {

        console.log("token expired!")

        // const response = await axios.post('token-refresh');

        // localStorage.setItem("accessToken", "hello world")

        // document.body.setAttribute("data-kt-drawer-refresh", "on")

        // window.location.reload()
        // window.location.href = "PATH_AUTH.login";
    }, timeLeft);
};
//
// // ----------------------------------------------------------------------
//
export const setSession = (accessToken: string | null) => {
    if (accessToken) {

        localStorage.setItem('accessToken', accessToken);

        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // This function below will handle when token is expired
        const { exp } = jwtDecode({token: accessToken}); // ~3 days by minimals server

        tokenExpired(exp);
    } else {
        localStorage.removeItem('accessToken');

        delete axios.defaults.headers.common.Authorization;
    }
};
