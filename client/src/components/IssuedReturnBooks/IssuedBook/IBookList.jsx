import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import IBCrudButton from "./IBCrudButton";
import SideNavigation from "../../importentComponents/SideNavigation";
import axios from "axios";

const IBookList = () => {
  const [issueBook, setIssueBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  //! handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //! Handle from submit
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      navigate(`/iBookSearch/${searchQuery}`);
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllIssueBooks")
      .then((response) => {
        console.log("API Response: ", response.data);

        if (response.data.success && Array.isArray(response.data.content)) {
          setIssueBook(response.data.content);
        } else {
          console.error("Unexpected data structure: ", response.data);
          setIssueBook([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching books: ", error);
        setIssueBook([]);
      });
  }, []);

  // Define the handleDelete function
  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/libraryBK/deleteIssueBook/${id}`)
      .then((response) => {
        console.log("Book deleted successfully: ", response.data);
        // Remove the deleted book from the state
        setIssueBook(issueBook.filter((book) => book._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting book: ", error);
      });
  };

  return (
    <div>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <SideNavigation />
        {/* Main Content */}
        <Container fluid className="p-4">
          <div className="container p-4">
            {/* Second div */}
            <div
              className="col-12 p-4 rounded-5 shadow"
              style={{ backgroundColor: "rgba(221, 222, 223, 0.03)" }}
            >
              <div className="d-flex justify-content-center ">
                {/* Import Important component folder */}
                <IBCrudButton />
                {/* Search bar */}
                <div className="d-flex ms-auto">
                  <Form inline onSubmit={handleSearch}>
                    <Row>
                      <Col xs="auto">
                        <Form.Control
                          type="text"
                          placeholder="Search Book"
                          className=" mr-sm-2"
                          value={searchQuery}
                          onChange={handleChange}
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
                <br />
              </div>

              {/* Content */}
              <h1
                className="text-center text-decoration-underline"
                style={{ color: "black" }}
              >
                Issued Books List
              </h1>
              <div className="row ">
                {issueBook.length > 0 ? (
                  issueBook.map((issueBook, index) => (
                    <Card
                      style={{ width: "18rem" }}
                      className="m-2 rounded-3"
                      key={index}
                    >
                      <Card.Body>
                        <Card.Title>{issueBook.issueId}</Card.Title>
                        <Card.Text>{issueBook.bookId}</Card.Text>
                        <div>
                          <Link
                            to={`/iBookInfo/${issueBook._id}`}
                            className="btn btn-secondary m-1"
                          >
                            Info
                          </Link>
                          <Link
                            to={`/iBookUpdate/${issueBook._id}`}
                            className="btn btn-warning m-1"
                          >
                            Update
                          </Link>
                          <Button
                            variant="danger"
                            className="m-1"
                            onClick={() => handleDelete(issueBook._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p className="text-center">No issue books are available.</p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default IBookList;
