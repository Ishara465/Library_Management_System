import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Books.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";

const Books = () => {
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
              <br />
            </div>
            <h1 className="text-center">Add Book</h1>
            <div className="row   d-flex justify-content-center  ">
              <div className="col-3 mt-4">
              <Form.Control type="text" placeholder="Book ID" />
              <br />
                <Form.Control type="text" placeholder="Book Name" />
                <br />
                <Form.Control type="text" placeholder="Title" />
                <br />
                <Form.Control type="text" placeholder="Author" />
                <br />
                <Form.Control type="text" placeholder="ISBN Number" />
                <br />
               
              </div>

              <div className="col-3 mt-3">
                <label htmlFor="">Published Year</label>
                <Form.Control
                  type="date"
                  placeholder="Published Year"
                  className="mt-1"
                />
                <br />
                <Form.Control type="text" placeholder="Copies Available" />
                <br />

                <Form.Control type="text" placeholder="Category" />

<br />
                <Form className="">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Book summary"
                    />
                  </Form.Group>
                </Form>
              </div>

              <div className="d-flex justify-content-center align-items-center p-3">
                <button className="btn btn-success p-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Books;
