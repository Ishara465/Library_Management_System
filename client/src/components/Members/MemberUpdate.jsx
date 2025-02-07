import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SideNavigation from "../importentComponents/SideNavigation";
import MemberCrudButton from "./MemberCrudButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import axios from "axios";

const MemberUpdate = () => {
  const { id } = useParams();
  const [member, setMember] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [referenceDetails, setReferenceDetails] = useState("");
  const [dob, setDob] = useState("");
  const [aboutMember, setAboutMember] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/libraryBK/getMemberID/${id}`)
      .then((result) => {
        console.log("Fetched Member: ", result.data);
        setMember(result.data);
        setMemberId(result.data.memberId);
        setMemberName(result.data.memberName);
        setEmail(result.data.email);
        setPhoneNumber(result.data.phoneNumber);
        setAddress(result.data.address);
        setJoinDate(result.data.joinDate);
        setReferenceDetails(result.data.referenceDetails);
        setDob(result.data.memberId);
        setAboutMember(result.data.aboutMember);
      });
  }, [id]);

  // ! update members
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!member) {
      console.error("Member data is not loaded yet");
      return;
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/libraryBK/memberUpdate/${id}`,
        {
          memberId,
          memberName,
          email,
          phoneNumber,
          address,
          joinDate: new Date(joinDate),
          referenceDetails,

          aboutMember,
        }
      );
      console.log("Data updated successfully", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };

  if (!member) {
    return <p>Loading...</p>;
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
            style={{ backgroundColor: "rgba(221, 222, 223, 0)" }}
          >
            <div className="d-flex justify-content-center">
              <MemberCrudButton />
            </div>
            <div className="row   d-flex justify-content-center ">
              {/* Home Body */}
              <h1 className="text-center" style={{ color: "black" }}>
                Update Member
              </h1>

              <div className="row   d-flex justify-content-center  ">
                <div className="col-3 mt-4">
                  <Form.Control
                    type="text"
                    placeholder="Member ID"
                    disabled
                    value={memberId}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Member Name"
                    onChange={(e) => setMemberName(e.target.value)}
                    value={memberName}
                  />
                  <br />
                  <Form.Control type="text" placeholder="Email" value={email} />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>

                <div className="col-3 mt-3">
                  <label htmlFor="">Join Date</label>
                  <Form.Control
                    type="date"
                    placeholder="Published Year"
                    className="mt-1"
                    onChange={(e) => setJoinDate(e.target.value)}
                    value={joinDate}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="References Details"
                    onChange={(e) => setReferenceDetails(e.target.value)}
                    value={referenceDetails}
                  />
                  <br />
                  <label htmlFor="">Date of Birth </label>
                  <Form.Control
                    type="date"
                    placeholder="Data of Birth "
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
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
                        value={aboutMember}
                      />
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex justify-content-center align-items-center p-3">
                  <button
                    className="btn btn-success p-2"
                    onClick={handleUpdate}
                  >
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

export default MemberUpdate;
