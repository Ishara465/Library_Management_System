import React from "react";
import Table from "react-bootstrap/Table";
import CrudButton from "./CrudButton";
import SideNavigation from "../importentComponents/SideNavigation";
import { Container } from "react-bootstrap";


const BookInfo = () => {
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
            style={{ backgroundColor: "rgb(221, 222, 223)" }}
          >
            <div className="d-flex justify-content-center m-2">
              {/* Import Important component folder */}
              <CrudButton />
              <br />
            </div>

            {/* Content */}
            <div>

              <h1 className="text-center text-decoration-underline">Book Info</h1>
              <div className="container mt-3">
                <Table striped bordered hover variant="dark">
                  <tbody>
                    <tr>
                      <th>Book Name</th>
                    </tr>
                    <tr>
                      <th>Book Title</th>
                    </tr>
                    <tr>
                      <th>Author</th>
                    </tr>
                    <tr>
                      <th>ISBN Number</th>
                    </tr>
                    <tr>
                      <th>Category</th>
                    </tr>
                    <tr>
                      <th>Publish Year</th>
                    </tr>
                    <tr></tr>
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

export default BookInfo;
