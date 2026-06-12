import { useState, useEffect } from "react";

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks =
      JSON.parse(localStorage.getItem("books")) || [];

    setBooks(storedBooks);
  }, []);

  return (
    <div className="card">
      <h1>All Books</h1>

      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div className="book-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllBooks;