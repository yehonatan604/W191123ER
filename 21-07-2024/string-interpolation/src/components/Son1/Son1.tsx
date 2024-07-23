const Son1 = () => {
  const name = "Omri";
  const age = 27;
  const type = "Son";
  return (
    <>
      <h1>
        Hello this is <span className="type">{type}1</span> component
      </h1>
      <p>
        my name is <span style={{ color: "orange" }}>{name}</span> and my age is{" "}
        <span className="age">{age}</span>{" "}
      </p>
    </>
  );
};

export default Son1;
