import Son1 from "../Son1/Son1";
import Son2 from "../Son2/Son2";

const Father = () => {
  const name = "Aba";
  const age = 40;
  const type = "Father";
  return (
    <>
      <h1>
        Hello this is <span className="type">{type}</span> component
      </h1>
      <p>
        <p>
          my name is <span style={{ color: "Yellow" }}>{name}</span> and my age
          is <span className="age">{age}</span>{" "}
        </p>
      </p>

      <Son1 />
      <Son2 name="Tiraga" />
    </>
  );
};

export default Father;
