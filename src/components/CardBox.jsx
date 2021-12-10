import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Rate } from "../shared/Rate";

const CardBox = props => {
  const dispatch = useDispatch();
  const { data } = props;
  // const { rate, disabled } = Rate();

  let count = 0;
  data.cardsDetailDtos.forEach(x => {
    if (x.checked === true) {
      count++;
    }
  });
  let rate = Math.round((count / data.cardsDetailDtos.length) * 100);

  return (
    <Box
      sx={{
        boxShadow: "8px 8px 5px #999999",
        bgcolor: "#EEE",
        borderRadius: "10px",
        width: "100%",
        height: 250,
        backgroundColor: "#F57053",
        "&:hover": {
          backgroundColor: "#DE4640",
          opacity: [0.9, 0.8, 0.7],
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}

      // sx={{ minWidth: "50%" }}
      // style={{ border: "1px solid #eee", cursor: "pointer" }}
    >
      <CardContent
        sx={{
          padding: "16px 20px !important",
          height: "120px",
        }}
      >
        <FlexBox>
          <Typography
            sx={{ fontSize: 14, color: "white" }}
            color="text.secondary"
            gutterBottom
          >
            {data.date}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.nickname}
          </Typography>
        </FlexBox>
        <Typography
          style={{
            marginBottom: "6px",
            color: "white",
            fontWeight: "200",
          }}
          variant="h5"
          component="div"
        >
          {rate} %
        </Typography>
        <OverFlow>
          {data.cardsDetailDtos.map((item, index) => {
            return (
              <Typography
                key={index}
                variant="body2"
                style={{
                  color: "white",
                  fontWeight: "200",
                }}
              >
                {item.text}
              </Typography>
            );
          })}
        </OverFlow>
        ...
      </CardContent>
    </Box>
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
