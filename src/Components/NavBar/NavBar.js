import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useAuth} from "../../firebase";

const NavBar = () => {
  const currentUser = useAuth();
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
            { currentUser ? <Form>
              <Link to="/welcome">
                <Button>Continue to Site</Button>
              </Link>
            </Form> : <Form>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </Form>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
