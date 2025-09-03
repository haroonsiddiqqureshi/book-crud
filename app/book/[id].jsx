import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useBooks } from "../context/BookContext";
import { useTheme } from "../context/ThemeContext";

export default function BookDetailPage() {
  const router = useRouter();
  const { colors } = useTheme();
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
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
    Alert.alert("Delete Book", "Are you sure you want to delete this book?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          deleteBook(book.id);
          router.back();
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {isEditing ? (
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
            value={form.title}
            placeholder="Title"
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
            value={form.author}
            placeholder="Author"
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
            value={form.description}
            placeholder="Description"
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
            value={form.genre}
            placeholder="Genre"
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
            value={form.year}
            placeholder="Year"
            keyboardType="numeric"
            onChangeText={(text) => setForm({ ...form, year: text })}
          />
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: colors.primary }]}
            onPress={handleUpdate}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cancelButton, { backgroundColor: colors.surface }]}
            onPress={() => setIsEditing(false)}
          >
            <Text style={[styles.buttonText, { color: colors.secondary }]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={[styles.header, { color: colors.secondary }]}>
            {book.title}
          </Text>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Text style={[styles.detailText, { color: colors.secondary }]}>
            <Text style={styles.bold}>Author:</Text> {book.author}
          </Text>
          <Text style={[styles.detailText, { color: colors.secondary }]}>
            <Text style={styles.bold}>Description:</Text> {book.description}
          </Text>
          <Text style={[styles.detailText, { color: colors.secondary }]}>
            <Text style={styles.bold}>Genre:</Text> {book.genre}
          </Text>
          <Text style={[styles.detailText, { color: colors.secondary }]}>
            <Text style={styles.bold}>Year:</Text> {book.year}
          </Text>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <TouchableOpacity
            style={[styles.editButton, { backgroundColor: colors.primary }]}
            onPress={() => setIsEditing(true)}
          >
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
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: "auto",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  form: {
    flexDirection: "column",
    gap: 12,
  },
  input: {
    borderWidth: 1,
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
  divider: {
    height: 2,
    marginVertical: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  editButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  saveButton: {
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
  backButton: {
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
