import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'


export default function App() {
  return (
   <Box>
    <Navbar />
   <Stack direction="row" justifyContent="space-between" spacing={2}>
    <Sidebar />
    <Feed />
    <Rightbar />
   </Stack>
   </Box>
  )
}

