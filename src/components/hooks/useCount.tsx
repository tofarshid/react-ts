import React, { Dispatch, SetStateAction, useState } from "react";

interface ReturnType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
}

const useCount = (initialValue: number): ReturnType => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((x) => x + 1);
  const decrement = () => setCount((x) => x - 1);

  return { count, setCount, increment, decrement };
};

export default useCount;
