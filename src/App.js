
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})

  const token = localStorage.getItem('token')

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>

          <Route exact path='/home' >
            {token ? <Home user={user} /> : <Redirect to='/' />}
          </Route>

          <Route exact path="/aboutus"></Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
