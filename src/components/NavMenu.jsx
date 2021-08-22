import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Icon, Image } from "semantic-ui-react";

const NavMenu = ({ visible, setVisible }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
            <Icon
              onClick={() => setVisible(!visible)}
              name={visible ? "times" : "sidebar"}
              size="large"
              style={{ cursor: "pointer" }}
              color="grey"
            />
          <Navbar.Brand href="/">
            <Image src="/bluestone/BLUESTONE6.jpg" size="tiny" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
