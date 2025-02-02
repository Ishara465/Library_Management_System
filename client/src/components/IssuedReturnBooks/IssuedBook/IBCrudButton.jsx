import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const IBCrudButton = () => {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Link to="/iBookList" className="btn btn-primary">
          View List Of Issue Books
        </Link>
        <Button as={Link} to="/issuedBook" variant="outline-primary">
          Add Issue Book
        </Button>     
      </ButtonGroup>
    </div>
  )
}

export default IBCrudButton
