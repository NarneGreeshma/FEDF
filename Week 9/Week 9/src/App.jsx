import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            📚 LibraryHub
          </div>

          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/addbook"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Add Book
            </NavLink>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addbook" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;