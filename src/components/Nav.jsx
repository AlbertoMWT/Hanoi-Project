import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar
        href="#home"
        className="navs align-middle"
        bg="dark"
        variant="dark"
        navs
      >
        <Container className="text-center">
          <Navbar.Brand href="#home">
            <h3 className="text-center">Hanoi Project</h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
