import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import { auth } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //runs once when the app component boot up
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
