import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Actions from "./components/Actions"
import Clients from "./components/Clients"
import Analytics from "./components/Analytics"

import './App.css';

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar key={Math.random()}/>
      <Route exact path="/" exact render={() => <Clients key={Math.random()} />} />
      <Route exact path="/actions" exact render={() => <Actions key={Math.random()} />} />
      <Route exact path="/analytics" exact render={() => <Analytics key={Math.random()} />} />
    </div>
  </Router>
  );
}

export default App;


