import React, { useState, useEffect } from "react";
import "./Books.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

const BookList = () => {
  // State to store books
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllBooks")
      .then((response) => {
        console.log("API Response: ", response.data);

        if (response.data.success && Array.isArray(response.data.content)) {
          setBooks(response.data.content);
        } else {
          console.error("Unexpected data structure: ", response.data);
          setBooks([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching books: ", error);
        setBooks([]);
      });
  }, []);

  // ! Delete Books
  const handleDelete = (id)=>{

    if(window.confirm("Are you sure you want to delete this book? ")){

     axios.delete(`http://127.0.0.1:5000/libraryBK/deleteBook/${id}`)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }else{
    console.log("Book delete canceled")
  }
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
            <div className="d-flex justify-content-center">
              {/* Import Important component folder */}
              <CrudButton />
              {/* Search bar */}
              <div className="d-flex ms-auto">
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control type="text" placeholder="Search Book" className="mr-sm-2" />
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

            {/* Content */}
            <h1 className="text-center text-decoration-underline" style={{ color: "black" }}>
              Books List
            </h1>
            <div className="row">
            {books.length > 0 ? (
                  books.map((book, index) => (
                    <Card style={{ width: "18rem" }} className="m-2 rounded-3" key={index}>
                      
                      <Card.Body>
                        <Card.Title>{book.bookName}</Card.Title>
                        <Card.Text>{book.title}</Card.Text>
                        <div>
                          <Link to={`/bookInfo/${book._id}`} className="btn btn-secondary m-1">
                            Info
                          </Link>
                          <Link to={`/bookUpdate/${book._id}`} className="btn btn-warning m-1">
                            Update
                          </Link>
                          <Button variant="danger" className="m-1"
                          onClick={()=>handleDelete(book._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p className="text-center">No books available.</p>
                )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookList;
