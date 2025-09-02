import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

const initialBooks = [
  {
    id: 1,
    title: "React Basics",
    author: "Dan Abramov",
    description: "A beginner's guide to React.",
    genre: "Programming",
    year: 2020,
  },
  {
    id: 2,
    title: "JavaScript Guide",
    author: "Brendan Eich",
    description: "Comprehensive JavaScript reference.",
    genre: "Programming",
    year: 2018,
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