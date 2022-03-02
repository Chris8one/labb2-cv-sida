import React from "react";

function CV() {
  const data = "data.json";
  let outputText = "";

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    for (let key in obj) {
      let value = obj[key];
      outputText = (
        <li>
          {key} + {value}
        </li>
      );
    }
  }
  return (
    <>
      <main>
        <h2>CV</h2>
        <ul>{outputText}</ul>
      </main>
    </>
  );
}

export default CV;
