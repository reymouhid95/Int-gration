import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";

function Activity() {
  return (
    <div className="text-start mt-5">
      <Row>
        <Col md={6} className="who"></Col>
        <Col md={6}>
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
      </Row>
    </div>
  );
}

export default Activity;
