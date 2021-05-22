
import './App.css';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbox from "./components/Searchbox";

import Userdetails from "./components/Rightpane";
import Playbar from "./components/Playbar";

//import PlayButton from "./components/PlayButton";//


import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import AuthRoute from "./utilities/AuthRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <AuthRoute path="/home" exact component={Home} />
          <Route exact path="/aboutus"></Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
