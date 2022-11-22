import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { List } from "react-native-paper";

export default function Login() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Login</Text>
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
            <Text style={styles.registerLink}>{" Register"}</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
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
  loginText: {
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
    fontFamily: "SourceSansProRegular",
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
    fontFamily: "SourceSansProRegular",
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
