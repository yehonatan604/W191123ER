import { Button } from "flowbite-react";
import { useState } from "react";

type SquareProps = {
  size: number;
  bgColor: string;
};

const Square = (props: SquareProps) => {
  const [squareObj, updateSquareObj] = useState(props);

  const increase = () => {
    updateSquareObj({
      ...squareObj,
      size: squareObj.size + 5,
      bgColor: squareObj.size % 2 === 0 ? "blue" : "red",
    });
  };

  const decrease = () => {
    updateSquareObj({
      ...squareObj,
      size: squareObj.size - 5,
      bgColor: squareObj.size % 2 === 0 ? "blue" : "red",
    });
  };

  return (
    <>
      <div
        style={{
          width: squareObj.size + "px",
          height: squareObj.size + "px",
          background: squareObj.bgColor,
        }}
      />
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </>
  );
};

export default Square;
