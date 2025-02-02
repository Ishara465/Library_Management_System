import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
       
    <Container>
    
    <Navbar  className="w-100 d-flex justify-content-center align-items-center">
      <div className="d-flex align-items-center">
        <Navbar.Brand href="/">
          <img 
            src="/img/Logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Library Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/" className="ms-2 fw-bold fs-4 text-white">
          Library Management System
        </Navbar.Brand>
      </div>
    </Navbar>


     
    </Container>
   <Button  variant="success" className='m-3'>Logout</Button>
  </Navbar>
  

  
  )
}

export default Navigation
