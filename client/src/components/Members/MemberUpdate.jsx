import React from 'react'
import { Container } from "react-bootstrap";
import SideNavigation from '../importentComponents/SideNavigation';
import MemberCrudButton from './MemberCrudButton';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MemberUpdate = () => {
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
          <div className='d-flex justify-content-center'> 
          <MemberCrudButton/>
          </div> 
          <div className="row   d-flex justify-content-center ">
             {/* Home Body */}
              <h1 className='text-center'>Update Member</h1>
           
              <div className="row   d-flex justify-content-center  ">
              <div className="col-3 mt-4">
                <Form.Control type="text" placeholder="Member Name" />
                <br />
                <Form.Control type="text" placeholder="Email" />
                <br />
                <Form.Control type="text" placeholder="Phone Number" />
                <br />
                <Form.Control type="text" placeholder="Address" />
                <br />
                <Form.Control type="text" placeholder="Data of Birth " />
              </div>

              <div className="col-3 mt-3">
                <label htmlFor="">Join Date</label>
                <Form.Control
                  type="date"
                  placeholder="Published Year"
                  className="mt-1"
                />
                <br />
                <Form.Control type="text" placeholder="References Details" />
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
                    />
                  </Form.Group>
                </Form>
              </div>

              <div className="d-flex justify-content-center align-items-center p-3">
                <button className="btn btn-success p-2">Submit</button>
              </div>
            </div>






            
          </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default MemberUpdate
