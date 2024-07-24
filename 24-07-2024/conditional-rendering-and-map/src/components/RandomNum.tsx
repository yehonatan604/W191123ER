type RandomNumProps = {
  min: number;
  max: number;
};

const RandomNum = (props: RandomNumProps) => {
  const { min, max } = props;

  const rnd = Math.floor((Math.random() + min) * max + 1);
  const isEven: boolean = rnd % 2 === 0;

  return (
    <>
      <h1>Random Number</h1>
      <p>{isEven ? rnd : "this is not even number"}</p>
    </>
  );
};

export default RandomNum;
