import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Login = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  // const changeId = (e) => {
  //   setId(e.target.value);
  // };

  // const changePwd = (e) => {
  //   setPwd(e.target.value);
  // };

  // const login = () => {
  //   setCookie("user_id", id, 3);
  //   setCookie("user_pwd", pwd, 3);
  // };

  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Wrap>
        <h1 type="heading">로그인 페이지</h1>

        <TextField
          required
          id="outlined-required"
          label="E-mail"
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="PASSWORD"
          onChange={(e) => setPwd(e.target.value)}
        />
        <Button
          variant="contained"
          disableElevation
          color="error"
          onClick={() => {
            // login();
            dispatch(userActions.loginAction(id, pwd));
          }}>
          LOG IN
        </Button>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
gap: 40px;
display: flex;
flex-direction: column;
justify-items:center;
item-align: center;
width: 80%;
margin: auto;
`;


export default Login;
