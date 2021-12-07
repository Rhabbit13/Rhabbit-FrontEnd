import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
<<<<<<< HEAD
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
=======
>>>>>>> 17bbf9875af2f5832453da77d585b277eb3eeef4

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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
