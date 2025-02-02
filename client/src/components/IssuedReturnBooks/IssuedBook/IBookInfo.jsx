import React from 'react'
import Table from "react-bootstrap/Table";

import { Container } from "react-bootstrap";
import IBCrudButton from './IBCrudButton';
import SideNavigation from '../../importentComponents/SideNavigation';

const IBookInfo = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    {/* Sidebar */}
    <SideNavigation/>
    {/* Main Content */}
    <Container fluid className="p-4">
      <div className="container p-4">
        {/* Second div */}
        <div
          className="col-12 p-4 rounded-5  shadow"
          style={{ backgroundColor: "rgba(167, 167, 167, 0)" }}
        >
          <div className="d-flex justify-content-center m-2">
            {/* Import Important component folder */}
           <IBCrudButton/>
            <br />
          </div>

          {/* Content */}
          <div>

            <h1 className="text-center text-decoration-underline" style={{color:"black"}}>Book Issued Info</h1>
            <div className="container mt-3">
              <Table striped bordered hover variant="dark">
                <tbody>
                  <tr>
                    <th>Issue ID</th>
                  </tr>
                  <tr>
                    <th>Book ID</th>
                  </tr>
                  <tr>
                    <th>Member ID</th>
                  </tr>
                  <tr>
                    <th>ISBN Number</th>
                  </tr>
                  <tr>
                    <th>Due Date</th>
                  </tr>
                  <tr>
                    <th>Return Date</th>
                  </tr>
                  <tr> <th>Status</th></tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default IBookInfo
