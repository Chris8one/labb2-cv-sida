import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import CV from "./components/CV";
import About from "./components/About";
import NoPage from "./components/NoPage";
import "./Style.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Page />}>
              <Route index element={<Home />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="cv" element={<CV />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
