import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbox from "./components/Searchbox";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        {<Searchbox />}
        <Sidebar />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
