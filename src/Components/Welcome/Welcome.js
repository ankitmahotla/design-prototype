import { Button, Card, Form } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.styles.css";
import { useAuth } from "../../firebase";

function Welcome() {
  const currentUser = useAuth();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome!</h2>
          <div className="mb-3">
            Currently logged in as: {currentUser?.email}
          </div>
          <Card.Title>Add Report as Patient</Card.Title>
          <Link to="/patient">
            <Button className="mt-3">Add Report</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Welcome;
