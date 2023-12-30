import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile'
import TaskAdmin from '../pages/TaskAdmin/components/TaskManager';

function NavBar() {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Task App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#task">Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;