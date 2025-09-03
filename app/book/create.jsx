import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useBooks } from "../context/BookContext";
import { useTheme } from "../context/ThemeContext";

export default function BookCreatePage() {
  const { addBook } = useBooks();
  const { colors } = useTheme();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    year: "",
  });

  const handleSubmit = () => {
    addBook(form);
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.border,
              color: colors.secondary,
              backgroundColor: colors.surface,
            },
          ]}
          placeholder="Book Title"
          placeholderTextColor={colors.secondary + "80"}
          value={form.title}
          onChangeText={(text) => setForm({ ...form, title: text })}
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.border,
              color: colors.secondary,
              backgroundColor: colors.surface,
            },
          ]}
          placeholder="Author"
          placeholderTextColor={colors.secondary + "80"}
          value={form.author}
          onChangeText={(text) => setForm({ ...form, author: text })}
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.border,
              color: colors.secondary,
              backgroundColor: colors.surface,
            },
          ]}
          placeholder="Description"
          placeholderTextColor={colors.secondary + "80"}
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.border,
              color: colors.secondary,
              backgroundColor: colors.surface,
            },
          ]}
          placeholder="Genre"
          placeholderTextColor={colors.secondary + "80"}
          value={form.genre}
          onChangeText={(text) => setForm({ ...form, genre: text })}
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: colors.border,
              color: colors.secondary,
              backgroundColor: colors.surface,
            },
          ]}
          placeholder="Year"
          placeholderTextColor={colors.secondary + "80"}
          value={form.year}
          keyboardType="numeric"
          onChangeText={(text) => setForm({ ...form, year: text })}
        />
        <TouchableOpacity
          style={[styles.createButton, { backgroundColor: colors.primary }]}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cancelButton, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
        >
          <Text style={[styles.buttonText, { color: colors.secondary }]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: "auto",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  form: {
    width: "100%",
    flexDirection: "column",
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  createButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  cancelButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
