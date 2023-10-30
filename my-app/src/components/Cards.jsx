import React from "react";
import { Button, Card } from "react-bootstrap";

function Cards({ project, first, second }) {
  return (
    <div className="mt-5">
      <div className="pt-1">
        <Card className="card p-5">
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title className="fw-bold">{project}</Card.Title>
            <Card.Text>{first}</Card.Text>
            <Card.Text>{second}</Card.Text>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-info"
                className="mb-3 text-uppercase fw-bold try rounded-5"
              >
                Learn More
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
