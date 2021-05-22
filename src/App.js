
import './App.css';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchbox from "./components/Searchbox";
import Home from "./components/Home";
import Userdetails from "./components/Rightpane";
import Playbar from "./components/Playbar";

//import PlayButton from "./components/PlayButton";//



function App() {
  return (
    <div className="App">
      
      <Router>
      <Searchbox />
        <Sidebar />
        <Playbar />
        <Userdetails />
        <Home />
        
        <Switch>
          
        <Route exact path="/"></Route>
         
        </Switch>
      </Router>
    </div>
  );
}


export default App;