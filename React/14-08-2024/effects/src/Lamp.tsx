import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

const Lamp = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [color, setColor] = useState<"black" | "yellow">("black");

  const turn = () => {
    setIsOn(!isOn);
  };

  const change = () => {
    setColor(isOn ? "yellow" : "black");
  };

  useEffect(() => {
    change();
  }, [isOn]);

  return (
    <>
      <div className="h-[200px] w-[200px]" style={{ background: color }} />
      <Button onClick={turn}>On/Off</Button>
    </>
  );
};

export default Lamp;
