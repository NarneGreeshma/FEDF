import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    language: "",
    isbn: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingBooks =
      JSON.parse(localStorage.getItem("books")) || [];

    existingBooks.push(book);

    localStorage.setItem(
      "books",
      JSON.stringify(existingBooks)
    );

    alert("📚 Book Added Successfully!");

    navigate("/");
  };

  return (
    <div className="card">
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit}>
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
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
        />

        <select
          name="genre"
          value={book.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="History">History</option>
          <option value="Biography">Biography</option>
          <option value="Novel">Novel</option>
        </select>

        <input
          type="number"
          name="year"
          placeholder="Publication Year"
          value={book.year}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="language"
          placeholder="Language"
          value={book.language}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN Number"
          value={book.isbn}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;