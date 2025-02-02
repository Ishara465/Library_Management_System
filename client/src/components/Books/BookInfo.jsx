import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import SideNavigation from "../importentComponents/SideNavigation";
import { Container } from "react-bootstrap";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // Store book details

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getBookID/${id}`)
      .then((result) => {
        console.log("Fetched Book:", result.data);
        setBook(result.data);
      })
      .catch((err) => console.error("Error fetching book data:", err));
  }, [id]); // Refetch when ID changes

  if (!book) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNavigation />
      <Container fluid className="p-4">
        <div className="container p-4">
          <div className="col-12 p-4 rounded-5 shadow" style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}>
            <h1 className="text-center text-decoration-underline" style={{ color: "black" }}>
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

export default BookInfo;
