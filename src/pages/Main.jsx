import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CardBox from "../components/CardBox";

const Main = props => {
  const pui = "asdasd2131234sdcz";
  return (
    <MainPage>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 2 }}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={index === 0 ? 12 : 6} key={index}>
            <CardBox pui={pui}></CardBox>
          </Grid>
        ))}
      </Grid>
    </MainPage>
  );
};

const MainPage = styled.div`
  padding: 50px 0;
`;
export default Main;
