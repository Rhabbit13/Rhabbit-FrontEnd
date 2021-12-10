import React from "react";
import "../styles/App.css";
import Container from "@mui/material/Container";
import { Route, Link, Switch } from "react-router-dom";
import { actionCreators as todoAction } from "../redux/modules/todo";
import { useDispatch } from "react-redux";
import moment from "moment";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Fix from "../pages/Fix";
import Signup from "../pages/Signup";
import Not from "../pages/Not";

function App() {
  const dispatch = useDispatch();

  const TimeEvent = () => {
    const num = Math.random().toString(36).substr(2, 16);
    const SampleData = {
      user: {
        nickname: "",
      },
      cardDetails: [
        {
          text: "오늘에 할일를 작성해 주세요!!!! ",
          checked: false,
          daily: false,
        },
      ],
      date: moment().format("YYYYMMDD"),
    };
    dispatch(todoAction.card_create(SampleData));
  };
  setInterval(TimeEvent, 86400000);
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        style={{
          position: "relative",
          height: "100%",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <Switch>
          <Route exact path="/" component={() => <Main></Main>} />
          <Route path="/login" component={() => <Login></Login>} />
          <Route path="/signup" component={() => <Signup></Signup>} />
          <Route path="/detail/:pid" component={() => <Detail></Detail>} />
          {/* <Route path="/fix/:pid" component={() => <Fix></Fix>} /> */}
          <Route component={() => <Not></Not>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
