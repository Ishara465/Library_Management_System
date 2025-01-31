import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CrudButton = () => {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Link to="/bookList" className="btn btn-primary">
          View List Of Books
        </Link>
        <Button as={Link} to="/books" variant="outline-primary">
          Add Books
        </Button>     
      </ButtonGroup>
    </div>
  );
};

export default CrudButton;
