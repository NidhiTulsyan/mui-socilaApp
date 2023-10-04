import { Box, Typography } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      bgcolor={"pink"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight="200">
          Online Friends
        </Typography>
      </Box>
    </Box>
  );
}
