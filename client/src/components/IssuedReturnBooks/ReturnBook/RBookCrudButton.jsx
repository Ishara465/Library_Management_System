import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RBookCrudButton = () => {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Link to="/rViewBooks" className="btn btn-primary">
          View Return Books
        </Link>
        <Button as={Link} to="/returnBook" variant="outline-primary">
          Add Return Book
        </Button>     
      </ButtonGroup>
    </div>
  )
}

export default RBookCrudButton
