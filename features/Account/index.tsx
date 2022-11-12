import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { BottomTabsParamList } from "../../navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";

import { Button } from "react-native-paper";

type Props = {};

const Account = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Account">) => {
  return (
    <View style={{ backgroundColor: "transparent", flex: 1 }}>
      <Text>profile</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Home")}
      >
        home
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Notes")}
      >
        notes
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate("Settings")}
      >
        settings
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

// SignInScreen
// SplashScreen

// state.userToken == null => ( show signin screen )
// state.loading == true => ( show splash screen)
// else => show profile screen
