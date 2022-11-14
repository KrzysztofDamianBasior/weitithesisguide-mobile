import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export type BottomTabsParamList = {
  Home: undefined;
  Notes: undefined;
  Account: undefined;
  Settings: undefined;
};

export const BottomTabs =
  createMaterialBottomTabNavigator<BottomTabsParamList>();
