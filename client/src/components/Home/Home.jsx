import React from 'react'
import Form from "react-bootstrap/Form";


import { Container } from "react-bootstrap";
import SideNavigation from '../importentComponents/SideNavigation';

const Home = () => {
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
              <h1>Home Page</h1>
           

            
          </div>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Home
