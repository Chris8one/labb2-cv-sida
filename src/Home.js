import React from "react";
import logo from './Assets/Images/logo.png';

function Home() {
  return (
    <>
      <main>
        <h2>Chris Granbäck</h2>
        <div className="logo-div">
          <img className="logo" src={logo} alt="Code logo"/>
          <h3 className="swd">Software Developer</h3>
        </div>
      </main>
    </>
  );
}

export default Home;
