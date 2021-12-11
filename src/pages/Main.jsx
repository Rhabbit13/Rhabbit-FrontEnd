import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import CardBox from "../components/CardBox";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";
import { history } from "../redux/configureStore";
import { useParams } from "react-router";
import moment from "moment";

const Main = props => {
  //임시 user 정보 후에 jws 정보를 가지고 서버에 요청해 postlist를 가지고 오게 한다.
  const dispatch = useDispatch();
  const { id } = useParams();
  const cards = useSelector(state => state.todo.cards);
  const today = moment().format("YYYYMMDD");

  let start = cards.find(x => {
    return x.date.includes(today);
  });

  console.log(start);

  React.useEffect(() => {
    if (!start) {
      dispatch(todoAction.cardAddDB());
    }
  }, []);

  return (
    <MainPage>
      <Header></Header>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 2 }}>
        {cards.map((_, index) => (
          <Grid
            item
            xs={index === 0 ? 12 : 6}
            key={index}
            onClick={() => {
              history.push(`/detail/${_.cardsId}`);
            }}
          >
            <CardBox data={_}></CardBox>
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
