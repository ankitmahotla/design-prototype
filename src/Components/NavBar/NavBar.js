import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useAuth, logout } from "../../firebase";

const NavBar = () => {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BBHCS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
            {currentUser ? (
              <Form>
                <Link to="/welcome">
                  <Button className="mx-2">Continue to Site</Button>
                </Link>
                <Link to="/login">
                  <Button
                    disabled={loading || !currentUser}
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </Link>
              </Form>
            ) : (
              <Form>
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="mx-2">Sign Up</Button>
                </Link>
              </Form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
