import Son from "../Son/Son";

const Father = () => {
  const type: string = "Father";
  return (
    <>
      <h1>Hello this is {type}</h1>
      <Son name="Tzlil" age={26} color="purple"/>
      <Son name="Henadi" age={22} color="pink"/>
      <Son name="Sahar" age={23} color="maroon"/>
    </>
  );
};

export default Father;
