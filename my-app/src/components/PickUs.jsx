import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/images/3.png";
import Cards from "./Cards";

function PickUs() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="text-start">
            {" "}
            <Cards
              project={"Why we should pick us"}
              first={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
              }
              second={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi."
              }
            />
          </Col>
          <Col md={6}>
            {" "}
            <img src={Image} alt="Diagram" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PickUs;
