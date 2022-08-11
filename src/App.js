import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";
import CV from "./CV";
import About from "./About";
import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import "./Style.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="cv" element={<CV />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
