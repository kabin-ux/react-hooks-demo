import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useState Hook</h1>
      <p>Count: {count}</p>
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default UseStateHook;
