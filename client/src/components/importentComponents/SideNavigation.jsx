import React from "react";
import { Nav, Navbar } from "react-bootstrap";

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
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/bookList">Books</Nav.Link>
        <Nav.Link href="/memberInfo">Members</Nav.Link>
        <Nav.Link href="/issuedBook">Issued Book <br />to Members</Nav.Link>
        <Nav.Link href="/returnBook">Return Book <br />to Members</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideNavigation;
