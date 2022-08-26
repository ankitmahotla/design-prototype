import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login, logout, useAuth } from "../../firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleLogin() {
    setLoading(true);
    setError("");
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate({pathname: '/welcome'})
    } catch {
        setError("No such user found!");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
              <Button
                disabled={loading || currentUser}
                onClick={handleLogin}
                className="mt-3 w-100"
              >
                Log In
              </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
