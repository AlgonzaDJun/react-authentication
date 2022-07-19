import { EmojiEmotions, Logout } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <EmojiEmotions sx={{ display: "flex", mr: 2 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "left",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Mood Meter
            </Link>
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ padding: 1 }}>
              <Logout onClick={onLogout} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
