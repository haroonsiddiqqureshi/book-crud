import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";

const BookDetail = () => {
  const [book, setBook] = useState(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://10.0.15.34:3000/api/books/${id}`);
        const data = await response.json();
        setBook(data.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (field, value) => {
    setBook({ ...book, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const updateData = {
        ...book,
        year: parseInt(book.year),
        price: parseFloat(book.price),
      };
      const response = await fetch(`http://10.0.15.34:3000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      if (response.ok) {
        Alert.alert("Success", "Book updated!");
      } else {
        Alert.alert("Error", "Failed to update book.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://10.0.15.34:3000/api/books/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        Alert.alert("Deleted", "Book deleted successfully.");
        router.back();
      } else {
        Alert.alert("Error", "Failed to delete book.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const confirmaDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this book?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: handleDelete },
      ]
    );
  };

  if (!book) return <Text>Loading...</Text>;

  return (
    <View style={style.container}>
      <Text>Book Detail for ID: {id}</Text>
      <TextInput
        style={style.input}
        value={book.title}
        onChangeText={(text) => handleChange("title", text)}
        placeholder="Title"
      />
      <TextInput
        style={style.input}
        value={book.author}
        onChangeText={(text) => handleChange("author", text)}
        placeholder="Author"
      />
      <TextInput
        style={style.input}
        value={book.description}
        onChangeText={(text) => handleChange("description", text)}
        placeholder="Description"
      />
      <TextInput
        style={style.input}
        value={book.genre}
        onChangeText={(text) => handleChange("genre", text)}
        placeholder="Genre"
      />
      <TextInput
        style={style.input}
        value={book.year?.toString()}
        onChangeText={(text) => handleChange("year", text)}
        placeholder="Year"
        keyboardType="numeric"
      />
      <TextInput
        style={style.input}
        value={book.price?.toString()}
        onChangeText={(text) => handleChange("price", text)}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleUpdate} />
      <Button title="Delete" onPress={confirmaDelete} color="red" />
    </View>
  );
};
export default BookDetail;
const style = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 6,
    width: "100%",
    borderRadius: 4,
  },
});