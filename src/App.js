import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Experience from "./pages/Experience";
import References from "./pages/References";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';
import React from "react";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
        <Switch>
          <Route component = {Welcome} path = "/" exact />
          <Route component = {Experience} path = "/experience" />
          <Route component = {References} path = "/references" />
          <Route component = {Portfolio} path = "/portfolio" />
          <Route component = {Contact} path = "/contact" />
        </Switch>
    </Router>
  );
}

export default App;