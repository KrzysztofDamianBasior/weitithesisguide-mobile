import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import { List } from "react-native-paper";

import { StackScreenProps } from "@react-navigation/stack";
import { AccountStackParamList } from "../navigation";

import * as Animatable from "react-native-animatable";
const Login = ({
  route,
  navigation,
}: StackScreenProps<AccountStackParamList, "SignIn">) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Animatable.View
        animation="slideInDown"
        direction="alternate"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.bigCircle}
        duration={8000}
      ></Animatable.View>
      <Animatable.View
        animation="slideInUp"
        direction="alternate"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.smallCircle}
        duration={3500}
      ></Animatable.View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.bottomForm}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputView}>
            <List.Icon
              style={styles.inputIcon}
              icon="account-search"
              color="#000076"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#443d5b"
              placeholder="Username"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.inputView}>
            <List.Icon style={styles.inputIcon} icon="lock" color="#000076" />
            <TextInput
              style={styles.input}
              placeholderTextColor="#443d5b"
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>sign in</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Don't have an account?
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate("Register")}
            >
              {" Register"}
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: "#164c5a",
    opacity: 0.3,
    borderRadius: 1000,
    position: "absolute",
    right: Dimensions.get("window").width * 0.5,
    top: Dimensions.get("window").height * 0.2,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.5,
    height: Dimensions.get("window").height * 0.5,
    backgroundColor: "#0d192e",
    borderRadius: 1000,
    position: "absolute",
    top: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.4,
    opacity: 0.5,
  },
  container: {
    flex: 1,
  },
  bottomForm: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 15,
    backgroundColor: "#9bc3feb9",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    paddingHorizontal: 5,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
  loginButton: {
    backgroundColor: "#6060f2",
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    marginTop: 12,
    fontSize: 16,
  },
  forgetPasswordText: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontSize: 16,
    color: "#6060f2",
  },
  registerLink: {
    color: "#6060f2",
  },
});
