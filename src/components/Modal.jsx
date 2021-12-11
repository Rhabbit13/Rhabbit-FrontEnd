import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { actionCreators as todoAction } from "../redux/modules/todo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const Tref = React.useRef("");
  const AddList = () => {
    const todoText = {
      text: Tref.current.value,
      checked: false,
      daily: false,
    };
    dispatch(todoAction.todoAddDB(Number(props.pid), todoText));
    handleClose();
  };
  const TextControl = e => {
    if (e.charCode === 13) {
      AddList();
    }
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ width: "50%", backgroundColor: "#999", height: "40px" }}
        onClick={handleOpen}
        disabled={props.disabled}
      >
        Todo 추가
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            루틴리스트를 추가해 주세요
          </Typography>
          <TextField
            style={{
              width: "100%",
              marginTop: "10px",
            }}
            label="할일"
            variant="outlined"
            size="Nomall"
            color="error"
            inputRef={Tref}
            onKeyPress={TextControl}
          />
          <Button color="error" onClick={AddList}>
            추가하기
          </Button>
        </Box>
      </Modal>
    </>
  );
}
