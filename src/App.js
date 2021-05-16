import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbox from "./components/Searchbox";
import Login from "./components/Login";
import Userdetails from "./components/Rightpane";
import Playbar from "./components/Playbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Searchbox />
        <Sidebar />
        <Playbar />
        <Userdetails />

        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
