import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const CardBox = props => {
  const dispatch = useDispatch();
  const { data, user } = props;
  const todoList = useSelector(state => state.todo.todo);
  const postTodo = todoList
    .filter((x, i) => {
      return x.pid === data.id;
    })
    .filter((y, i) => {
      return i < 2;
    });
  return (
    <Card
      sx={{ minWidth: "50%" }}
      style={{ border: "1px solid #eee", cursor: "pointer" }}
    >
      <CardContent sx={{ padding: "16px 20px !important", height: "120px" }}>
        <FlexBox>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.nickname}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.date}
          </Typography>
        </FlexBox>
        <Typography
          style={{ marginBottom: "6px" }}
          variant="h5"
          component="div"
        >
          {data.rate} %
        </Typography>
        {postTodo.map((_, index) => {
          return (
            <Typography key={index} variant="body2">
              {_.text}
            </Typography>
          );
        })}
        ...
      </CardContent>
    </Card>
  );
};
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default CardBox;
