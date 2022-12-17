import { Button, Card, Form } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.styles.css";

function Welcome() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome!</h2>
          <Card.Title>Add Report as Patient</Card.Title>
          <Link to="/patient">
            <Button className="mt-3">Add Report</Button>
          </Link>
          <Link to="/doctors" className="mx-3">
            <Button className="mt-3">Browse Doctors</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Welcome;
