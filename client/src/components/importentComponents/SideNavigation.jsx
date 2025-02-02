import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FaHome, FaBook, FaUsers, FaBookOpen, FaUndo } from 'react-icons/fa';

const SideNavigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="flex-column p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Nav className="flex-column">
      
        <Nav.Link href="/">
        <FaHome style={{ marginRight: '8px' }} />
        Home</Nav.Link>   

        <Nav.Link href="/bookList">
        <FaBook style={{ marginRight: '8px' }} />Books</Nav.Link>

        <Nav.Link href="/memberInfo">
        <FaUsers style={{ marginRight: '8px' }} />Members</Nav.Link>

        <Nav.Link href="/issuedBook">
        <FaBookOpen style={{ marginRight: '8px' }} />Issued Book <br />to Members</Nav.Link>

        <Nav.Link href="/returnBook">
        <FaUndo style={{ marginRight: '8px' }} />Return Book <br />to Members</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideNavigation;
