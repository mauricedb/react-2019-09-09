import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  return (
    <div>
      <Counter />
      <Status />
    </div>
  );
}

export default App;
