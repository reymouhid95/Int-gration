import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import Image from "../assets/images/3.png";

function Stats() {
  return (
    <div className="mb-5">
      <Container>
        <Row>
          <Col md={6} className="text-start">
            <Cards
              project={"Who we are"}
              first={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
              }
              second={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi."
              }
            />
          </Col>
          <Col md={6}>
            <img src={Image} alt="Diagram" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Stats;
