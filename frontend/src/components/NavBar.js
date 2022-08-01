import React from "react";
import { Link } from "react-router-dom";
import { Container,Nav, Navbar } from 'react-bootstrap';

function NavBar(){
    return (
        
            <div>        
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">DocShare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/all-documents">All Documents</Nav.Link>
                <Nav.Link as={Link} to="/create-new-document">Create New Document</Nav.Link>
                <Nav.Link as={Link} to="/search">Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

      );
}

export default NavBar;