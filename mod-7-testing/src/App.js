import React from "react";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>Unit testing</h1>
      <Counter />
      <Person onSave={console.log} />
      <Clock />
    </div>
  );
}

export default App;
