import React from "react";
import "../Header/Header.css"
import { Navbar, Form, Container, Nav, FormControl } from 'react-bootstrap';

function Header {
    return (
        <header>
        <>
        <div>
          <Container>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Pesquisar"
          className="me-2"
          aria-label="Pesquisar"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
        </div>
        </>
        </header>
    )
}

export default Header