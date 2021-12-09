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
  const cards = useSelector(state => state.todo.cards);
  const isCard = cards.find(x => {
    return x.id === pid;
  });
  let count = 0;
  isCard.cardDetails.forEach(x => {
    if (x.checked === true) {
      count++;
    }
  });
  let rate = Math.round((count / isCard.cardDetails.length) * 100);
  const disabled = isCard.id === pid ? false : true;
  const Bar = styled.div`
    background-color: #de4640;
    width: ${rate}%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  `;
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
        <Percentage>{rate}%</Percentage>
        <Bar></Bar>
      </Level>
      {isCard.cardDetails.map((item, index) => (
        <Edit key={index} disabled={disabled} data={item} pid={pid}></Edit>
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
        <Modal pid={pid}></Modal>
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
