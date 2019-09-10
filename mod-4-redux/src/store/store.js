import { createStore } from "redux";

const initalState = {
  counter: 0
};

function reducer(state = initalState, action) {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "INCREMENT":
      //   state.counter += action.payload; No
      //   return Object.assign({}, state, {
      //     counter: state.counter + action.payload
      //   });

      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
