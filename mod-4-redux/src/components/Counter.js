import React from "react";
import { connect } from "react-redux";
import { createIncrement, createDecrement } from "../store/actions";

const Status = ({ count, increment, decrement }) => {
  return (
    <div>
      Count {count}
      &nbsp;
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function() {
      dispatch(createIncrement(1));
    },
    decrement: function() {
      dispatch(createDecrement(1));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);
