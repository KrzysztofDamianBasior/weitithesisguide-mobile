import React from "react";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import merge from "deepmerge";

export const CombinedDefaultTheme = merge(
  merge(PaperDefaultTheme, NavigationDefaultTheme),
  {
    colors: {
      ...PaperDefaultTheme.colors,
      background: "transparent",
    },
  }
);

export const CombinedDarkTheme = merge(
  merge(PaperDarkTheme, NavigationDarkTheme),
  {
    colors: {
      ...PaperDarkTheme.colors,
      background: "transparent",
    },
  }
);

export const ThemeContext = React.createContext<{
  toggleTheme: () => void;
  isThemeDark: boolean;
}>({
  toggleTheme: () => {},
  isThemeDark: true,
});
