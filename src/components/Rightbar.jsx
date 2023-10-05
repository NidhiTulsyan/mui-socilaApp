import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight="300">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="john Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor hawk"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="biden chloe"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="amyra hawking"
            src="https://material-ui.com/static/images/avatar/9.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="300">
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}
