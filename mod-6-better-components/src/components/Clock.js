import React, { useState, useEffect } from "react";
import Person from "./Person";

function useTime(interval) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return time;
}

function Clock({ interval = 1000 }) {
  const time = useTime(interval);

  return (
    <div>
      {time.toLocaleTimeString()}
      <Person data={1}>
        <div></div>
      </Person>
    </div>
  );
}

export default React.memo(Clock);
