import { useRef, useState, useEffect, RefObject } from "react";

const useNumbers = (startNum: number) => {
  const numRef = useRef(0);
  const [anotherNum, setAnootherNum] = useState(startNum);
  const selectRef = useRef() as RefObject<HTMLSelectElement>;

  const increase = () => {
    numRef.current++;
    console.log(numRef.current);
  };

  const increaseState = () => {
    setAnootherNum(anotherNum + 1);
  };

  useEffect(() => {
    console.log(selectRef.current);
  });

  return { increase, increaseState, selectRef, anotherNum, numRef };
};

export default useNumbers;
