import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
       
    <Container>
    
    <Navbar.Brand href="#home" >
            <img 
              src="/img/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Brand href="/" className='text-center'>Library Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
      

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/books">Books</NavDropdown.Item>
            <NavDropdown.Item href="/bookList">
             List of books
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>  

        </Nav>
        <Form className="d-flex ms-auto">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  
  )
}

export default Navigation
