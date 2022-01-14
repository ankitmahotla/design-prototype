import React from "react";
import Card from "./Card/Card";

const About = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <p className="fs-7 text-muted">Why You Should Trust Us?</p>
        <h2>Get To Know About Us</h2>
      </div>
      <div className="card-container mt-4">
        <div className="row mx-6">
            <Card icon="chat" />
            <Card icon="file-lock" />
            <Card icon="people" />
          </div>
        </div>
      </div>
  );
};

export default About;
