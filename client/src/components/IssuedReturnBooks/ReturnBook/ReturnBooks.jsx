import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import RBookCrudButton from "./RBookCrudButton";
import axios from "axios";

const ReturnBooks = () => {
  // ! Declare state Variable
  const [returnId, setReturnId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [memberId, setMemberId] = useState("");
  const [status, setStatus] = useState("");

  // !save return books
  const submit = async (e) => {
    e.preventDefault();

    if (
      !returnId ||
      !issueDate ||
      !memberId ||
      !returnDate ||
      !isbnNumber ||
      !status
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/libraryBK/returnBookSave",
        {
          returnId,
          issueDate: new Date(issueDate),
          returnDate: new Date(returnDate),
          isbnNumber,
          memberId,
          status,
        }
      );
      console.log("Data saved successfully: ", response.data);
      window.location.reload();
    } catch (err) {
      if (err.response) {
        console.error("Error response from server ", err.response);
      } else if (err.request) {
        console.error("No response from server: ", err.request);
      } else {
        console.error("Error setting up request ", err.massage);
      }
    }
  };

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
                  <Form.Control
                    type="text"
                    placeholder="Return ID"
                    onChange={(e) => setReturnId(e.target.value)}
                  />
                  <br />
                  <label htmlFor="">Issue Date</label>
                  <Form.Control
                    type="Date"
                    placeholder="Issue Date"
                    onChange={(e) => setIssueDate(e.target.value)}
                  />
                  <br />
                  <label htmlFor="">Return Date</label>
                  <Form.Control
                    type="Date"
                    placeholder="Return Date"
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="ISBN Number For Book"
                    onChange={(e) => setIsbnNumber(e.target.value)}
                  />
                  <br />
                </div>

                <div className="col-3 mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Member ID"
                    onChange={(e) => setMemberId(e.target.value)}
                  />
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
                        onChange={(e) => setStatus(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex justify-content-center align-items-center p-3">
                  <button className="btn btn-success p-2" onClick={submit}>
                    Submit
                  </button>
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
