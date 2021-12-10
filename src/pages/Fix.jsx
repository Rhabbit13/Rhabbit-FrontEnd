import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import Edit from "../components/Edit";

const FixPage = () => {
  const percentage = 30;
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
  return (
    <Grid
      container
      style={{
        marginTop: "0px",
        marginLeft: "0px",
        width: "100%",
      }}
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      <Header></Header>
      <Level>
        <Percentage>{percentage}%</Percentage>
        <Bar></Bar>
      </Level>
      {Array.from(Array(5)).map((_, index) => (
        <Edit key={index} mode={mode} Fix></Edit>
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
        }}>
        <Button
          variant="contained"
          style={{ width: "50%", backgroundColor: "#999", height: "40px" }}>
          수정하기
        </Button>
        <Button
          variant="contained"
          style={{
            width: "50%",
            backgroundColor: "#eee",
            color: "red",
            height: "40px",
          }}
          onClick={() => {
            history.goBack();
          }}>
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

const Title = styled.h2`
  font-size: 30px;
  marg
`;

export default FixPage;
