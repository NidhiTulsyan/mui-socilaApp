import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import styled from "@emotion/styled";

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%",
    borderRadius: "5px",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
  }));
  const Userbox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
  }));
  const [open, setOpen] = useState();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Nidhi
        </Typography>
        <TagFacesIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        ></TagFacesIcon>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ height: 25, width: 25 }}
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1345640556.1690392149&semt=sph"
            onClick = {e=>setOpen(true)}
          />
        </Icons>

        <Userbox sx={{ display: { xs: "flex", sm: "none" } }}>
          <Avatar
            sx={{ height: 25, width: 25 }}
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1345640556.1690392149&semt=sph"
            onClick = {e=>setOpen(true)}

          />
          <Typography variant="span">John</Typography>
        </Userbox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
