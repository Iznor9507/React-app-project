import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => count + 1);
  };
  const decrement = () => {
    setCount((prevCount) => count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
