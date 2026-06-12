import { useState } from "react";

function AddBook({ books, setBooks }) {

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    publisher: "",
    year: "",
    image: ""
  });

  const submitHandler = e => {

    e.preventDefault();

    const newBook = {
      id: Date.now(),
      ...form
    };

    setBooks([...books, newBook]);

    setForm({
      title: "",
      author: "",
      category: "",
      isbn: "",
      publisher: "",
      year: "",
      image: ""
    });
  };

  return (
    <form
      className="book-form"
      onSubmit={submitHandler}
    >

      <input
        placeholder="Book Title"
        value={form.title}
        onChange={e =>
          setForm({
            ...form,
            title: e.target.value
          })
        }
      />

      <input
        placeholder="Author"
        value={form.author}
        onChange={e =>
          setForm({
            ...form,
            author: e.target.value
          })
        }
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={e =>
          setForm({
            ...form,
            category: e.target.value
          })
        }
      />

      <button type="submit">
        Add Book
      </button>

    </form>
  );
}

export default AddBook;