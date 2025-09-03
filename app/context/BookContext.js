import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

const initialBooks = [
  {
    id: 1,
    title: "Starting with Business",
    author: "Ken Colwell",
    description: "A simple and practical guide to building a business",
    genre: "Business",
    year: 2019,
  },
  {
    id: 2,
    title: "The Dark Psychology",
    author: "DR.Hiro",
    description: "When your words can control people's minds",
    genre: "Self-Improvement",
    year: 2023,
  },
];

export function BookProvider({ children }) {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (id, updated) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, ...updated } : b)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);