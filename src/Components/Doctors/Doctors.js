import React from "react";
import { Button, Card} from "react-bootstrap";

const doctors = [
  {
    name: "Rajesh Sood",
    age: 7,
    field: "Orthopedist",
    imgUrl:
      "https://imagesx.practo.com/providers/dr-shashidhar-v-orthopedic-surgeon-bangalore-fa460a65-2037-4193-8013-f07373cafacd.jpg?i_type=t_100x100",
  },
  {
    name: "Rajesh Sood",
    age: 7,
    field: "Orthopedist",
    imgUrl:
      "https://imagesx.practo.com/providers/dr-shashidhar-v-orthopedic-surgeon-bangalore-fa460a65-2037-4193-8013-f07373cafacd.jpg?i_type=t_100x100",
  },
  {
    name: "Rajesh Sood",
    age: 7,
    field: "Orthopedist",
    imgUrl:
      "https://imagesx.practo.com/providers/dr-shashidhar-v-orthopedic-surgeon-bangalore-fa460a65-2037-4193-8013-f07373cafacd.jpg?i_type=t_100x100",
  },
];

const Doctors = () => {
  return (
    <div>
      {doctors.map((doctor) => (
        <Card className="mx-auto m-3" style={{ width: "30rem" }}>
          <Card.Body className="d-flex justify-content-start">
            <div>
              <Card.Img
                variant="left"
                src={doctor.imgUrl}
                style={{ flex: "0 0 auto", width: "200px", height: "200px" }}
              />
            </div>
            <div className="text-left">
              <Card.Text style={{ marginLeft: "1rem" }}>
                <Card.Title>{doctor.name}</Card.Title>
                Experience: {doctor.age}
                <br />
                Field: {doctor.field}
              </Card.Text>
              <Button>Give Access</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Doctors;
