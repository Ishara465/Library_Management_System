import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Container } from "react-bootstrap";
import IBCrudButton from "./IBCrudButton";
import SideNavigation from "../../importentComponents/SideNavigation";
import { useParams } from "react-router-dom";

const IBookInfo = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [issueBook, setIssueBook] = useState(null); // Store book details

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getIssueBook/${id}`)
      .then((result) => {
        console.log("Fetched issue Books:", result.data);
        setIssueBook(result.data);
      })
      .catch((err) => console.error("Error fetching issue books data:", err));
  }, [id]); // Refetch when ID changes

  if (!issueBook) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavigation />
      {/* Main Content */}
      <Container fluid className="p-4">
        <div className="container p-4">
          {/* Second div */}
          <div
            className="col-12 p-4 rounded-5  shadow"
            style={{ backgroundColor: "rgba(167, 167, 167, 0)" }}
          >
            {/* Import Important component folder */}
            <IBCrudButton />
            <br />

            {/* Content */}
            <div>
              <h1
                className="text-center text-decoration-underline"
                style={{ color: "black" }}
              >
                Book Issued Info
              </h1>
              <div className="container mt-3">
                <Table striped bordered hover variant="dark">
                  <tbody>
                    <tr>
                      <th>Issue Id</th>
                      <td>{issueBook.issueId}</td>
                    </tr>
                    <tr>
                      <th>BookId</th>
                      <td>{issueBook.bookId}</td>
                    </tr>
                    <tr>
                      <th>MemberId</th>
                      <td>{issueBook.memberId}</td>
                    </tr>
                    <tr>
                      <th>ISBN Number</th>
                      <td>{issueBook.isbnNumber}</td>
                    </tr>
                    <tr>
                      <th>Due Date</th>
                      <td>{issueBook.dueDate}</td>
                    </tr>
                    <tr>
                      <th>Return Date</th>
                      <td>{issueBook.returnDate}</td>
                    </tr>

                    <tr>
                      <th>status</th>
                      <td>{issueBook.status}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IBookInfo;
