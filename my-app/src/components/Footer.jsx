import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Footer() {
  return (
    <div>
      <Container className="p-5">
        <Row>
          <Col md={6} className="text-start">
            <h1>
              <Icon.Binoculars size={30} />
              Techserve
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Voluptatibus veritatis eos iure consectetur <br /> commodi, dolor,
              consequuntur minus quisquam <br /> aperiam placeat eius aliquid
              nemo autem modi <br /> assumenda est quod! Distinctio, libero!
            </p>
          </Col>
          <Col md={6} className="text-end">
            <div>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#news">News</a>
              <a href="#contact">Contacts</a>
              <a href="#sign">Sign In</a>
            </div>
            <div className="p-4">
              <span className="px-2 fs-2">
                <Icon.Facebook />
              </span>
              <span className="px-2 fs-2">
                <Icon.Twitter />
              </span>
              <span className="px-2 fs-2">
                <Icon.Linkedin />
              </span>
            </div>
            <p>Copyright @bakeli All Rights Reserved 2023</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
