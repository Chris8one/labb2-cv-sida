import React from "react";
import logo from './Assets/Images/logo.png';

function Home() {
  return (
    <>
      <main>
      <div className="logo-container">
        <div className="herotext-div">
          <h3 className="swd">Software Developer</h3>
        </div>
        <div className="logo-div">
          <img className="logo" src={logo} alt="Code logo"/>
        </div>
      </div>
      </main>
    </>
  );
}

export default Home;
