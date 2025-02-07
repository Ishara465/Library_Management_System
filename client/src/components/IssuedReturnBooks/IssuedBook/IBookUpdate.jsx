import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import axios from "axios";
import IBCrudButton from "./IBCrudButton";
import SideNavigation from "../../importentComponents/SideNavigation";
import { useParams } from "react-router-dom";

const IBookUpdate = () => {
  // ! Declare state Variable
  const { id } = useParams();
  const [issueBook, setIssueBook] = useState(null);
  const [issueId, setIssueId] = useState("");
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("");

  // Fetch data from ID
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getIssueBook/${id}`)
      .then((result) => {
        console.log("Fetched Book: ", result.data);
        setIssueBook(result.data);
        setIssueId(result.data.issueId); // Set initial state with fetched data
        setBookId(result.data.bookId);
        setMemberId(result.data.memberId);
        setIsbnNumber(result.data.isbnNumber);
        setDueDate(result.data.dueDate);
        setReturnDate(result.data.returnDate);
        setStatus(result.data.status);
      })
      .catch((err) => console.error("Error fetching issue books data: ", err));
  }, [id]);

  //! save update issue Book
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/libraryBK/issueBookUpdate/${id}`,
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
            style={{ backgroundColor: "rgba(19, 115, 211, 0)" }}
          >
            <div className="d-flex justify-content-center">
              <IBCrudButton />
            </div>

            <div className="row   d-flex justify-content-center ">
              {/* Issued Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                Issued Book Update
              </h1>

              <div className="row   d-flex justify-content-center  ">
                <div className="col-3 mt-4">
                  <Form.Control
                    type="text"
                    placeholder="Issue ID"
                    value={issueId}
                    disabled
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Book ID"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Member ID"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="ISBN Number For Book"
                    value={isbnNumber}
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
                        value={status}
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

export default IBookUpdate;
