import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/antonkozi_transparent-.png";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width={128} height={128} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="navbar-link">
              About
            </Nav.Link>
            <Nav.Link href="/projects" className="navbar-link">
              Projects
            </Nav.Link>
            <Nav.Link href="/#contact" className="navbar-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
