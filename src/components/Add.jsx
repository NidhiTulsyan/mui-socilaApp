import { Avatar, Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom:"20px"
});
export default function Add() {
  const [open, setopen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setopen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box height={280} width={400} borderRadius={5} bgcolor={"white"} p={2}>
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/5.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={400}> Trevor Henderson</Typography>
          </UserBox>
        </Box>
      </StyledModal>
    </>
  );
}
