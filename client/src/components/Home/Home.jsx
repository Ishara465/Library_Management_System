import React, { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import {
  FaBook,
  FaUsers,
  FaHandHolding,
  FaPlusCircle,
  FaExchangeAlt,
  FaHeadset,
} from "react-icons/fa"; // Icons
import SideNavigation from "../importentComponents/SideNavigation";
import "./Home.css"; // Custom CSS for additional styling
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalMember, setTotalMember] = useState(0);
  const [totalBooksBorrowed, setTotalBooksBorrowed] = useState(0);

  // ? Total Books
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllBooks")
      .then((response) => {
        if (response.data.success && Array.isArray(response.data.content)) {
          setTotalBooks(response.data.content.length);
        } else {
          console.error("Unexpected data structure ", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching books ", err);
      });
  }, []);

  //? Total member
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllMembers")
      .then((response) => {
        if (response.data.success && Array.isArray(response.data.content)) {
          setTotalMember(response.data.content.length);
        } else {
          console.error("Unexpected data structure ", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching books ", err);
      });
  }, []);

  //? barrow books
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllIssueBooks")
      .then((response) => {
        if (response.data.success && Array.isArray(response.data.content)) {
          setTotalBooksBorrowed(response.data.content.length);
        } else {
          console.error("Unexpected data structure ", response.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching books ", err);
      });
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavigation />

      {/* Main Content */}
      <Container fluid className="p-4">
        {/* Hero Section */}
        <div className="hero-section text-center p-5 rounded-5 shadow mb-5">
          <h1 className="display-4">
            Welcome to the Library Management System
          </h1>
          <p className="lead">
            Manage your library efficiently with our powerful tools.
          </p>
          <Button variant="primary" size="lg" as={Link} to="/bookList">
            <FaBook /> Explore Books
          </Button>
        </div>

        {/* Quick Stats Section */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="text-center p-4 rounded-5 shadow">
              <Card.Body>
                <Card.Title>
                  <FaBook /> Total Books
                </Card.Title>
                <Card.Text className="display-4">{totalBooks}</Card.Text>
                <Button variant="outline-primary" as={Link} to="/bookList">
                  <FaBook /> View All Books
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center p-4 rounded-5 shadow">
              <Card.Body>
                <Card.Title>
                  <FaUsers /> Active Members
                </Card.Title>
                <Card.Text className="display-4">{totalMember}</Card.Text>
                <Button variant="outline-primary" as={Link} to="/memberInfo">
                  <FaUsers /> Manage Members
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center p-4 rounded-5 shadow">
              <Card.Body>
                <Card.Title>
                  <FaHandHolding /> Books Borrowed
                </Card.Title>
                <Card.Text className="display-4">
                  {totalBooksBorrowed}
                </Card.Text>
                <Button variant="outline-primary" as={Link} to="/iBookList">
                  <FaHandHolding /> View Borrowed Books
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="text-center p-4 rounded-5 shadow">
              <Card.Body>
                <Card.Title>
                  <FaPlusCircle /> Add New Books
                </Card.Title>
                <Card.Text>
                  Easily add new books to the library catalog.
                </Card.Text>
                <Button variant="outline-success" as={Link} to="/books">
                  <FaPlusCircle /> Add Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center p-4 rounded-5 shadow">
              <Card.Body>
                <Card.Title>
                  <FaExchangeAlt /> Manage Borrowings
                </Card.Title>
                <Card.Text>
                  Track and manage book borrowings and returns.
                </Card.Text>
                <Button variant="outline-warning" as={Link} to="/issuedBook">
                  <FaExchangeAlt /> Manage Borrowings
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action Section */}
      </Container>
    </div>
  );
};

export default Home;
