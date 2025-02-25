import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import CrudButton from "./CrudButton";

const BookSearch = () => {
  const { name } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getBookByName/${name}`)
      .then((result) => {
        console.log("Fetched Books", result.data);
        setBook(result.data[0]);
      })
      .catch((err) => console.error("Error fetching book data: ", err));
  }, [name]);

  if (!book) {
    return <h2 className="text-center mt-5">Loading...</h2>;
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
            style={{ backgroundColor: "rgb(221, 222, 223)" }}
          >
            <CrudButton />
            <h1
              className="text-center text-decoration-underline"
              style={{ color: "black" }}
            >
              Book Info - {book.bookName}
            </h1>

            <div className="container mt-3">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <th>Book Name</th>
                    <td>{book.bookName}</td>
                  </tr>
                  <tr>
                    <th>Title</th>
                    <td>{book.title}</td>
                  </tr>
                  <tr>
                    <th>Author</th>
                    <td>{book.author}</td>
                  </tr>
                  <tr>
                    <th>ISBN Number</th>
                    <td>{book.isbnNumber}</td>
                  </tr>
                  <tr>
                    <th>Publish Year</th>
                    <td>{book.publishYear}</td>
                  </tr>
                  <tr>
                    <th>Copies Available</th>
                    <td>{book.copiesAvailable}</td>
                  </tr>

                  <tr>
                    <th>Category</th>
                    <td>{book.category}</td>
                  </tr>

                  <tr>
                    <th>Summary</th>
                    <td>{book.bookSummary}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookSearch;
