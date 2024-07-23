type SonProps = {
  name: string;
  age: number;
  color: string;
};

const Son = (props: SonProps) => {
  const type = "Son";
  const {name, age, color} = props;

  return (
    <>
      <h1>this is {type} component</h1>
      <p>
        my name is <span style={{ color: color }}>{name}</span>, my
        age is {age}
      </p>
    </>
  );
};

export default Son;
