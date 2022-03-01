import React from "react";

function CV() {
  const dataUrl = "data.json";

  async function getData() {
    const response = await fetch(dataUrl);
    const data = await response.json();
  }
  return (
    <>
      <main>
        <h2>CV</h2>
        <p>Some text here as well</p>
      </main>
    </>
  );
}

export default CV;
