import { Button } from "flowbite-react";
import { useState } from "react";

function App() {
  const [num, updateNum] = useState<number>(8);
  const [user, updateUser] = useState({
    fName: "Dor",
    lName: "Ohana",
    age: 26,
    email: "dor@email.com",
  });

  const increase = () => {
    updateNum(num + 10);
    console.log(num);
  };

  const increaseAge = () => {
    updateUser({
      // fName: user.fName,
      // lName: user.lName,
      // age: user.age+1,
      // email: user.email
      ...user,
      age: user.age + 1,
      fName: "Moshe",
    });
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      {/* <h1>{num}</h1>
      <Button onClick={increase}>+</Button> */}
      <div>
        <h1>{user.fName}</h1>
        <h2>{user.lName}</h2>
        <h3>{user.age}</h3>
        <h4>{user.email}</h4>

        <Button onClick={increaseAge}>+</Button>
      </div>
    </div>
  );
}

export default App;
