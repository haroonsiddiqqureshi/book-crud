import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./ThemeContext";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SignIn = () => {
  const { isDarkMode, colors } = useTheme();
  const router = useRouter();

  const handlePress = () => {
    router.push("/signin");
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.border }]}
      onPress={handlePress}
    >
      <FontAwesome name="user-o" size={20} color={isDarkMode ? "#fff" : "#000"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginLeft: 10,
  },
});

export default SignIn;