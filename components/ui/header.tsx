'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// ... rest of your code

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
  
        {/* Additional space to push content to the right */}
        <Nav className="ms-auto" />
  
        {/* Categories pushed to the right */}
        <Nav>
          <NavDropdown title="Noise" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/construction_noise_monitoring">Construction Noise Monitoring</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Field Noise Measurements</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Environmental Noise</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Industrial Noise</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Vibration" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Construction Vibration Monitoring</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Demolition Vibration Monitoring</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Noise Encosure Vibration Design</NavDropdown.Item>
            
          </NavDropdown>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  );
}

export default CollapsibleExample;