import React from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import Table from "react-bootstrap/Table";
import RBookCrudButton from "./RBookCrudButton";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const RViewBooks = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavigation />
      {/* Main Content */}
      <Container fluid className="p-4">
        <div className="container p-4">
          <div
            className="col-12 p-4 rounded-5 shadow"
            style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}
          >
            {/* Search bar & crud button*/}

            <div className="d-flex justify-content-center">
              <RBookCrudButton />
              {/* Search bar */}
              <div className="d-flex ms-auto">
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search Member"
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit" variant="outline-primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>

            <div className="row   d-flex justify-content-center">
              {/* Home Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                View Return Books Info
              </h1>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Return ID</th>
                    <th>Member ID</th>
                    <th>ISBN for Book</th>
                    <th>Issue Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Link
                          to="/rBookUpdate"
                          className="btn btn-warning  m-1"
                        >
                          Update
                        </Link>
                        <Button className="btn btn-danger  m-1">Delete</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RViewBooks;
