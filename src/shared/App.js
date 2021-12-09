import "../styles/App.css";
import Container from "@mui/material/Container";
import { Route, Link, Switch } from "react-router-dom";
 import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Fix from "../pages/Fix";
import Signup from "../pages/Signup";
import Not from "../pages/Not";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        style={{ position: "relative", height: "100vh" }}
      >
        <Switch>
          <Route exact path="/main" component={() => <Main></Main>} />
          <Route path="/login" component={() => <Login></Login>} />
          <Route path="/signup" component={() => <Signup></Signup>} />
          <Route path="/detail/:pid" component={() => <Detail></Detail>} />
          <Route path="/fix/:pid" component={() => <Fix></Fix>} />
          <Route component={() => <Not></Not>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
