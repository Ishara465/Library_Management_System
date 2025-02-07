import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import Table from "react-bootstrap/Table";
import MemberCrudButton from "./MemberCrudButton";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";

const MemberInfo = () => {
  const [member, setMember] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // !handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // ! handle from submit
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      navigate(`/memberSearch/${searchQuery}`);
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/libraryBK/getAllMembers")
      .then((response) => {
        console.log("API Response: ", response.data);

        if (response.data.success && Array.isArray(response.data.content)) {
          setMember(response.data.content);
        } else {
          console.error("Unexpected data structure: ", response.data);
          setMember([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching books: ", error);
        setMember([]);
      });
  }, []);

  // !Delete member

  const handleDelete = (id) => {
    if (window.confirm("Are you Sure?")) {
      axios
        .delete(`http://127.0.0.1:5000/libraryBK/deleteMember/${id}`)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("member delete canceled");
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
            className="col-12 p-4 rounded-5 shadow "
            style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}
          >
            <div className="d-flex justify-content-center">
              <MemberCrudButton />
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

            <div className="row  d-flex justify-content-center  m-2">
              {/* Home Body */}
              <h1 className="text-center mb-3" style={{ color: "black" }}>
                Member Info
              </h1>

              <Table striped bordered hover size="sm">
                <thead>
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
                </thead>
                {member.length > 0 ? (
                  member.map((member, index) => (
                    <tbody key={index}>
                      <td>{member.memberId}</td>
                      <td>{member.memberName}</td>
                      <td>{member.email}</td>
                      <td>{member.phoneNumber}</td>
                      <td>{member.address}</td>
                      <td>{member.dob}</td>
                      <td>{member.joinDate}</td>
                      <td>{member.referenceDetails}</td>
                      <td>{member.aboutMember}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <Link
                            to={`/memberUpdate/${member._id}`}
                            className="btn btn-warning  m-1"
                          >
                            Update
                          </Link>
                          <Button
                            className="btn btn-danger  m-1"
                            onClick={() => handleDelete(member._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tbody>
                  ))
                ) : (
                  <p className="text-center">No member Available</p>
                )}
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MemberInfo;
