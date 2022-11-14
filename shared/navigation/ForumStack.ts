import { createStackNavigator } from "@react-navigation/stack";

export type ForumStackParamList = {
  Posts: undefined;
  Post: undefined;
  NewPost: undefined;
};

export const ForumStack = createStackNavigator<ForumStackParamList>();
