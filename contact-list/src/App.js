import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Singleview from "./Singleview.js";
import Listview from "./Listview.js";

function App() {
  return (
    <div className="App">
      <div className="phonebook">
        <Router>
          <Route path="/" exact component={Listview} />
          <Route path="/contacts/:id" component={Singleview} />
        </Router>
      </div>
    </div>
  );
}

export default App;
