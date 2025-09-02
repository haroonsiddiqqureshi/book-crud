import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useBooks } from "../context/BookContext";

export default function BookDetailPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { books, deleteBook, updateBook } = useBooks();
  const book = books.find((b) => b.id === Number(id));
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: book?.title || "",
    author: book?.author || "",
    description: book?.description || "",
    genre: book?.genre || "",
    year: book?.year ? String(book.year) : "",
  });

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Book not found.</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/book/book")}>
          <Text style={styles.buttonText}>Back to List</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleUpdate = () => {
    updateBook(book.id, form);
    setIsEditing(false);
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Book",
      "Are you sure you want to delete this book?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteBook(book.id);
            router.push("/book/book");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Details</Text>
      {isEditing ? (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={form.title}
            placeholder="Title"
            onChangeText={(text) => setForm({ ...form, title: text })}
          />
          <TextInput
            style={styles.input}
            value={form.author}
            placeholder="Author"
            onChangeText={(text) => setForm({ ...form, author: text })}
          />
          <TextInput
            style={styles.input}
            value={form.description}
            placeholder="Description"
            onChangeText={(text) => setForm({ ...form, description: text })}
          />
          <TextInput
            style={styles.input}
            value={form.genre}
            placeholder="Genre"
            onChangeText={(text) => setForm({ ...form, genre: text })}
          />
          <TextInput
            style={styles.input}
            value={form.year}
            placeholder="Year"
            keyboardType="numeric"
            onChangeText={(text) => setForm({ ...form, year: text })}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditing(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Title:</Text> {book.title}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Author:</Text> {book.author}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Description:</Text> {book.description}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Genre:</Text> {book.genre}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Year:</Text> {book.year}
          </Text>
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
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
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#22c55e",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: "#22c55e",
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
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: "#2563eb",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});