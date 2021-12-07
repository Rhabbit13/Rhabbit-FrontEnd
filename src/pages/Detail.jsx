import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

import Edit from "../components/Edit";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory, useParams } from "react-router";
import Header from "../components/Header";

const Detail = () => {
  const percentage = 30;
  const { pid } = useParams();
  const history = useHistory();
  const mode = "";

  const Bar = styled.div`
    background-color: #de4640;
    width: ${percentage}%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  `;
  const GoFixPage = () => {
    history.push(`/fix/${pid}`);
  };

  return (
    <Grid
      container
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "100%",
      }}
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
    >
      <Header></Header>
      <Level>
        <Percentage>{percentage}%</Percentage>
        <Bar></Bar>
      </Level>
      {Array.from(Array(5)).map((_, index) => (
        <Edit key={index} mode={mode}></Edit>
      ))}
      <Stack
        direction="row"
        spacing={2}
        style={{
          width: "100%",
          position: "absolute",
          left: "0px",
          padding: "20px",
          bottom: "10px",
          boxSizing: "border-box",
        }}
      >
        <Button
          disabled={mode}
          variant="contained"
          style={{ width: "50%", backgroundColor: "#999", height: "40px" }}
          onClick={GoFixPage}
        >
          {mode !== "disabled" ? "수정페이지 이동" : "오늘를 달려 주세요"}
        </Button>

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
      </Stack>
    </Grid>
  );
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
