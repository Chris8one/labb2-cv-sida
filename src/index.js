import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Home.js";
import Portfolio from "./Portfolio.js";
import CV from "./CV.js";
import NoPage from "./NoPage.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="portfolio" element={<Portfolio />}>
            Portfolio
          </Route>
          <Route path="cv" element={<CV />}>
            CV
          </Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
