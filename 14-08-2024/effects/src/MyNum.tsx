import { useEffect, useState } from "react";

const MyNum = () => {
  const [num, setNum] = useState<number>(5);

  const up = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    const isEven = num % 2 === 0;
    console.log(isEven);
  }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={up}>+</button>
    </div>
  );
};
export default MyNum;
