import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import moment from "moment";

import Edit from "../components/Edit";
import Modal from "../components/Modal";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import Header from "../components/Header";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";

const Detail = () => {
  const dispatch = useDispatch();
  const { pid } = useParams();
  const cards = useSelector(state => state.todo.cards);
  const cardList = cards ? cards : "";

  const isCard = cardList.find(x => {
    return x.cardsId === Number(pid);
  });
  console.log(isCard);

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
        <Percentage>%</Percentage>
        <Bar></Bar>
      </Level>

      {isCard
        ? isCard.cardsDetailDtos.map((item, index) => {
            return (
              <Edit key={index} disabled={false} data={item} pid={pid}></Edit>
            );
          })
        : ""}

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
        <Modal pid={pid} disabled={false}></Modal>
      </Stack>
    </Grid>
  );
};
const Bar = styled.div`
  background-color: #de4640;
  width: %;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;
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

export default Detail;
