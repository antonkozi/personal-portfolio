import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../Components/HeroSection";
import Navigation from "../Components/NavBar";
import Skills from "../Components/Skills";
import keanu from "../assets/img/keanu.jpg";

export function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Container>
        <Row>
          <Col className="image--column">
            <img src={keanu} alt="placeholder" />
          </Col>
          <Col className="skills--column">
            <Skills />
          </Col>
        </Row>
      </Container>
    </>
  );
}
