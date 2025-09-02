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

const Signup = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // handle sign up logic here
  };

  const handleSigninLink = () => {
    router.push("/signin");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.title, { color: colors.primary }]}>REGISTRATION</Text>
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
        <TextInput
          style={[styles.input, { borderColor: colors.primary, backgroundColor: colors.border, color: colors.secondary }]}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor={colors.secondary + "80"}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign up"
            onPress={handleSignup}
            color={colors.primary}
          />
        </View>
        <TouchableOpacity onPress={handleSigninLink} style={styles.signinLink}>
          <Text style={{ color: colors.primary, marginTop: 16 }}>
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signup;

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
  signinLink: {
    alignItems: "center",
  },
});