import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTestimonial from "./CardTestimonial";
import Picture from "../assets/images/profil.jpg";

function Testimonials() {
  return (
    <div className="bg-body-secondary mt-5">
      <h2 className="pt-5">Client's Testimonials</h2>
      <Container>
        <Row>
          <Col md={4}>
            <CardTestimonial
              img={Picture}
              project={"Kelly Riley"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
              }
              house={"Bakeli"}
            />
          </Col>
          <Col md={4}>
            <CardTestimonial
              img={Picture}
              project={"Oliver Robinson"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
              }
              house={"Volkeno"}
            />
          </Col>
          <Col md={4}>
            {" "}
            <CardTestimonial
              img={Picture}
              project={"Nicole Brown"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, fuga placeat possimus et modi voluptas aut debitis eveniet hic libero excepturi quisquam asperiores molestias fugiat corrupti veniam eum! Deleniti, accusamus."
              }
              house={"Rey society"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
