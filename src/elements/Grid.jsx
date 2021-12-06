import React from "react";
import styled from "styled-components";
const Grid = props => {
  const { children } = props;
  return <GridBox>{children}</GridBox>;
};

const GridBox = styled.div``;
export default Grid;
