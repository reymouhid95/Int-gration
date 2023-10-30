import { Container, Navbar, Nav, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function NavBar() {
  return (
    <div className="mb-5">
      <Navbar expand="lg" className="bg-transparent fw-bold fixed-top nav p-3">
        <Container>
          <Navbar.Brand href="#home">
            <Icon.Binoculars size={30} />
            Techserve
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
              <Nav.Link href="#signIn">Sign In</Nav.Link>
              <Button
                variant="outline-dark"
                className="text-uppercase fw-bold rounded-5"
              >
                Try It Free
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
