import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled, { keyframes } from "styled-components";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import "@fontsource/jua";

const Login = props => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = e => {
    setId(e.target.value);
  };

  const changePwd = e => {
    setPwd(e.target.value);
  };

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호를 입력하여 주세요.");
      return;
    }
    dispatch(userActions.loginDB(id, pwd));
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Box
        sx={{
          boxShadow: "8px 8px 5px #999999",
          bgcolor: "#EEE",
          width: "100%",
          margin: "auto",
          height: "auto",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          boxSizing: "border-box",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Success>SUCCESS!!</Success>
        <Wrap>
          <img src="/static/habbit.png" alt="로고" />

          <Title>로그인</Title>

          <TextField
            value={id}
            required
            id="outlined-required"
            label="E-mail"
            onChange={e => changeId(e)}
          />
          <TextField
            value={pwd}
            required
            type="password"
            id="outlined-required"
            label="PASSWORD"
            onChange={e => changePwd(e)}
          />
          <div>
            <Button
              variant="contained"
              disableElevation
              sx={{ width: "100%", marginBottom: "10px" }}
              color="error"
              onClick={() => {
                login();
              }}
            >
              LOG IN
            </Button>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              disableElevation
              color="error"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
        </Wrap>
      </Box>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-items: center;

  width: 80%;
  // position: absolute;
  // left: 50%;
  // top: 30%;
  // transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  color: #3e3e3e;
  font-family: "jua", sans-serif;
  font-weight: 300;
`;

const boxFade = keyframes`
  0%{ 
      background-position: right bottom;
  }
  50%{
      background-position: left bottom;
      transform: scale( 0.8 );
  }
  100%{
      background-position: right bottom;
      transform: scale( 1);

  }
`;
const Success = styled.p`
  font-size: 30px;
  font-weight: 250;
  font-family: "jua", sans-serif;
  color: darkblue;
  position: absolute;
  top: 65px;
  left: 360px;
  animation: ${boxFade} 1s 1s infinite linear alternate;
  margin-right: 20px;
`;

export default Login;
