import "../styles/App.css";
import Container from "@mui/material/Container";
import { Route, Link, Switch } from "react-router-dom";

import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Fix from "../pages/Fix";
import Signup from "../pages/Signup";
import Not from "../pages/Not";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={() => <Main></Main>} />
          <Route path="/login" component={() => <Login></Login>} />
          <Route path="/signup/:pui" component={() => <Signup></Signup>} />
          <Route path="/detail/:pui" component={() => <Detail></Detail>} />
          <Route path="/detail/:pui" component={() => <Detail></Detail>} />
          <Route path="/fix/:pui" component={() => <Fix></Fix>} />
          <Route component={() => <Not></Not>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
