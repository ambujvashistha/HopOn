import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your E-mail"
        value={email}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
      ></TextInput>

      <TouchableOpacity style={styles.loginBtn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  loginBtn: {
    backgroundColor: "yellow",
  },
  container: {
    backgroundColor: "orange",
  },
  input: {
    margin: 15,
    padding: 20,
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
  },
};
