import { createStackNavigator } from "@react-navigation/stack";

export type GuideStackParamList = {
  TableOfContents: undefined;
  Chapter: undefined;
};

export const GuideStack = createStackNavigator<GuideStackParamList>();
