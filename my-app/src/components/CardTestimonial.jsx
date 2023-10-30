import React from "react";
import { Card } from "react-bootstrap";

function CardTestimonial({ project, description, house, img }) {
  return (
    <div className="mt-5">
      <div>
        <Card className="card mb-5 pb-5">
          <Card.Img variant="top" src={img} className="img" />
          <Card.Body>
            <Card.Title className="pt-4">{project}</Card.Title>
            <Card.Text className="pt-1">{house}</Card.Text>
            <Card.Text className="pt-4">{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardTestimonial;
