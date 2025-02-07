import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import { useParams } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

const MemberSearch = () => {
  const { name } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getMemberByName/${name}`)
      .then((result) => {
        console.log("Fetched Member", result.data);
        setMember(result.data[0]);
      })
      .catch((err) => console.error("Error fetched member data ", err));
  }, [name]);

  if (!member) {
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
            <div className="row   d-flex justify-content-center  mt-5">
              {/* Home Body */}

              <h1
                className="text-center text-decoration-underline"
                style={{ color: "black" }}
              >
                Member Info - {member.memberName}
              </h1>

              <div className="container mt-3">
                <Table striped bordered hover variant="dark">
                  <tbody>
                    <tr>
                      <th>Member Id</th>
                      <td>{member.memberId}</td>
                    </tr>
                    <tr>
                      <th>Member Name</th>
                      <td>{member.memberName}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{member.email}</td>
                    </tr>
                    <tr>
                      <th>Phone number</th>
                      <td>{member.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{member.address}</td>
                    </tr>
                    <tr>
                      <th>Join date</th>
                      <td>{member.joinDate}</td>
                    </tr>

                    <tr>
                      <th>Date Of Birth</th>
                      <td>{member.dob}</td>
                    </tr>

                    <tr>
                      <th>References Details</th>
                      <td>{member.referenceDetails}</td>
                    </tr>

                    <tr>
                      <th>About member</th>
                      <td>{member.aboutMember}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MemberSearch;
