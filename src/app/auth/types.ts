// ----------------------------------------------------------------------

import {UserModel} from "../modules/auth/models/UserModel";

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  accessToken: string | null;
  user: UserModel | null;
};

// ----------------------------------------------------------------------

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  accessToken: string | null;
  user: UserModel | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};
