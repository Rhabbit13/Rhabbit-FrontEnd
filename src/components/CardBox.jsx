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
  const { data } = props;

  let count = 0;
  data.cardDetails.forEach(x => {
    if (x.checked === true) {
      count++;
    }
  });
  let rate = Math.round((count / data.cardDetails.length) * 100);

  return (
    <Card
      sx={{ minWidth: "50%" }}
      style={{ border: "1px solid #eee", cursor: "pointer" }}
    >
      <CardContent sx={{ padding: "16px 20px !important", height: "120px" }}>
        <FlexBox>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.date}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.user.nickname}
          </Typography>
        </FlexBox>
        <Typography
          style={{ marginBottom: "6px" }}
          variant="h5"
          component="div"
        >
          {rate} %
        </Typography>
        <OverFlow>
          {data.cardDetails.map((item, index) => {
            return (
              <Typography key={index} variant="body2">
                {item.text}
              </Typography>
            );
          })}
        </OverFlow>
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
const OverFlow = styled.div`
  height: 43px;
  overflow: hidden;
`;
export default CardBox;
