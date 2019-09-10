import React from "react";
import { connect } from "react-redux";

const Status = ({ count = 99 }) => <div>The current count = {count}</div>;

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

export default connect(mapStateToProps)(Status);
