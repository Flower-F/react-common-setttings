import { memo } from "react";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => void;
}

const Counter = ({
  count,
  increment,
  decrement,
  reset,
  incrementAsync,
}: CounterProps) => {
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementAsync}>+1 (1s delay)</button>
    </>
  );
};

export default memo(Counter);
