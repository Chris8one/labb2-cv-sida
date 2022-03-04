// import * as React from "react";
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import CV from "./CV";
import About from "./About";
import NoPage from "./NoPage";
import "./Style.css";

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
        <ul>
          <li className="active-link">Home</li>
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
      <hr className="hr-grad" />
      <Home />
    </>
  );
}

function PortfolioNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active-link">Portfolio</li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <hr className="hr-grad" />
      <Portfolio />
    </>
  );
}

function CVNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="active-link">CV</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <hr className="hr-grad" />
      <CV />
    </>
  );
}

function AboutNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li className="active-link">About</li>
        </ul>
      </nav>
      <hr className="hr-grad" />
      <About />
    </>
  );
}

export default App;
