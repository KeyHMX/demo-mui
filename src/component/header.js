import React from "react";
import { Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

const Header = ({
  selectedClass,
  setSelectedClass,
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "20px",
      }}
    >
      <Select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        style={{ width: "20vw", height: "40px", marginRight: "20px" }}
        defaultValue="A"
      >
        <MenuItem value="">All Classes</MenuItem>
        <MenuItem value="A">Class A</MenuItem>
        <MenuItem value="B">Class B</MenuItem>
      </Select>

      <FormControlLabel
        control={
          <Checkbox
            checked={typeFilter.includes("model")}
            onChange={(e) => {
              if (e.target.checked) {
                setTypeFilter([...typeFilter, "model"]);
              } else {
                setTypeFilter(typeFilter.filter((t) => t !== "model"));
              }
            }}
          />
        }
        label="Marked as Model"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={typeFilter.includes("graduated")}
            onChange={(e) => {
              if (e.target.checked) {
                setTypeFilter([...typeFilter, "graduated"]);
              } else {
                setTypeFilter(typeFilter.filter((t) => t !== "graduated"));
              }
            }}
          />
        }
        label="Marked as Graduated"
      />
    </div>
  );
};

export default Header;
