import { createStackNavigator } from "@react-navigation/stack";

export type ForumStackParamList = {
  PostsList: undefined;
  Post: undefined;
};

export const ForumStack = createStackNavigator<ForumStackParamList>();
