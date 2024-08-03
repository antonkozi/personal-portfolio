import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col className="hero--text">
            <h1 className="title">Hi, I'm Anton</h1>
            <p className="description">
              Welcome to my website. I am software engineer with a passion for
              full stack web devlopment.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
