import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export type NotesTabsParamList = {
  DeviceNotes: undefined;
  CloudNotes: undefined;
};

export const NotesTab = createMaterialTopTabNavigator<NotesTabsParamList>();
