import React, { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1);
  };
  const DeacreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter: {count}</h1>      
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DeacreaseCount}>Decrease Count</button>
    </div>
  );
};

export default CounterFunction;
