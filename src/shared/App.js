import React from "react";
import "../styles/App.css";
import Container from "@mui/material/Container";
import { Route, Link, Switch } from "react-router-dom";
import { actionCreators as todoAction } from "../redux/modules/todo";
import { actionCreators as userAction } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Fix from "../pages/Fix";
import Signup from "../pages/Signup";
import Not from "../pages/Not";

import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(todoAction.cardLoadDB());
  }, []);
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
          <PrivateRoute component={Main} path="/" exact />
          <PrivateRoute component={Detail} path="/detail/:pid" exact />
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={false}
            component={Signup}
            path="/signup"
            exact
          />
          <Route component={() => <Not></Not>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
