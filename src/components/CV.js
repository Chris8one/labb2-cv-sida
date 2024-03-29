import React from "react";
import Data from "./data.json";

function CV() {
  return (
    <>
      <main className="cv-container">
        <h2>Work/Education</h2>
        {Data.map((post) => {
          return (
            <div className="post-div" key={post.id}>
              <h3>{post.job}</h3>
              <h4>{post.date}</h4>
              <p>{post.position}</p>
              <hr className="hr-grad-post" />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default CV;
