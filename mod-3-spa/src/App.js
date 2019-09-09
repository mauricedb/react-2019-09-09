import React from "react";
import "./App.css";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  return (
    <div>
      <header>
        <a href="/cat">Cat</a>
        <span> | </span>
        <a href="/dog">Dog</a>
      </header>

      <Cat />
      <Dog />
    </div>
  );
}

export default App;
