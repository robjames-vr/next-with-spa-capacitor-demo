"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { isLoggedIn, logIn, logOut } from "@/utils/cookies";
import { AppLink } from "./AppLink";
import { Capacitor } from "@capacitor/core";

export default function PublicAppBar() {
  const loggedIn = isLoggedIn();
  const isNative = Capacitor.isNativePlatform();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Beer
          </Typography>
          {!isNative && (
            <Button color="inherit" onClick={loggedIn ? logOut : logIn}>
              {loggedIn ? "Log Out" : "Login"}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
