import {
  setDoc,
  doc,
} from "firebase/firestore";
import React, {useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import {db, useAuth } from "../../firebase";

const Patient = () => {
  const [submitted, setSubmitted] = useState();
  const [data, setData] = useState({});
  const currentUser = useAuth();
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(data);

  const handleAdd = async (e) => {
    setSubmitted("");
    e.preventDefault();
    try {
       await setDoc(doc(db, "users", currentUser.uid), {
        ...data,
      });
    } catch (err) {
      console.log(err)
    }
    setSubmitted("Form Submitted");
  };
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Patient Form</h2>
        <Form onSubmit={handleAdd}>
        {submitted && <Alert variant="danger">{submitted}</Alert>}
          <Row className="mb-3">
            <Form.Group as={Col} key="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} key="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                id="age"
                type="text"
                placeholder="Age"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" key="mobile">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              id="mobile"
              type="text"
              placeholder="+91933XXXXXXX"
              onChange={handleInput}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} key="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                type="text"
                id="gender"
                defaultValue="Choose..."
                onChange={handleInput}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} key="city">
              <Form.Label>City</Form.Label>
              <Form.Control id="key" type="text" onChange={handleInput} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} key="prevDoctor">
              <Form.Label>Previously Consulted Doctor</Form.Label>
              <Form.Control
                id="prevDoctor"
                type="text"
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group as={Col} key="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                id="bloodGroup"
                type="text"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" key="symptoms">
            <Form.Label>Symptoms</Form.Label>
            <Form.Control
              as="textarea"
              id="symptoms"
              type="text"
              rows={3}
              onChange={handleInput}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Patient;
