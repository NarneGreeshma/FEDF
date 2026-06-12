import { useState, useEffect } from "react";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    const storedBooks =
      JSON.parse(localStorage.getItem("books")) || [];

    setBooks(storedBooks);
  }, []);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();

    const updatedBooks = [...books, book];

    setBooks(updatedBooks);

    localStorage.setItem(
      "books",
      JSON.stringify(updatedBooks)
    );

    setBook({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  const deleteBook = (index) => {
    const updatedBooks =
      books.filter((_, i) => i !== index);

    setBooks(updatedBooks);

    localStorage.setItem(
      "books",
      JSON.stringify(updatedBooks)
    );
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="card">
        <h1>📚 Library Management System</h1>

        <div className="stats">
          <div className="stat-card">
            <h2>{books.length}</h2>
            <p>Total Books</p>
          </div>

          <div className="stat-card">
            <h2>📖</h2>
            <p>Collection</p>
          </div>

          <div className="stat-card">
            <h2>⭐</h2>
            <p>Manager</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Add New Book</h2>

        <form onSubmit={addBook}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={book.genre}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Publication Year"
            value={book.year}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Add Book
          </button>
        </form>
      </div>

      <div className="books-section">
        <h2 className="section-title">
          Available Books ({books.length})
        </h2>

        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search books..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="book-grid">
          {filteredBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <h3>{book.title}</h3>

              <p>
                <strong>Author:</strong>{" "}
                {book.author}
              </p>

              <p>
                <strong>Genre:</strong>{" "}
                {book.genre}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {book.year}
              </p>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteBook(index)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;