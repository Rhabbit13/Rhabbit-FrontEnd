import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Signup = (props) => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [emailCheck, setEmailCheck] = React.useState(true);

  const isEmail = (id) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(id);
  };

  const signup = () => {
    console.log(isEmail(id));

    if (isEmail(id) === false) {
      setEmailCheck(false);
      return;
    }

    if (id === "" || pwd === "" || user_name === "") {
      return alert("E-mail 혹은 User Name을 입력하세요");
    }

    if (pwd !== pwd_check) {
      return alert("비밀번호를 확인하세요.");
    }

    // dispatch(userActions.signupFB(id, pwd, user_name));
  };
  return (
    <React.Fragment>
      <Wrap>
        <h1 type="heading">회원가입 페이지</h1>
        <TextField
          required
          id="outlined-required"
          label="이메일로 가입하기"
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
        />
        <TextField
          required
          id="outlined-required"
          label="비빌번호  "
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="비밀번호 확인"
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />

        <Button
          variant="contained"
          disableElevation
          color="error"
          onClick={() => {
            // isEmail();
            signup();
          }}>
          회원 가입하기
        </Button>
      </Wrap>
    </React.Fragment>
  );
};
const Wrap = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  item-align: center;
  width: 80%;
  margin: auto;
`;

export default Signup;
