import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import "./Member.css"; // Import your CSS file

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
          to="/memberInfo"
          className={`btn custom-button ${
            selectedButton === "viewList" || location.pathname === "/memberInfo"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("viewList")}
        >
          View Member Info
        </Link>

        {/* Add member Button */}
        <Button
          as={Link}
          to="/createMember"
          className={`custom-button ${
            selectedButton === "addBooks" ||
            location.pathname === "/createMember"
              ? "selected-button"
              : ""
          }`}
          onClick={() => handleButtonClick("addMember")}
        >
          Add Member
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CrudButton;
