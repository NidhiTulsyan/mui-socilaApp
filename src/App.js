import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";


export default function App() {
  const [mode,setmode] = useState("dark")
const DarkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
    <ThemeProvider theme={DarkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  );
}
