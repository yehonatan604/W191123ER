import "./App.css";
import Card from "./components/Card";
import RandomNum from "./components/RandomNum";

const rndNums = [
  { min: 10, max: 100 },
  { min: 10, max: 100 },
  { min: 10, max: 200 },
];

const users = [
  {
    name: "dfretg",
    age: 14,
    email: "sdf@email.com"
  },
  {
    name: "dfg",
    age: 144,
    email: "sdf@email.com"
  },
  {
    name: "dfertytug",
    age: 14,
    email: "sdertf@email.com"
  }
]

function App() {
  return (
    <div>
      {users.map((item, index) => {
        return <Card key={index} user={item}/>
      })}
    </div>
  );
}

export default App;
