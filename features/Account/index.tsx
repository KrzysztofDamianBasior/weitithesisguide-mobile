import { useContext } from "react";
import type { BottomTabsParamList } from "../../shared/navigation/BottomTabs";
import type { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { AccountStack } from "./navigation";
import { AuthContext } from "../../shared/context/AuthContext";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";

const Account = ({
  route,
  navigation,
}: MaterialBottomTabScreenProps<BottomTabsParamList, "Account">) => {
  const { authState } = useContext(AuthContext);

  return (
    <AccountStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      {authState.user.token === null ? (
        <>
          <AccountStack.Screen
            name="SignIn"
            component={Login}
            options={{ headerShown: false }}
          />
          <AccountStack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <AccountStack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </>
      )}
    </AccountStack.Navigator>
  );
};

export default Account;
