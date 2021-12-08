import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// import { getCookie, deleteCookie } from "../shared/Cookie";


const Header = props => {
  return (
    <Box
      sx={{
        flexGrow: 2,
        backgroundColor: "#eee",
        width: "100%",
        marginBottom: "50px",
      }}
    >
      <AppBar position="static" style={{ background: "#eee", color: "#000" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rhabbit
          </Typography>
          <Link to="/login" 
          // onClick={()=>{deleteCookie('login')}}
          >Login</Link> // logout으로 변경?
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
