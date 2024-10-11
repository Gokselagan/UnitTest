import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      bgcolor="#000"
      color="#fff"
      padding="20px"
    >
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Typography fontSize="24px">Home</Typography>
      </Link>

      <Link to="/docs" style={{textDecoration:"none", color:"inherit"}}>
        <Typography fontSize="24px">Docs</Typography>
      </Link>

      <Link to="/tutorial" style={{textDecoration:"none", color:"inherit"}}>
        <Typography fontSize="24px">Tutorial</Typography>
      </Link>

      <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>
        <Typography fontSize="24px">Contact</Typography>
      </Link>
    </Stack>
  );
};
