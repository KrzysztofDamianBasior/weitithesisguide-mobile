import { createStackNavigator } from "@react-navigation/stack";

export type GuideStackParamList = {
  TableOfContents: undefined;
  Chapter: { chapterNumber: number };
};

export const GuideStack = createStackNavigator<GuideStackParamList>();
