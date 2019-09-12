import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeter from "./Greeter";

type AppProps = {
  firstName: string;
};

const App: React.FC<AppProps> = ({ firstName }) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {firstName}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeter theName={firstName}></Greeter>
    </div>
  );
};

export default App;
