import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import db from "../../firebase";

const Patient = () => {
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Patient Form</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="age" placeholder="Age" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control placeholder="+91933XXXXXXX" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Gender</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Previously Consulted Doctor</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Symptoms</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Patient;
