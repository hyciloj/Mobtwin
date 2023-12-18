import {createContext, useCallback, useEffect, useMemo, useReducer} from 'react';
// utils
import axios from '../utils/axios';
//
import {ActionMapType, AuthStateType, AuthUserType, JWTContextType} from './types';
import {isValidToken, jwtDecode, setSession} from "../../_theme/helpers";
import localStorageAvailable from "../utils/localStorageAvailable";
import {AuthModel} from "../modules/auth/models/AuthModel";
import {useLocation} from "react-router-dom";
import {_GetToken} from "../functions";
import {UserModel} from "../modules/auth/models/UserModel";

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    accessToken: string | null
    user: UserModel | null;
  };
  [Types.LOGIN]: {
    accessToken: string | null
    user: UserModel | null;
  };
  [Types.REGISTER]: {
    accessToken: string | null
    user: UserModel | null;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  accessToken: null,
  user: null,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      accessToken: action.payload.accessToken,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      accessToken: action.payload.accessToken,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      accessToken: action.payload.accessToken,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {

  // const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  // const searchParams = new URLSearchParams(location.search);
  // const error = searchParams.get('error');
  // const token = searchParams.get('token');

  const urlSearchString = window.location.search;

  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    try {

      const params = new URLSearchParams(urlSearchString);
      const token = params.get('token')

      const tokenReq = token ? token : _GetToken()

      const accessToken = storageAvailable ? tokenReq : "";

      if (accessToken && isValidToken({token: accessToken})) {


        setSession(accessToken);

        const response = await axios.post('profile');

        const {tokenUser} = response.data;

        const user = jwtDecode({token: tokenUser})

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            accessToken,
            user
          }
        })


      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            accessToken: null,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          accessToken: null,
          user: null,
        },
      });
    }
  }, [storageAvailable]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    const response = await axios.post('login', data);
    const { token } = response.data;
    const user = jwtDecode({token})

    setSession(token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        accessToken: token,
        user
      },
    });

    return response.data

  }, []);

  // REGISTER
  const register = useCallback(
    async (email: string, password: string) => {

      let data = new FormData();
      data.append('email', email);
      data.append('password', password);

      const response = await axios.post('register', data);

      return response.data.status
    },
    []
  );

  // LOGOUT
  const logout = useCallback(() => {
    setSession(null);
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      accessToken: state.accessToken,
      user: state.user,
      login,
      register,
      logout,
    }),
    [state.isInitialized, state.isAuthenticated, state.accessToken, state.user, login, register, logout]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
