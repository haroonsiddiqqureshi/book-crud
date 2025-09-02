import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useBooks } from "../context/BookContext";

export default function BookListPage() {
  const { books } = useBooks();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book List</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/book/create")}
      >
        <Text style={styles.addButtonText}>+ Add New Book</Text>
      </TouchableOpacity>
      <FlatList
        data={books}
        keyExtractor={(book) => book.id.toString()}
        renderItem={({ item: book }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => router.push(`/book/${book.id}`)}
          >
            <Text>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}> by {book.author}</Text>
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  addButton: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bookAuthor: {
    color: "#6b7280",
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#e5e7eb",
  },
});