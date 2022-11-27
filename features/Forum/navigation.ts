import { createStackNavigator } from "@react-navigation/stack";

import type { PostThumbType } from "./types";

export type ForumStackParamList = {
  PostsList: undefined;
  Post: {
    postThumbData: PostThumbType;
  };
};

export const ForumStack = createStackNavigator<ForumStackParamList>();
