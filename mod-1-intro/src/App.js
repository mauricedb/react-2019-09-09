import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Demo1 extends Component {
  render() {
    // return [<div>Demo 1</div>, <div>Demo 2</div>];

    // const firstName = this.props.firstName;
    const { firstName } = this.props;

    return (
      <>
        <div>Hello {firstName}</div>
        <div>Demo 1</div>
        <div>Demo 2</div>
      </>
    );
  }
}

function Demo2(props) {
  // return [<div>Demo 1</div>, <div>Demo 2</div>];

  const firstName = props.firstName;

  return (
    <>
      <div>Hello {firstName}</div>
      <div>Demo 1</div>
      <div>Demo 2</div>
    </>
  );
}

const Demo3 = ({ person }) => {
  // return [<div>Demo 1</div>, <div>Demo 2</div>];

  return (
    <>
      {person.firstName}
      <div>Demo 1</div>
      <div>Demo 2</div>
    </>
  );
};

const Login = ({ userName, setUserName }) => {
  return (
    <div>
      user: {userName}
      <input
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <button onClick={() => setUserName("Jack")}>Update name</button>
    </div>
  );
};

class Clock extends React.Component {
  state = {
    now: new Date()
  };

  componentDidMount() {
    this.handle = setInterval(() => {
      this.setState({
        now: new Date()
      });
      console.log("TIme updating");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    return <div>{this.state.now.toLocaleTimeString()}</div>;
  }
}

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  async componentDidMount() {
    const url =
      "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

    const response = await fetch(url);
    const data = await response.json();
    const jokes = data.value;

    this.setState({ jokes });
  }

  render() {
    const { jokes } = this.state;

    return (
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke.joke}</li>
        ))}
      </ul>
    );
  }
}

function App() {
  const [userName, setUserName] = React.useState("Maurice");

  return (
    <div className="App">
      <Login userName={userName} setUserName={setUserName} />

      <header className="App-header">
        <Jokes />
        {userName && <Clock />}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is really cool</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Demo1 firstName="Maurice" />
        <Demo2 firstName="Jack" />
        <Demo3 person={{ firstName: "Joe" }} />
      </header>
    </div>
  );
}

export default App;
