import React, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Login() {
  const [message, setLogin] = useState("");
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
