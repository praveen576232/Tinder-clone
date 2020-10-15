import React from "react";

import "./App.css";
import Header from "./header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./Cards/Cards";
import CardsButton from "./Cards/cardButtons/CardsButton";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
       
          <Route path="/">
            <Header />
            <Cards/>
            <CardsButton/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
