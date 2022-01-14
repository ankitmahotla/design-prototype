import React from "react";
import './Card.styles.css';

const Card = (props) => {
  return (
    <div className="card col mx-4 my-4 bg-light">
      <div className="card-body">
      <i className={`bi bi-${props.icon}`} />
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Card;
