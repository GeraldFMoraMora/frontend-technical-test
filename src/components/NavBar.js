import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown.js";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile'
import TaskAdmin from '../pages/TaskAdmin/components/TaskManager';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Task App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Exit</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/taskadmin">Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default NavBar;