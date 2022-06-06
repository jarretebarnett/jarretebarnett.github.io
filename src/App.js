import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./pages/Welcome";
import Home from './pages/Home';
import Experience from "./pages/Experience";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';
import React from "react";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route component = {Welcome} path = "/" exact />
        <Route component = {Home} path = "/home" />
        <Route component = {Experience} path = "/experience" />
        <Route component = {Portfolio} path = "/portfolio" />
        <Route component = {Contact} path = "/contact" />
      </Routes>
    </Router>
  );
}

export default App;