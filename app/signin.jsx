import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "./context/ThemeContext";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SignIn = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // handle sign in logic here
  };

  const handleSignupLink = () => {
    router.push("/signup");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { color: colors.primary }]}>AUTHENTICATION</Text>
        <TextInput
          style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.border, color: colors.secondary }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={colors.secondary + "80"}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.border, color: colors.secondary }]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={colors.secondary + "80"}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            onPress={handleSignin}
            color={colors.primary}
          />
        </View>
        <TouchableOpacity onPress={handleSignupLink} style={styles.signupLink}>
          <Text style={{ color: colors.primary, marginTop: 16 }}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  signupLink: {
    marginTop: 16,
  },
});
