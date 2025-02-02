import React from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import RBookCrudButton from "./RBookCrudButton";

const ReturnBooks = () => {
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
            <RBookCrudButton />
            <div className="d-flex justify-content-center"></div>

            <div className="row   d-flex justify-content-center ">
              {/* Issued Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                Return Books
              </h1>

              <div className="row   d-flex justify-content-center  ">
                <div className="col-3 mt-4">
                  <Form.Control type="text" placeholder="Return ID" />
                  <br />
                  <label htmlFor="">Issue Date</label>
                  <Form.Control type="Date" placeholder="Issue Date" />
                  <br />
                  <label htmlFor="">Return Date</label>
                  <Form.Control type="Date" placeholder="Return Date" />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="ISBN Number For Book"
                  />
                  <br />
                </div>

                <div className="col-3 mt-3">
                  <Form.Control type="text" placeholder="Member ID" />
                  <br />

                  <Form className="">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Status"
                      />
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex justify-content-center align-items-center p-3">
                  <button className="btn btn-success p-2">Submit</button>
                </div>
              </div>

              {/* -------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReturnBooks;
