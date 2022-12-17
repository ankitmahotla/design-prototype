import React from "react";
import { Form, Button, Card, Row, Col} from "react-bootstrap";

const Patient = () => {
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Patient Form</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} key="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group as={Col} key="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                id="age"
                type="text"
                placeholder="Age"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" key="mobile">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              id="mobile"
              type="text"
              placeholder="+91933XXXXXXX"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} key="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                type="text"
                id="gender"
                defaultValue="Choose..."
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} key="city">
              <Form.Label>City</Form.Label>
              <Form.Control id="key" type="text" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} key="prevDoctor">
              <Form.Label>Previously Consulted Doctor</Form.Label>
              <Form.Control
                id="prevDoctor"
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col} key="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                id="bloodGroup"
                type="text"
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
