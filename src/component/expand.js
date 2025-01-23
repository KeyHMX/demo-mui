import React from "react";
import { ZoomIn } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
const Expand = () => {
  const handleFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`无法进入全屏模式: ${err.message}`);
      });
    } else {
      console.error("浏览器不支持全屏模式");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "10px 0",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", paddingLeft: "10px" }}>Students</div>
        <div>
          <IconButton aria-label="fullscreen" onClick={handleFullScreen}>
            <ZoomIn sx={{ width: 20, height: 20 }} />
          </IconButton>
          <IconButton>
            <MoreVert sx={{ width: 20, height: 20 }} />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "1.5px",
          backgroundColor: "#ebeced",
        }}
      />
    </div>
  );
};

export default Expand;
