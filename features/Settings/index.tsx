import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { BottomTabsParamList } from "../../navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

type Props = {};

const Settings = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Settings">) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
