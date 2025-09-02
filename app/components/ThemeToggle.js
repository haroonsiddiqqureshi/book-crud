import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.border }]}
      onPress={toggleTheme}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        {isDarkMode ? <FontAwesome name="moon-o" size={20} color="#fff"/> : <FontAwesome name="sun-o" size={20} color="#000"/>}
      </Text>
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
  },
});

export default ThemeToggle;