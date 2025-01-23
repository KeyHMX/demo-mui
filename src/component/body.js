import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// columns的一些属性可以在这里自定义
const columns = [
  { id: 1, name: "Num.", width: "50px" },
  { id: 2, name: "Name", width: "100px" },
  { id: 3, name: "Age", width: "50px" },
  { id: 4, name: "Phone", width: "120px" },
  { id: 5, name: "Address", width: "150px" },
  { id: 6, name: "Comments", width: "200px" },
  { id: 7, name: "Action", width: "80px" },
];

const Body = ({ mockData, selectedClass, typeFilter }) => {
  const [filteredData, setFilteredData] = useState(mockData);

  useEffect(() => {
    const filtered = mockData.filter((row) => {
      const classMatch = !selectedClass || row.class === selectedClass;
      const typeMatch =
        typeFilter.length === 0 ||
        typeFilter.every((type) => row.type === type);
      return classMatch && typeMatch;
    });
    setFilteredData(filtered);
  }, [selectedClass, typeFilter, mockData]);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#ffffff" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                sx={{
                  fontWeight: "bold",
                  width: column.width,
                  position: "sticky",
                  right: column.name === "Action" ? 0 : "auto",
                  top: 0,
                }}
              >
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow
              key={row.id}
              hover
              sx={{
                "&:hover": { backgroundColor: "#e6f7ff" },
                backgroundColor: "#ffffff",
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell sx={{ position: "sticky", right: 0 }}>
                <IconButton aria-label="edit" size="small">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Body;
