import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import Table from "react-bootstrap/Table";
import RBookCrudButton from "./RBookCrudButton";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

const RViewBooks = () => {
  const [returnBook, setReturnBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  //? handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //? handle from submit
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      navigate(`/rBookSearch/${searchQuery}`);
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllReturnBooks")
      .then((response) => {
        console.log("API Response: ", response.data);

        if (response.data.success & Array.isArray(response.data.content)) {
          setReturnBook(response.data.content);
        } else {
          console.error("Unexpected data structure ", response.data);
          setReturnBook([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching books ", error);
        setReturnBook([]);
      });
  }, []);

  // ! Delete Books
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book? ")) {
      axios
        .delete(`http://127.0.0.1:5000/libraryBK/deleteReturnBook/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Book delete canceled");
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
            {/* Search bar & crud button*/}

            <div className="d-flex justify-content-center">
              <RBookCrudButton />
              {/* Search bar */}
              <div className="d-flex ms-auto">
                <Form inline onSubmit={handleSearch}>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search Member"
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
            </div>

            <div className="row   d-flex justify-content-center">
              {/* Home Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                View Return Books Info
              </h1>

              {returnBook.length > 0 ? (
                returnBook.map((returnBook, index) => (
                  <Table striped bordered hover key={index}>
                    <thead>
                      <tr>
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
                        <td>{returnBook.returnId}</td>
                        <td>{returnBook.memberId}</td>
                        <td>{returnBook.isbnNumber}</td>
                        <td>{returnBook.issueDate}</td>
                        <td>{returnBook.returnDate}</td>
                        <td>{returnBook.status}</td>

                        <td>
                          <div className="d-flex justify-content-center">
                            <Link
                              to={`/rBookUpdate/${returnBook._id}`}
                              className="btn btn-warning  m-1"
                            >
                              Update
                            </Link>
                            <Button
                              className="btn btn-danger  m-1"
                              onClick={() => handleDelete(returnBook._id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                ))
              ) : (
                <p className="text-center">No return Books are available</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RViewBooks;
