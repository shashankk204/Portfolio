import React from 'react'
import "./Nbar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Nbar() {
    return (
        <>
            {/* <nav>
                <div className="container">

                    <div className="logo">
                        SK
                    </div>
                    <div className='Nav_links'>
                    
                    <ul >
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    </ul>
                    </div>
                    </div>
                </nav> */}
            {[false,'md'].map((expand) => (
                <Navbar fixed='top' bg="dark" data-bs-theme="dark" key={expand} expand={expand} className="bg-body-tertiary mb-3">

          <Container fluid>
            <Navbar.Brand href="#">SK</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#project">Projects</Nav.Link>
                  <Nav.Link href="#skill">Skills</Nav.Link>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
                
        </Navbar>
      ))}






        </>
    )
}

export default Nbar
