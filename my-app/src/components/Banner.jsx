import React from "react";
import { Container, Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="text-start mt-5 banner fw-bold">
      <Container>
        <div className="left">
          <h1>
            A leading provider <br /> of consulting services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia
            inventore et <br /> commodi cupiditate incidunt blanditiis.
          </p>
        </div>
        <Button
          variant="outline-dark"
          className="text-uppercase fw-bold rounded-5 try"
        >
          Try It Free
        </Button>{" "}
      </Container>
    </div>
  );
}

export default Banner;
