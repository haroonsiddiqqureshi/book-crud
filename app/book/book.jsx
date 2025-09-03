import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useBooks } from "../context/BookContext";
import { useTheme } from "../context/ThemeContext";

export default function BookListPage() {
  const { books } = useBooks();
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: colors.primary }]}
        onPress={() => router.push("/book/create")}
      >
        <Text style={styles.addButtonText}>+ New Book</Text>
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
              <Text style={[styles.bookTitle, { color: colors.secondary }]}>
                {book.title}
              </Text>
              <Text style={[styles.bookAuthor, { color: colors.secondary }]}>
                {" "}
                by {book.author}
              </Text>
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: colors.secondary,
              height: 1,
              opacity: 0.1,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: "auto",
  },
  addButton: {
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-end",
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
    fontSize: 16,
    opacity: 0.4,
  },
});
