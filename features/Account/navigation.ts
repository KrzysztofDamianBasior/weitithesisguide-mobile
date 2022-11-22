import { createStackNavigator } from "@react-navigation/stack";

export type AccountStackParamList = {
  SignIn: undefined;
  Register: undefined;
  Profile: undefined;
};

export const AccountStack = createStackNavigator<AccountStackParamList>();
