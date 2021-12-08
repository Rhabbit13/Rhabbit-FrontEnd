import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [emailCheck, setEmailCheck] = React.useState(true);

  const dispatch = useDispatch();

  const isEmail = (id) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(id);
  };

  const signup = () => {
     dispatch(userActions.signupDB(id, pwd, userName));

    if (isEmail(id) === false) {
      setEmailCheck(false);
      return;
    }

    if (id === "" || pwd === "" || userName === "") {
      return alert("E-mail 혹은 User Name을 입력하세요");
    }

    if (pwd !== pwdCheck) {
      return alert("비밀번호를 확인하세요.");
    }
  };
  
  return (
    <React.Fragment>
      <Wrap>
        <Title>회원가입</Title>
        <TextField
          required
          id="outlined-required"
          label="이메일로 가입하기"
          color="error"
          onChange={(e) => {
            setId(e.target.value);
            if (isEmail(id) === true) {
              setEmailCheck(true);
              return;
            }
          }}
        />
        {emailCheck === false ? <p>이메일 형식이 아닙니다. </p> : ""}
        <TextField
          required
          id="outlined-required"
          label="User Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          color="error"
        />
        <TextField
          required
          id="outlined-required"
          label="비빌번호  "
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          color="error"
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="비밀번호 확인"
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
          color="error"
        />

        <Button
          variant="contained"
          disableElevation
          color="error"
          onClick={() => {
            signup();
            history.push("/");
          }}>
          회원 가입하기
        </Button>
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
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h2`
  font-size: 34px;
  text-align: center;
  font-weight: bold;
`;

export default Signup;
