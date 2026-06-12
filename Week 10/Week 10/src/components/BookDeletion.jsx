import { useState, useEffect } from "react";

function BookDeletion() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBooks([
      {
        id: 1,
        title: "Java Programming",
        author: "James Gosling"
      },
      {
        id: 2,
        title: "Python Fundamentals",
        author: "Guido Van Rossum"
      },
      {
        id: 3,
        title: "React Development",
        author: "Jordan Walke"
      },
      {
        id: 4,
        title: "Database Systems",
        author: "Ramez Elmasri"
      },
      {
        id: 5,
        title: "Computer Networks",
        author: "Andrew Tanenbaum"
      }
    ]);
  }, []);

  const deleteBook = async (id) => {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setBooks(
      books.filter(
        (book) => book.id !== id
      )
    );

    setLoading(false);
  };

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="card wide">

        <div className="libraryIcon">
          📚
        </div>

        <h1>Book Deletion System</h1>

        <p>
          Delete books from the library catalog
        </p>

        <input
          type="text"
          placeholder="🔍 Search Books..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {loading && (
          <h3>⏳ Deleting Book...</h3>
        )}

        <div className="stats">
          <div className="statCard">
            <h2>{books.length}</h2>
            <p>Total Books</p>
          </div>

          <div className="statCard">
            <h2>
              {filteredBooks.length}
            </h2>
            <p>Showing</p>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <h3>No Books Found</h3>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bookRow"
            >
              <div>
                <div className="bookTitle">
                  {book.title}
                </div>

                <small>
                  Author: {book.author}
                </small>
              </div>

              <button
                onClick={() =>
                  deleteBook(book.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default BookDeletion;