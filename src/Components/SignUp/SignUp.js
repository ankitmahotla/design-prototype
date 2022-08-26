import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signup, useAuth } from "../../firebase";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const navigate = useNavigate()

  async function handleSignup() {
    setLoading(true);
    setError("")
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate({pathname: './welcome'})
    } catch {
        setError("User account already exists!")
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Button disabled={loading || currentUser} onClick={handleSignup} className="mt-3 w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default SignUp;
