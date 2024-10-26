import { Button } from "flowbite-react";
import useNumbers from "../Hooks/useNumbers";

function Numbers() {
  const {numRef, increase, increaseState, selectRef, anotherNum} = useNumbers(0);

  return (
    <>
      <h1>ref: {numRef.current}</h1>
      <Button onClick={increase}>+</Button>
      <hr />
      <h1>state: {anotherNum}</h1>
      <Button onClick={increaseState}>+</Button>
      <hr />
      <select ref={selectRef}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </>
  );
}

export default Numbers;
