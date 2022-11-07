import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabsParamList } from "./BottomTabs";

export type CoreStackParamList = {
  HomeTabs: NavigatorScreenParams<BottomTabsParamList>;
  Quiz: undefined;
  Guide: undefined;
  Forum: undefined;
  Links: undefined;
};

export const CoreStack = createStackNavigator<CoreStackParamList>();
