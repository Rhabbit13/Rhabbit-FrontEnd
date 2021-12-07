import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardBox = props => {
  const histiory = useHistory();
  const { pui } = props;
  const DetailRouter = () => {
    histiory.push(`/detail/${pui}`);
  };
  return (
    <Card
      sx={{ minWidth: "50%" }}
      style={{ border: "1px solid #eee", cursor: "pointer" }}
      onClick={DetailRouter}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          닉네임
        </Typography>
        <Typography
          style={{ marginBottom: "10px" }}
          variant="h5"
          component="div"
        >
          80%
        </Typography>
        <Typography variant="body2">하루 10km 달리기</Typography>
        <Typography variant="body2">강아지 산책 시키기</Typography>
        ...
      </CardContent>
    </Card>
  );
};

export default CardBox;
