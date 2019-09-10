import React from "react";

const Status = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count} - Increment</button>
    </div>
  );
};

export default Status;
