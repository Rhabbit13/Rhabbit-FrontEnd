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

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  console.log(id, pwd);

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
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
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#EEE",
            width: "60vh",
            margin: " 30px",
            height: "90vh",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}>
          <Success>성공!!</Success>
          <Wrap>
            <img src="/static/habbit.png" alt="로고" />

            <Title>로그인</Title>

            <TextField
              value={id}
              required
              id="outlined-required"
              label="E-mail"
              onChange={(e) => changeId(e)}
            />
            <TextField
              value={pwd}
              required
              type="password"
              id="outlined-required"
              label="PASSWORD"
              onChange={(e) => changePwd(e)}
            />
            <div>
              <Button
                variant="contained"
                disableElevation
                sx={{ width: "100%", marginBottom: "10px" }}
                color="error"
                onClick={() => {
                  login();
                }}>
                LOG IN
              </Button>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                disableElevation
                color="error"
                onClick={() => {
                  history.push("/signup");
                }}>
                Sign Up
              </Button>
            </div>
          </Wrap>
        </Box>
      </Container>
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
  color: darkblue;
  font-family: "jua", sans-serif;
  font-weight: 300;
`;

const boxFade = keyframes`
  0%{ 
      background-position: right bottom;
  }
  50%{
      background-position: left bottom;
      transform: scale( 1.5 );
  }
  100%{
      background-position: right bottom;
      transform: scale( 2.0 );

  }
`;
const Success = styled.p`
  font-size: 40px;
  font-weight: 300;
  font-family: "jua", sans-serif;
  color: red;
  position: absolute;
  top: 100px;
  left: 450px;
  animation: ${boxFade} 1s 1s infinite linear alternate;
  margin-right: 10px;
`;

export default Login;
