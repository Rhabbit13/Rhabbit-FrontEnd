import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { deleteCookie } from "../shared/Cookie";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "../shared/Cookie";

const Header = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        flexGrow: 2,
        backgroundColor: "#eee",
        width: "100%",
        marginBottom: "50px",
      }}>
      <AppBar position="static" style={{ background: "#eee", color: "#000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#DE4640", fontWeight:"bold" }}>
            Rhabbit
          </Typography>
          <img src="https://k-comics.com/wp-content/uploads/2019/07/page015.gif" alt="토끼이미지" style={{width:"100px", height: "100px", marginRight: " 150px"}}/> 
          {getCookie("Authorization") ? (
            <Button
              onClick={() => {
                deleteCookie("Authorization");
                history.push("/login");
                dispatch(userActions.logOut());
              }}>
              Logout{" "}
            </Button>
          ) : (
            <Button
              onClick={() => {
                history.push("/login");
              }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
