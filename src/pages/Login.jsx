import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

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
    dispatch(userActions.loginDB(id, pwd));
  };

  return (
    <React.Fragment>
      <Wrap>
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
