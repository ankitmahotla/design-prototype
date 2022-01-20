import React from "react";
import "./Hero.styles.css";
import Doctor from '../../Images/Doctor.png';
import About from "../../About/About";

const Hero = () => {
  return (
    <div className="bg-light">
      <div className="row mx-3 align-items-center">
        <div className="col">
          <h1 className="fw-bold">Health Care</h1>
          <p className="fs-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            accusamus tempore temporibus rem amet laudantium animi optio
            voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit
            incidunt rem quisquam eos!
          </p>
          <a href="/" className="btn btn-outline-primary">
            Book an Appointment
          </a>
        </div>

        <div className="col offset-md-3">
          <img src={Doctor} alt="" />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Hero;
