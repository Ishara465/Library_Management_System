import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../../importentComponents/SideNavigation";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import IBCrudButton from "./IBCrudButton";

const IBookSearch = () => {
  const { issueId } = useParams();
  const [issueBook, setIssueBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getIssueBookByIssueId/${issueId}`)
      .then((result) => {
        console.log("Fetched Books", result.data);
        if (result.data.length > 0) {
          setIssueBook(result.data[0]); // Set the first item in the array
        } else {
          setError("No book found with the provided Issue ID.");
        }
      })
      .catch((err) => {
        console.error("Error fetching book data: ", err);
        setError("Failed to fetch book data. Please try again later.");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, [issueId]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-5 text-danger">{error}</h2>;
  }

  if (!issueBook) {
    return <h2 className="text-center mt-5">No book data available.</h2>;
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
            <IBCrudButton />
            <div className="row d-flex justify-content-center mt-5">
              {/* Home Body */}
              <h1>Search for Issue Book Issue Id - {issueBook.issueId}</h1>

              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <th>Issue Id</th>
                    <td>{issueBook.issueId}</td>
                  </tr>
                  <tr>
                    <th>Book Id</th>
                    <td>{issueBook.bookId}</td>
                  </tr>
                  <tr>
                    <th>Member Id</th>
                    <td>{issueBook.memberId}</td>
                  </tr>
                  <tr>
                    <th>ISBN Number</th>
                    <td>{issueBook.isbnNumber}</td>
                  </tr>
                  <tr>
                    <th>Due Date</th>
                    <td>{new Date(issueBook.dueDate).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th>Return Date</th>
                    <td>
                      {issueBook.returnDate
                        ? new Date(issueBook.returnDate).toLocaleDateString()
                        : "Not returned yet"}
                    </td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{issueBook.status}</td>
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

export default IBookSearch;
