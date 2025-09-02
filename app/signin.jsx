import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // handle sign in logic here
  };

  return (
    <View style={style.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email@email.com"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // hides the password input
        placeholder="Password"
      />
      <Button title="Signin" onPress={handleSignin} />
    </View>
  );
};
export default Signin;

const style = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
  },
  text: {},
  profile: {
    height: 128,
    width: 128,
    borderRadius: 50,
  },
});