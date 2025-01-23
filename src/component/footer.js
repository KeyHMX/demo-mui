import React from "react";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div>
        <Button variant="contained" color="primary">
          Add New
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Save
        </Button>
        <Button variant="contained" color="primary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Footer;
