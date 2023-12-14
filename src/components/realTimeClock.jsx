import React, { useEffect, useState } from "react";

function HookClock() {
  const [time, setTime] = useState();
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [setTime]);

  const addFlag = () => {
    console.log(time);
    setFlag((prevState) => {
      return [...prevState, time];
    });
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={addFlag}>Flag</button>
      <ul>
        {flag.map((tick, index) => {
          return <li key={index}>{tick}</li>;
        })}
      </ul>
    </div>
  );
}

export default HookClock;
