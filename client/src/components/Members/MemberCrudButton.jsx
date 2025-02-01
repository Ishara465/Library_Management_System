import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MemberCrudButton = () => {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Link to="/memberInfo" className="btn btn-primary">
          View List Of Member
        </Link>
        <Button as={Link} to="/createMember" variant="outline-primary">
          Add Member
        </Button>     
      </ButtonGroup>
    </div>
  )
}

export default MemberCrudButton
