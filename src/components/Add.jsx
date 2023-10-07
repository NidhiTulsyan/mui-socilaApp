import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React from "react";

export default function Add() {
  return (
    <div>
      <Tooltip title="Add">
        <Fab sx={{ color: "blue" }} aria-label="add">
          <AddIcon sx={{ color: "blue" }} />
        </Fab>
      </Tooltip>
    </div>
  );
}
