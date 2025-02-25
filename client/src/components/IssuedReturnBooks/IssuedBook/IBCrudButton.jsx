import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

const CrudButton = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const location = useLocation();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <ButtonGroup className="mb-2 custom-button-group">
        {/* View List of Books Button */}
        <Link
          to="/iBookList"
          className={`btn custom-button ${
            selectedButton === "viewList" || location.pathname === "/iBookList"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("viewList")}
        >
          View All Issue Books
        </Link>

        {/* Add Books Button */}
        <Button
          as={Link}
          to="/issuedBook"
          className={`custom-button ${
            selectedButton === "addBooks" || location.pathname === "/issuedBook"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("addIssueBook")}
        >
          Add Issue Book
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CrudButton;
