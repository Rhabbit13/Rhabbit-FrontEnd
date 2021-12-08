import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { deleteCookie } from "../shared/Cookie";
import { useHistory } from "react-router";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// import { getCookie, deleteCookie } from "../shared/Cookie";


const Header = props => {

  const history = useHistory()
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
          <Button  onClick={()=>{
            deleteCookie('login')
            history.push('/login') 
            }}>
          Logout </Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
