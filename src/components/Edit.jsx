import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useDispatch } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router";

const Edit = props => {
  const { disabled, data, pid } = props;
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(false);
  const [fixed, setFixed] = React.useState(false);
  const [checked, setChecked] = React.useState(data.checked);
  const textRef = React.useRef("");
  const DelectBtn = e => {
    dispatch(todoAction.todo_delect(data.id));
  };

  const handleChange = event => {
    setChecked(!checked);
    const todoText = {
      id: data.id,
      text: data.text,
      checked: !checked,
      daily: data.daily,
    };
    dispatch(todoAction.todo_fix(pid, todoText));
  };
  const DailyChange = e => {
    const todoText = {
      id: data.id,
      text: data.text,
      checked: data.checked,
      daily: !selected,
    };
    dispatch(todoAction.todo_fix(pid, todoText));
  };
  const ChangeText = e => {
    const todoText = {
      id: data.id,
      text: textRef.current.value,
      checked: data.checked,
      daily: data.daily,
    };
    if (fixed !== false && textRef.current.value) {
      dispatch(todoAction.todo_fix(pid, todoText));
    } else {
      console.log("응 아니야");
    }
  };
  const sxx = { "& .MuiSvgIcon-root": { fontSize: 25 } };
  return (
    <EditBox>
      <FelxBox>
        <ToggleButton
          disabled={disabled}
          color="error"
          style={{ border: "0px", backgroundColor: "#fff" }}
          sx={sxx}
          value="check"
          size="small"
          selected={fixed}
          onChange={() => {
            setFixed(!fixed);
            ChangeText();
          }}
        >
          <AutoFixHighIcon />
        </ToggleButton>
        <ToggleButton
          disabled={disabled}
          color="error"
          style={{ border: "0px", backgroundColor: "#fff" }}
          sx={sxx}
          size="small"
          value="check"
          selected={data.daily}
          onChange={async e => {
            setSelected(!selected);
            DailyChange(e);
          }}
        >
          <BookmarkAddedIcon />
        </ToggleButton>
        <IconButton
          disabled={disabled}
          style={{ border: "0px", backgroundColor: "#fff" }}
          sx={sxx}
          size="small"
          onClick={() => {
            DelectBtn();
          }}
        >
          <CloseIcon />
        </IconButton>
      </FelxBox>
      <TextField
        inputRef={textRef}
        disabled={!fixed}
        style={{
          width: "90%",
        }}
        label="할일"
        variant="outlined"
        size="Nomall"
        color="error"
        defaultValue={data.text}
      />
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        color="error"
        sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
        disabled={disabled}
      />
    </EditBox>
  );
};
const EditBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const FelxBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
export default Edit;
