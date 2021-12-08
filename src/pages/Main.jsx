import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CardBox from "../components/CardBox";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

const Main = props => {
  //임시 user 정보 후에 jws 정보를 가지고 서버에 요청해 postlist를 가지고 오게 한다.
  const user = useSelector(state => state.todo.user);
  const post = useSelector(state => state.todo.post);
  post.sort((a, b) => {
    return b.date - a.date;
  });
  return (
    <MainPage>
      <Header></Header>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 2 }}>
        {post.map((_, index) => (
          <Grid
            item
            xs={index === 0 ? 12 : 6}
            key={index}
            onClick={() => {
              history.push(`/detail/${_.id}`);
            }}
          >
            <CardBox data={_} user={user}></CardBox>
          </Grid>
        ))}
      </Grid>
    </MainPage>
  );
};

const MainPage = styled.div`
  padding: 0px 0;
`;
export default Main;
