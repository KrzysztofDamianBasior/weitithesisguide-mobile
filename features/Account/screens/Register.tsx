import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { List } from "react-native-paper";

import { AccountStackParamList } from "../navigation";
import { StackScreenProps } from "@react-navigation/stack";

import * as Animatable from "react-native-animatable";

import { AuthContext } from "../../../shared/context/AuthContext";

const Register = ({
  route,
  navigation,
}: StackScreenProps<AccountStackParamList, "Register">) => {
  const [userInput, setUserInput] = useState<{
    name: string;
    email: string;
    password: string;
  }>({ email: "", name: "", password: "" });
  const { signUp } = useContext(AuthContext);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.View
            animation="slideInDown"
            direction="alternate"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.bigCircle}
            duration={8000}
          ></Animatable.View>
          <Animatable.View
            animation="slideInRight"
            direction="alternate"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.smallCircle}
            duration={2000}
          ></Animatable.View>
          <View style={styles.formContainer}>
            <View style={styles.logo}>
              <List.Icon color="#fff" icon="draw-pen" />
            </View>
            <ScrollView>
              <Text style={styles.formTitle}>Create an account</Text>
              <View style={styles.hr}></View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={userInput.name}
                  onChangeText={(text) =>
                    setUserInput((prev) => ({ ...prev, username: text }))
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={userInput.email}
                  onChangeText={(text) =>
                    setUserInput((prev) => ({ ...prev, email: text }))
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  textContentType="password"
                  value={userInput.password}
                  onChangeText={(text) =>
                    setUserInput((prev) => ({ ...prev, password: text }))
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => signUp({ ...userInput })}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  bigCircle: {
    width: Dimensions.get("window").height * 0.7,
    height: Dimensions.get("window").height * 0.7,
    backgroundColor: "#6b9fff",
    opacity: 0.3,
    borderRadius: 1000,
    position: "absolute",
    right: Dimensions.get("window").width * 0.5,
    top: Dimensions.get("window").height * 0.02,
  },
  smallCircle: {
    width: Dimensions.get("window").height * 0.4,
    height: Dimensions.get("window").height * 0.4,
    backgroundColor: "#2eb8ef",
    borderRadius: 1000,
    position: "absolute",
    bottom: Dimensions.get("window").width * -0.2,
    right: Dimensions.get("window").width * -0.3,
    opacity: 0.2,
  },
  formContainer: {
    width: "85%",
    height: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "#a9a9a9",
    borderRadius: 1000,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "-2%",
  },
  formTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  hr: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#444",
    marginTop: 6,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#abccf5",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#0d0563",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
