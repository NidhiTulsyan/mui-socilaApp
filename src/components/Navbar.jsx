import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import styled from '@emotion/styled';

export default function Navbar() {
    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent: "space-between"
    })
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>Nidhi</Typography>
            <TagFacesIcon sx={{display:{xs:'block',sm:'none'}}}></TagFacesIcon>
        </StyledToolbar>
    </AppBar>
  )
}
