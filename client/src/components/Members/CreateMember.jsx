import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import MemberCrudButton from "./MemberCrudButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const CreateMember = () => {
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [referenceDetails, setReferenceDetails] = useState("");
  const [dob, setDob] = useState("");
  const [aboutMember, setAboutMember] = useState("");

  const Submit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    if (
      !memberId ||
      !memberName ||
      !email ||
      !phoneNumber ||
      !address ||
      !joinDate ||
      !referenceDetails ||
      !dob ||
      !aboutMember
    ) {
      alert("All fields are required!");
      return; // Exit the function if validation fails
    }

    try {
      // Send a POST request to the server
      const response = await axios.post(
        "http://127.0.0.1:5000/libraryBK/memberSave",
        {
          memberId,
          memberName,
          email,
          phoneNumber,
          address,
          joinDate: new Date(joinDate).toISOString(), // Ensure date is in ISO format
          referenceDetails,
          dob: new Date(dob).toISOString(), // Ensure date is in ISO format
          aboutMember,
        }
      );

      // Log success and reload the page
      console.log("Data saved successfully ", response.data);
      window.location.reload();
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response from server: ", error.response.data);
        alert(`Error: ${error.response.data.message || "Failed to save data"}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response from server: ", error.request);
        alert("No response from server. Please check your network connection.");
      } else {
        // Something happened in setting up the request
        console.error("Error setting up request: ", error.message);
        alert(`Error: ${error.message}`);
      }
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
            className="col-12 p-4 rounded-5 shadow"
            style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}
          >
            <div className="d-flex justify-content-center">
              <MemberCrudButton />
            </div>
            <div className="row   d-flex justify-content-center ">
              {/* Home Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                Add Member
              </h1>

              <div className="row   d-flex justify-content-center  ">
                <div className="col-3 mt-4">
                  <Form.Control
                    type="text"
                    placeholder="Member ID"
                    onChange={(e) => setMemberId(e.target.value)}
                  />
                  <br />

                  <Form.Control
                    type="text"
                    placeholder="Member Name"
                    onChange={(e) => setMemberName(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="col-3 mt-3">
                  <label htmlFor="">Join Date</label>
                  <Form.Control
                    type="date"
                    placeholder="Published Year"
                    className="mt-1"
                    onChange={(e) => setJoinDate(e.target.value)}
                  />
                  <br />
                  <label htmlFor="">Date Of Birth</label>
                  <Form.Control
                    type="date"
                    placeholder="Data of Birth "
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="References Details"
                    onChange={(e) => setReferenceDetails(e.target.value)}
                  />
                  <br />

                  <Form className="">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="About Member"
                        onChange={(e) => setAboutMember(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex justify-content-center align-items-center p-3">
                  <button className="btn btn-success p-2" onClick={Submit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateMember;
