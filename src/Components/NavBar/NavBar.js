import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const web3 = new Web3(window.ethereum);

  const login = async () => {
    if (!window.ethereum) {
      window.location.assign('https://metamask.io/download.html');
      return;
    }
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setIsLoggedIn(true);
        navigate("/welcome");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLoginStatus();
  }, []);
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
            {isLoggedIn ? (
              <Form>
                <Button onClick={logout}>Logout</Button>
              </Form>
            ) : (
              <Form>
                <Button onClick={login}>Login with MetaMask</Button>
              </Form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
