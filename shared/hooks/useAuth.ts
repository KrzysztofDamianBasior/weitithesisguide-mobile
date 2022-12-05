import React from "react";
import {
  AuthActionKind,
  AuthActionType,
  authInitialState,
  authReducer,
  UserDataType,
} from "../context/AuthContext";

import { AuthContextType } from "../context/AuthContext";

import * as SecureStore from "expo-secure-store";

export default function useAuth(): AuthContextType & {
  authDispatch: (value: AuthActionType) => void;
} {
  const [authState, authDispatch] = React.useReducer(
    authReducer,
    authInitialState
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken: UserDataType | null = null;

      try {
        const token = await SecureStore.getItemAsync("userToken");
        userToken = token === null ? token : JSON.parse(token);
      } catch (e) {
        // Restoring token failed
        authDispatch({ type: AuthActionKind.SIGN_OUT });
      }

      if (userToken) {
        authDispatch({
          type: AuthActionKind.SIGN_IN,
          payload: {
            name: userToken.name,
            email: userToken.email,
            token: userToken.token,
          },
        });
      } else {
        authDispatch({ type: AuthActionKind.SIGN_OUT });
      }
    };

    bootstrapAsync();
  }, []);

  const signIn = async (userData: UserDataType) => {
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    // After getting token, we need to persist the token using `SecureStore`
    // In the example, we'll use a dummy token

    authDispatch({
      type: AuthActionKind.SIGN_IN,
      payload: {
        name: userData.name,
        email: userData.email,
        token: userData.token,
      },
    });
  };

  const signOut = () => authDispatch({ type: AuthActionKind.SIGN_OUT });

  const signUp = async (userData: UserDataType) => {
    // In a production app, we need to send user data to server and get a token
    // We will also need to handle errors if sign up failed
    // After getting token, we need to persist the token using `SecureStore`
    // In the example, we'll use a dummy token

    authDispatch({
      type: AuthActionKind.SIGN_IN,
      payload: {
        name: userData.name,
        email: userData.email,
        token: userData.token,
      },
    });
  };
  return { authState, signIn, signOut, signUp, authDispatch };
}
