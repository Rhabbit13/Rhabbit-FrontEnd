import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
const Edit = props => {
  const { disabled, data } = props;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [selected, setSelected] = React.useState(false);

  return (
    <EditBox>
      <TextField
        disabled={disabled}
        style={{
          width: "100%",
        }}
        label={data.text ? data.text : "해야하는 일를 작성해 주세요"}
        variant="outlined"
        size="Normal"
        color="error"
      />

      <ToggleButton
        disabled={disabled}
        color="error"
        style={{ border: "0px", backgroundColor: "#fff" }}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
      >
        <BookmarkAddedIcon />
      </ToggleButton>
      <Checkbox
        disabled={disabled}
        {...label}
        color="error"
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
      />
    </EditBox>
  );
};
const EditBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;
export default Edit;
