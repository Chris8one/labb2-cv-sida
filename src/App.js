import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";
import CV from "./CV";
import About from "./About";
import Footer from './Footer';
import Page from './Page';
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
            </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
