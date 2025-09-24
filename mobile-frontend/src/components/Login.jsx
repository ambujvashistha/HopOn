import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Login() {
  const [message, setLogin] = useState("");
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your E-mail"
      ></TextInput>
    </View>
  );
}

const styles = {
  input: {
    padding: 20,
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
  },
};
