import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { expo as appInfo } from "../../app.json";

type Props = {};

const Settings = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Settings">) => {
  return (
    <View style={{ backgroundColor: "transparent", flex: 1 }}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
