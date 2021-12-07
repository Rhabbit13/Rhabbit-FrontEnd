import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
const Login = props => {
  const history = useHistory();
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
    console.log(id, pwd);
  };

  return (
    <React.Fragment>
      <Wrap>
        <Title>로그인</Title>
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          onChange={e => changeId()}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="PASSWORD"
          onChange={e => changePwd()}
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
    </React.Fragment>
  );
};

const Wrap = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h2`
  font-size: 34px;
  text-align: center;
  font-weight: bold;
`;

export default Login;
