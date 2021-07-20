import React from "react";
import {
  Segment,
  Input,
  Button,
  Icon,
  Form,
  Modal,
  Label,
} from "semantic-ui-react";

function Navbar() {
  return (
    <>
      <Input
        action={{
          icon: "search",
          onClick: () => console.log("An action was clicked!"),
        }}
        actionPosition="right"
        placeholder="Search..."
      />
      <Button content="Like" icon={{ name: "like", color: "red" }} />
      <br />
     
  
    </>
  );
}

export default Navbar;
