import React from "react";
import Grid from "@mui/material/Grid";
import stuled from "styled-components";

const Detail = () => {
  return (
    <Grid
      container
      style={{ border: "1px solid red" }}
      rowSpacing={3}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
    ></Grid>
  );
};
export default Detail;
