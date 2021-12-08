import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

import Edit from "../components/Edit";
import Modal from "../components/Modal";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import Header from "../components/Header";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const { pid } = useParams();
  const Post = useSelector(state => state.todo.post);
  const todo = useSelector(state => state.todo.todo);

  const isTodo = todo.filter(x => {
    return x.pid === pid;
  });
  const deilyTodo = todo.filter(y => {
    return y.daily === true;
  });

  const isPost = Post.find(x => {
    return x.id === pid;
  });

  const disabled = isPost.id === pid ? false : true;

  const Bar = styled.div`
    background-color: #de4640;
    width: ${isPost.rate}%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  `;
  const AddList = () => {};
  return (
    <Grid
      container
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "100%",
        paddingBottom: "100px",
      }}
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
    >
      <Header></Header>
      <Level>
        <Percentage>{isPost.rate}%</Percentage>
        <Bar></Bar>
      </Level>
      {deilyTodo.map((item, index) => (
        <Edit key={index} disabled={disabled} data={item}></Edit>
      ))}

      {isTodo.map((_, index) => (
        <Edit key={index} disabled={disabled} data={_}></Edit>
      ))}

      <Stack direction="row" spacing={2} style={fiexdBox}>
        <Button
          variant="contained"
          style={{
            width: "50%",
            backgroundColor: "#eee",
            color: "#999",
            height: "40px",
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로 돌아가기
        </Button>
        <Modal></Modal>
      </Stack>
    </Grid>
  );
};
const fiexdBox = {
  width: "600px",
  position: "fixed",
  left: "50%",
  padding: "20px",
  bottom: "10px",
  boxSizing: "border-box",
  transform: "translateX(-50%)",
};
const Level = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #999;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;
const Percentage = styled.h3`
  font-size: 23px;
  color: #eee;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 99;
`;
const DailyBox = styled.div`
  background-color: #eee;
  width: 100%;
`;

export default Detail;
