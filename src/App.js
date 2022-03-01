import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import CV from "./CV";
import About from "./About";
import NoPage from "./NoPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeNav />} />
        <Route path="portfolio" element={<PortfolioNav />} />
        <Route path="cv" element={<CVNav />} />
        <Route path="about" element={<AboutNav />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

function HomeNav() {
  return (
    <>
      <nav>
        <ul className="my-css">
          <li>Home</li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Home />
    </>
  );
}

function PortfolioNav() {
  return (
    <>
      <nav>
        <ul className="my-css">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Portfolio</li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Portfolio />
    </>
  );
}

function CVNav() {
  return (
    <>
      <nav>
        <ul className="my-css">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>CV</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <CV />
    </>
  );
}

function AboutNav() {
  return (
    <>
      <nav>
        <ul className="my-css">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>About</li>
        </ul>
      </nav>
      <About />
    </>
  );
}

export default App;
