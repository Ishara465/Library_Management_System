import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import IBCrudButton from "./IBCrudButton";
import axios from "axios";

const IssuedBooks = () => {
  // ! Declare state Variable
  const [issueId, setIssueId] = useState("");
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("");

  //! save Book
  const Submit = async (e) => {
    e.preventDefault();

    if (
      !issueId ||
      !bookId ||
      !memberId ||
      !isbnNumber ||
      !dueDate ||
      !returnDate ||
      !status
    ) {
      alert("All fields are required! Please fill Out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/libraryBK/issueBookSave",
        {
          issueId,
          bookId,
          memberId,
          isbnNumber,
          dueDate: new Date(dueDate),
          returnDate: new Date(returnDate),
          status,
        }
      );
      console.log("Data saved successfully: ", response.data);
      window.location.reload();
    } catch (error) {
      if (error.response) {
        console.error("Error response from server: ", error.response.data);
      } else if (error.request) {
        console.error("No response from server: ", error.request);
      } else {
        console.error("Error setting up request: ", error.massage);
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
            <div className="d-flex justify-content-center">
              <IBCrudButton />
            </div>

            <div className="row   d-flex justify-content-center ">
              {/* Issued Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                Issued Books
              </h1>

              <div className="row   d-flex justify-content-center  ">
                <div className="col-3 mt-4">
                  <Form.Control
                    type="text"
                    placeholder="Issue ID"
                    onChange={(e) => setIssueId(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Book ID"
                    onChange={(e) => setBookId(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Member ID"
                    onChange={(e) => setMemberId(e.target.value)}
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
                  <label htmlFor="">Due Date</label>
                  <Form.Control
                    type="date"
                    placeholder="Published Year"
                    className="mt-1"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <br />
                  <label htmlFor="">Return Date</label>
                  <Form.Control
                    type="Date"
                    placeholder=""
                    onChange={(e) => setReturnDate(e.target.value)}
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
                  <button className="btn btn-success p-2" onClick={Submit}>
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

export default IssuedBooks;
