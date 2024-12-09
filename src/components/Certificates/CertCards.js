import React from "react";
import Card from "react-bootstrap/Card";
function CertCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: "300px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default CertCards;
