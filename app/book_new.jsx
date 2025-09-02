import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { router } from "expo-router";

const BookNew = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    year: "",
    price: "",
    available: true,
  });

  const handleChange = (field, value) => {
    setBookData({ ...bookData, [field]: value });
  };

  const handleCreate = async () => {
    try {
      const response = await fetch("http://10.0.15.34:3000/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookData,
          year: parseInt(bookData.year),
          price: parseFloat(bookData.price),
        }),
      });
      if (response.ok) {
        Alert.alert("Success", "Book created!");
        router.replace("/book"); // Go to book list
      } else {
        Alert.alert("Error", "Failed to create book.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={style.container}>
      <Text>Create a New Book</Text>
      <TextInput
        style={style.input}
        placeholder="Title"
        value={bookData.title}
        onChangeText={(text) => handleChange("title", text)}
      />
      <TextInput
        style={style.input}
        placeholder="Author"
        value={bookData.author}
        onChangeText={(text) => handleChange("author", text)}
      />
      <TextInput
        style={style.input}
        placeholder="Description"
        value={bookData.description}
        onChangeText={(text) => handleChange("description", text)}
      />
      <TextInput
        style={style.input}
        placeholder="Genre"
        value={bookData.genre}
        onChangeText={(text) => handleChange("genre", text)}
      />
      <TextInput
        style={style.input}
        placeholder="Year"
        keyboardType="numeric"
        value={bookData.year}
        onChangeText={(text) => handleChange("year", text)}
      />
      <TextInput
        style={style.input}
        placeholder="Price"
        keyboardType="numeric"
        value={bookData.price}
        onChangeText={(text) => handleChange("price", text)}
      />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};
export default BookNew;
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