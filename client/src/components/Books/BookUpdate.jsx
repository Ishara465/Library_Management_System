import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./Books.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookUpdate = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [copiesAvailable, setCopiesAvailable] = useState("");
  const [bookSummary, setBookSummary] = useState("");
  const [category, setCategory] = useState("");

  // Fetch data from ID
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getBookID/${id}`)
      .then((result) => {
        console.log("Fetched Book: ", result.data);
        setBook(result.data);
        setBookId(result.data.bookId);  // Set initial state with fetched data
        setBookName(result.data.bookName);
        setTitle(result.data.title);
        setAuthor(result.data.author);
        setIsbnNumber(result.data.isbnNumber);
        setPublishYear(result.data.publishYear);
        setCopiesAvailable(result.data.copiesAvailable);
        setBookSummary(result.data.bookSummary);
        setCategory(result.data.category);
      })
      .catch((err) => console.error("Error fetching book data: ", err));
  }, [id]);

  // Handle book update
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!book) {
      console.error("book data is not loaded yet");
      return;
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/libraryBK/bookUpdate/${id}`,
        {
          bookId,
          bookName,
          title,
          author,
          isbnNumber,
          publishYear: new Date(publishYear),
          copiesAvailable,
          bookSummary,
          category,
        }
      );
      console.log("Data updated successfully:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (!book) {
    return <div>Loading...</div>; // Display loading message while book data is being fetched
  }

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
            <div className="d-flex justify-content-center ">
              <CrudButton />
              <br />
            </div>
            <h1 className="text-center text-decoration-underline" style={{ color: "black" }}>
              Update Book
            </h1>

            <div className="row d-flex justify-content-center">
              <div className="col-3 mt-4">
                <Form.Control
                  type="text"
                  placeholder="Book ID"
                  disabled
                  value={book.bookId}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Book Name"
                  required
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="ISBN Number"
                  value={isbnNumber}
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
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Copies Available"
                  value={copiesAvailable}
                  onChange={(e) => setCopiesAvailable(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Category"
                  value={category}
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
                      value={bookSummary}
                      onChange={(e) => setBookSummary(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </div>

              <div className="d-flex justify-content-center align-items-center p-3">
                <button className="btn btn-success p-2" onClick={handleUpdate}>
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

export default BookUpdate;
