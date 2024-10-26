import { useEffect, useState } from "react";

const Now = () => {
  const [nowDate, setNowDate] = useState<Date>();

  useEffect(() => {
    setNowDate(new Date());
  }, []);

  return <h1>{nowDate?.toDateString()}</h1>;
};

export default Now;
