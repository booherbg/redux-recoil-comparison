import React from "react";
import { counterAtom } from "./Atoms";
import { useRecoilState } from "recoil";

const Counter = (props) => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  const increment = () => setCounter((current) => current + 1);
  const decrement = () => setCounter((current) => current - 1);
  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;
