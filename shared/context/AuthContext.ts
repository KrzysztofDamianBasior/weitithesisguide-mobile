import React from "react";

export type AuthStateType = {
  status: "signIn" | "signOut" | "loading";
  user: {
    token: string | null;
    name: string | null;
    email: string | null;
  };
};

export const authInitialState: AuthStateType = {
  status: "signOut",
  user: {
    token: null,
    name: null,
    email: null,
  },
};

export enum AuthActionKind {
  BEFORE_SIGN_IN = "before-sign-in",
  SIGN_IN = "sign-in",
  SIGN_OUT = "sign-out",
}

export type AuthActionType = {
  type: AuthActionKind;
  payload?: {
    user?: {
      token: string | null;
      name: string | null;
      email: string | null;
    };
  };
};

export const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  let newState: AuthStateType = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case AuthActionKind.BEFORE_SIGN_IN:
      newState.status = "loading";
      return { ...newState };

    case AuthActionKind.SIGN_IN:
      if (action.payload?.user) {
        newState.user = action.payload.user;
      }
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
