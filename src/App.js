import React, { useState } from "react";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import Expand from "./component/expand";

const mockData = [
  {
    id: 1,
    name: "Zhang San",
    age: 12,
    phone: "15000000000",
    address: "xxxx, xxxx",
    comments: "Here are the comments.",
    class: "A",
    type: "model",
  },
  {
    id: 2,
    name: "Li Si",
    age: 12,
    phone: "15000000001",
    address: "xxxx, xxxx",
    comments: "Here are the comments.",
    class: "B",
    type: "graduated",
  },
  {
    id: 3,
    name: "Wang Wu",
    age: 12,
    phone: "15000000002",
    address: "xxxx, xxxx",
    comments: "Here are the comments.",
    class: "A",
    type: "graduated",
  },
  {
    id: 4,
    name: "Zhou Yi",
    age: 11,
    phone: "15000000003",
    address: "xxxx, xxxx",
    comments: "Here are the comments.",
    class: "B",
    type: "model",
  },
  {
    id: 5,
    name: "Qian Wang",
    age: 11,
    phone: "15000000004",
    address: "xxxx, xxxx",
    comments: "Here are the comments.",
    class: "A",
    type: "model",
  },
];

function App() {
  const [selectedClass, setSelectedClass] = useState("A");
  const [typeFilter, setTypeFilter] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Header
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <Expand />
      <Body
        mockData={mockData}
        selectedClass={selectedClass}
        typeFilter={typeFilter}
      />
      <Footer />
    </div>
  );
}

export default App;
