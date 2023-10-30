import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

function Projects() {
  return (
    <div className="text-start">
      <Row>
        <Col md={6} className="meet"></Col>
        <Col md={6}>
          <Cards
            project={"How we do it"}
            first={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
            }
            second={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi."
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
