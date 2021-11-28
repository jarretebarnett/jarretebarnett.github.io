// import logo from './logo.svg';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Home from './components/Home';
import Projects from './components/Projects';
import Bio from './components/Bio';
import './App.css';

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Nav />
        <Routes>
          <Route component = {Welcome} path = "/" exact />
          <Route component = {Home} path = "/home" />
          <Route component = {Projects} path = "/projects" />
          <Route component = {Bio} path = "/bio" />
        </Routes>
    </Router>
  );
}

export default App;
