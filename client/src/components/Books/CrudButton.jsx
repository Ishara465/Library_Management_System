import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import "./Books.css"; // Import your CSS file

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
          to="/bookList"
          className={`btn custom-button ${
            selectedButton === "viewList" || location.pathname === "/bookList"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("viewList")}
        >
          View List Of Books
        </Link>

        {/* Add Books Button */}
        <Button
          as={Link}
          to="/books"
          className={`custom-button ${
            selectedButton === "addBooks" || location.pathname === "/books"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("addBooks")}
        >
          Add Books
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CrudButton;
