import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider } from "react-native-paper";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import Forum from "./features/Forum";
import Guide from "./features/Guide";
import Home from "./features/Home";
import Quiz from "./features/Quiz";
import Links from "./features/Links";
import Notes from "./features/Notes";
import Account from "./features/Account";
import Settings from "./features/Settings";

import { CoreStack } from "./navigation/CoreStack";
import { BottomTabs } from "./navigation/BottomTabs";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <CoreStack.Navigator initialRouteName="HomeTabs">
          <CoreStack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <CoreStack.Screen name="Quiz" component={Quiz} />
          <CoreStack.Screen
            name="Guide"
            component={Guide}
            options={{ headerShown: false }}
          />
          <CoreStack.Screen name="Forum" component={Forum} />
          <CoreStack.Screen name="Links" component={Links} />
        </CoreStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function HomeTabs() {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarAccessibilityLabel: "Home Screen",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarAccessibilityLabel: "Your Notes",
          tabBarLabel: "Notes",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <MaterialCommunityIcons name="note" color={color} size={26} />
            ) : (
              <MaterialCommunityIcons
                name="note-outline"
                color={color}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarAccessibilityLabel: "Your Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={26}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarAccessibilityLabel: "Personalize App Settings",
          tabBarLabel: "Notes",
          tabBarIcon: ({ focused, color }) => {
            return focused === true ? (
              <Ionicons name="hammer" color={color} size={26} />
            ) : (
              <Ionicons name="hammer-outline" color={color} size={26} />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
