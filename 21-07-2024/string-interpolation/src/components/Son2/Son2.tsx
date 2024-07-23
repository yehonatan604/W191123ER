import Styles from './Son2.module.css';

const Son2 = ({name}: {name: string}) => {
    const age = 36;
    const type = "Son";
    return (
      <>
      <h1>
        Hello this is <span className="type">{type}2</span> component
      </h1>
      <p>my name is <span className={Styles.name}>{name}</span> and my age is <span className="age">{age}</span> </p>
      </>
    );
  };
  
  export default Son2;
  