import React from "react";

export type AuthStateType = {
  userToken: string | null;
  isLoading: boolean;
  isSignout: boolean;
};

export const authInitialState: AuthStateType = {
  userToken: null,
  isLoading: false,
  isSignout: false,
};

export enum AuthActionKind {
  RESTORE_TOKEN = "restore-token",
  SIGN_IN = "sign-in",
  SIGN_OUT = "sign-out",
}

export type AuthActionType = {
  type: AuthActionKind;
  payload?: {
    token?: string | null;
  };
};

export const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  let newState: AuthStateType = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case AuthActionKind.RESTORE_TOKEN:
      if (action.payload?.token) {
        newState.userToken = action!.payload!.token;
      }
      newState.isLoading = false;

      return { ...newState };

    case AuthActionKind.SIGN_IN:
      if (action.payload?.token) {
        newState.userToken = action!.payload!.token;
      }
      newState.isSignout = false;
      return { ...newState };

    case AuthActionKind.SIGN_OUT:
      newState.isSignout = true;
      newState.userToken = null;
      return { ...newState };
  }
};

export const AuthContext = React.createContext<{
  signIn: (data: string) => void;
  signUp: (data: string) => void;
  signOut: () => void;
  authState: AuthStateType;
}>({
  signIn: (data: string) => {},
  signUp: (data: string) => {},
  signOut: () => {},
  authState: authInitialState,
});
