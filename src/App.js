import React from "react";
import './App.css';

//imported packages
import { Switch, Route } from "react-router-dom";

//imported components
import Navigation from "./Components/Navigation/Navigation";

//imported Pages
import Home from "./Pages/Home/Home";
import Activity from "./Pages/Activity/Activity";
import Wallet from "./Pages/Wallet/Wallet";
import Market from "./Pages/Market/Market";
import Earn from "./Pages/Earn/Earn";


function App() {
  return (
    <div className="App">
      hello world

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/earn" component={Earn} />
      </Switch>

      <Navigation />
    </div>
  );
}

export default App;
