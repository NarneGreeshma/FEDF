import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <div className="card">

        <div className="libraryIcon">
          📚
        </div>

        <h1>Librarian Dashboard</h1>

        <p>
          Welcome to the Library Management System
        </p>

        <div className="stats">

          <div className="statCard">
            <h2>5</h2>
            <p>Books</p>
          </div>

          <div className="statCard">
            <h2>1</h2>
            <p>Admin</p>
          </div>

        </div>

        <Link
          to="/deletebook"
          className="linkBtn"
        >
          Manage Library Books
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;