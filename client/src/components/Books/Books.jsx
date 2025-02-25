import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Books.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";
import axios from "axios";

const Books = () => {
  // ! Declare state Variable
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [copiesAvailable, setCopiesAvailable] = useState("");
  const [category, setCategory] = useState("");
  const [bookSummary, setBookSummary] = useState("");

  //! save Book
  const Submit = async (e) => {
    e.preventDefault();

    if (
      !bookId ||
      !bookName ||
      !title ||
      !author ||
      !isbnNumber ||
      !publishYear ||
      !copiesAvailable ||
      !bookSummary
    ) {
      alert("All fields are required! Please fill Out all fields");
      return;
    }

    if (isNaN(parseInt(copiesAvailable)) || parseInt(copiesAvailable) <= 0) {
      alert("Copies Available must be a positive number");
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/libraryBK/bookSave",
        {
          bookId,
          bookName,
          title,
          author,
          isbnNumber,
          publishYear: new Date(publishYear),
          category,
          copiesAvailable,
          bookSummary,
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
          {/* Second div */}
          <div
            className="col-12 p-4 rounded-5 shadow"
            style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}
          >
            {/* Import Important component folder */}
            <CrudButton />
            <br />

            <h1
              className="text-center text-decoration-underline"
              style={{ color: "black" }}
            >
              Add Book
            </h1>
            <div className="row   d-flex justify-content-center  ">
              <div className="col-3 mt-4">
                <Form.Control
                  type="text"
                  placeholder="Book ID"
                  onChange={(e) => setBookId(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Book Name"
                  onChange={(e) => setBookName(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="ISBN Number"
                  onChange={(e) => setIsbnNumber(e.target.value)}
                />
                <br />
              </div>

              <div className="col-3 mt-3">
                <label htmlFor="">Published Year</label>
                <Form.Control
                  type="date"
                  placeholder="Published Year"
                  className="mt-1"
                  onChange={(e) => setPublishYear(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Copies Available"
                  onChange={(e) => setCopiesAvailable(e.target.value)}
                />
                <br />

                <Form.Control
                  type="text"
                  placeholder="Category"
                  onChange={(e) => setCategory(e.target.value)}
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
                      placeholder="Book summary"
                      onChange={(e) => setBookSummary(e.target.value)}
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Books;
