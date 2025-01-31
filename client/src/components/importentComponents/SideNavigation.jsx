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
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideNavigation;
