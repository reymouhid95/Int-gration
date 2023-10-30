import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Services() {
  return (
    <div className="mt-5">
      <Container>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia{" "}
          <br />
          inventore et commodi cupiditate incidunt blanditiis.
        </p>
        <Row className="mt-5 text-start">
          <Col md={6}>
            <h3>
              <span className="px-1 fs-1 icon">
                <Icon.CashCoin />
              </span>
              Corporate Finance
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
          <Col md={6}>
            <h3>
              {" "}
              <span className="px-1 fs-1 icon">
                <Icon.Tv />
              </span>
              Information Management
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
        </Row>
        <Row className="text-start">
          <Col md={6}>
            <h3>
              {" "}
              <span className="px-1 fs-1 icon">
                <Icon.Signpost2Fill />
              </span>
              Operations Management
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
          <Col md={6}>
            <h3>
              {" "}
              <span className="px-1 fs-1 icon">
                <Icon.GraphUpArrow />
              </span>
              Strategy And Optimisation
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
        </Row>
        <Row className="text-start">
          <Col md={6}>
            <h3>
              {" "}
              <span className="px-1 fs-1 icon">
                <Icon.ExclamationCircle />
              </span>
              Risk Management
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
          <Col md={6}>
            <h3>
              {" "}
              <span className="px-1 fs-1 icon">
                <Icon.BroadcastPin />
              </span>
              Technologies And Innovations
            </h3>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              laboriosam adipisci ullam nihil dignissimos ad veniam odit quo.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
