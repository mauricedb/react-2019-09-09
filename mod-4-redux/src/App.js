import React from "react";
import "./App.css";

import { Provider } from "react-redux";

import Counter from "./components/Counter";
import Status from "./components/Status";

import store from "./store/store";
import { createIncrement, incrementIfOdd } from "./store/actions";

store.dispatch(createIncrement(5));
store.dispatch(createIncrement(1));
// store.dispatch(incrementIfOdd);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Status />
      </div>
    </Provider>
  );
}

export default App;
