import { createStackNavigator } from "@react-navigation/stack";

export type CoreStackParamList = {
  HomeTabs: undefined;
  Quiz: undefined;
  Guide: undefined;
  Forum: undefined;
  Links: undefined;
};

export const CoreStack = createStackNavigator<CoreStackParamList>();
