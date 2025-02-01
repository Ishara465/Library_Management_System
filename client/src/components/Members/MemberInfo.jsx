import React from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import Table from "react-bootstrap/Table";
import MemberCrudButton from "./MemberCrudButton";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MemberInfo = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <SideNavigation />
      {/* Main Content */}
      <Container fluid className="p-4">
        <div className="container p-4">
          <div
            className="col-12 p-4 rounded-5 shadow "
            style={{ backgroundColor: "rgb(221, 222, 223)" }}
          >
            <div className="d-flex justify-content-center">
              <MemberCrudButton />
            </div>
            <div className="row  d-flex justify-content-center  m-2">
              {/* Home Body */}
              <h1 className="text-center mb-3">Member Info</h1>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Member ID</th>
                    <th>Member Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Date Of Birth</th>
                    <th>Join Date</th>
                    <th>References Details</th>
                    <th>About Member</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Link to="/memberUpdate" className="btn btn-warning  m-1">
                        Update
                      </Link>
                      <Button className="btn btn-danger  m-1">Delete</Button>
                    </div>
                  </td>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MemberInfo;
