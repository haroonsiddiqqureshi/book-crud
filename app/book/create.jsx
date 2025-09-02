import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useBooks } from "../context/BookContext";

export default function BookCreatePage() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    year: "",
  });
  const { addBook } = useBooks();
  const router = useRouter();

  const handleSubmit = () => {
    addBook(form);
    router.push("/book/book");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Book</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Book Title"
          value={form.title}
          onChangeText={(text) => setForm({ ...form, title: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={form.author}
          onChangeText={(text) => setForm({ ...form, author: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Genre"
          value={form.genre}
          onChangeText={(text) => setForm({ ...form, genre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          value={form.year}
          keyboardType="numeric"
          onChangeText={(text) => setForm({ ...form, year: text })}
        />
        <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.push("/book/book")}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    maxWidth: 480,
    alignSelf: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    flexDirection: "column",
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  createButton: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: "#6b7280",
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