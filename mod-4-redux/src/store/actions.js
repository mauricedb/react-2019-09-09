export function createIncrement(amount) {
  return {
    type: "INCREMENT",
    payload: amount
  };
}

export function createDecrement(amount) {
  return {
    type: "DECREMENT",
    payload: amount
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(createDecrement(1));
  };
}
