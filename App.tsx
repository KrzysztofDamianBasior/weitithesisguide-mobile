import "react-native-gesture-handler";

import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Provider as PaperProvider } from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import BackgroundDark from "./shared/assets/background-dark.jpg";
import BackgroundLight from "./shared/assets/background-light.jpg";

import Forum from "./features/Forum";
import Guide from "./features/Guide";
import Home from "./features/Home";
import Quiz from "./features/Quiz";
import Links from "./features/Links";
import Notes from "./features/Notes";
import Account from "./features/Account";
import Settings from "./features/Settings";
import QuizHeader from "./features/Quiz/components/Header";

import { NavigationContainer } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import { CoreStack } from "./shared/navigation/CoreStack";
import type { CoreStackParamList } from "./shared/navigation/CoreStack";
import { BottomTabs } from "./shared/navigation/BottomTabs";

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  ThemeContext,
} from "./shared/context/ThemeContext";

import { AuthContext } from "./shared/context/AuthContext";
import useAuth from "./shared/hooks/useAuth";

export default function App() {
  // const [loaded] = useFonts({});
  // if (!loaded || !BackgroundDark || !BackgroundLight) {return splash}

  const [isThemeDark, setIsThemeDark] = React.useState<boolean>(true);
  const { authDispatch, authState, signIn, signOut, signUp } = useAuth();

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{ authState, signIn, signUp, signOut }}>
        <ImageBackground
          source={isThemeDark ? BackgroundDark : BackgroundLight}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <StatusBar style={isThemeDark ? "light" : "dark"} />
          <ThemeContext.Provider value={preferences}>
            <PaperProvider theme={theme}>
              <NavigationContainer theme={theme}>
                <CoreStack.Navigator
                  initialRouteName="HomeTabs"
                  screenOptions={{
                    cardStyle: { backgroundColor: "transparent" },
                  }}
                >
                  <CoreStack.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <CoreStack.Screen
                    name="Quiz"
                    component={Quiz}
                    options={({ route }) => ({
                      header: (props) => <QuizHeader {...props} />,
                    })}
                  />
                  <CoreStack.Screen
                    name="Guide"
                    component={Guide}
                    options={{ headerShown: false }}
                  />
                  <CoreStack.Screen
                    name="Forum"
                    component={Forum}
                    options={{ headerShown: false }}
                  />
                  <CoreStack.Screen name="Links" component={Links} />
                </CoreStack.Navigator>
              </NavigationContainer>
            </PaperProvider>
          </ThemeContext.Provider>
        </ImageBackground>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}

function HomeTabs({
  navigation,
  route,
}: StackScreenProps<CoreStackParamList, "HomeTabs">) {
  return (
    <BottomTabs.Navigator initialRouteName="Home">
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
          tabBarLabel: "Settings",
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
