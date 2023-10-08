import { Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";

export default function Add() {
  const [open , setopen] = useState(false);
  return (
    <>
      <Tooltip
      onClick={e=>setopen(true)}
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
      <Modal
  open={open}
  onClose={e=>setopen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
    </>
  );
}
