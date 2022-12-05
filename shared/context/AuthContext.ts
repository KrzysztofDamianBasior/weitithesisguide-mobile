import React from "react";

export type UserDataType = {
  token: string | null;
  name: string | null;
  email: string | null;
};

export type AuthStateType = {
  status: "signIn" | "signOut" | "loading";
  user: UserDataType;
};

export const authInitialState: AuthStateType = {
  status: "loading",
  user: {
    token: null,
    name: null,
    email: null,
  },
};

export enum AuthActionKind {
  LOADING = "loading",
  SIGN_IN = "sign-in",
  SIGN_OUT = "sign-out",
}

export type AuthActionType = LoadingAction | SignInAction | SignOutAction;

export type LoadingAction = {
  type: AuthActionKind.LOADING;
};

export type SignInAction = {
  type: AuthActionKind.SIGN_IN;
  payload: UserDataType;
};

export type SignOutAction = {
  type: AuthActionKind.SIGN_OUT;
};

export const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  let newState: AuthStateType = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case AuthActionKind.LOADING:
      newState.status = "loading";
      return { ...newState };

    case AuthActionKind.SIGN_IN:
      newState.user = action.payload;
      newState.status = "signIn";
      return { ...newState };

    case AuthActionKind.SIGN_OUT:
      newState.user = {
        email: null,
        name: null,
        token: null,
      };
      newState.status = "signOut";
      return { ...newState };
  }
};

export type AuthContextType = {
  signIn: (userData: UserDataType) => void;
  signUp: (userData: UserDataType) => void;
  signOut: () => void;
  authState: AuthStateType;
};

export const AuthContext = React.createContext<AuthContextType>({
  signIn: (userData: UserDataType) => {},
  signUp: (userData: UserDataType) => {},
  signOut: () => {},
  authState: authInitialState,
});
