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
          to="/rViewBooks"
          className={`btn custom-button ${
            selectedButton === "viewList" || location.pathname === "/rViewBooks"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("viewList")}
        >
          View List Of Return Books
        </Link>

        {/* Add Books Button */}
        <Button
          as={Link}
          to="/returnBook"
          className={`custom-button ${
            selectedButton === "returnBook" ||
            location.pathname === "/returnBook"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("returnBook")}
        >
          Add Return Book
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CrudButton;
