import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";

function App() {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>

          <Route exact path="/home">
            {token ? <Home user={user} /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/under_construction">
            <About />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
