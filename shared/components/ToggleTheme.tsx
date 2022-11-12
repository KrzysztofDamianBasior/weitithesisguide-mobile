import React, { useContext } from "react";
import { Switch } from "react-native-paper";
import { ThemeContext } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);

  return <Switch value={isThemeDark} onValueChange={() => toggleTheme()} />;
};

export default ToggleTheme;
