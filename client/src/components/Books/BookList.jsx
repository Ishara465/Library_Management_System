import React from "react";
import "./Books.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const BookList = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavigation />
      {/* Main Content */}
      <Container fluid className="p-4">
        <div className="container p-4">
          {/* Second div */}
          <div
            className="col-12 p-4 rounded-5 shadow"
            style={{ backgroundColor: "rgb(221, 222, 223)" }}
          >
            <div className="d-flex justify-content-center ">
              {/* Import Important component folder */}
              <CrudButton />
              {/* Search bar */}
            <div className="d-flex ms-auto">
            <Form inline >
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search Book"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" variant="outline-primary">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </div>


              <br />
            </div>

            
            {/* Content */}

            <h1 className="text-center text-decoration-underline">Books List</h1>
            <div className="row ">
              <Card style={{ width: "18rem" }} className="m-2 rounded-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div>
                    <Link to="/bookInfo" className="btn btn-secondary m-1">
                      Info
                    </Link>
                    <Link to="/bookUpdate" className="btn btn-warning m-1">
                      Update
                    </Link>
                    <Button variant="danger" className="m-1">Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookList;
