import { Button, Card, DarkThemeToggle, Navbar } from "flowbite-react";
import Styles from "./App.module.css";

const arr: number[] = [1, 23, 46, 100];

const cards = [
  {
    id: 1,
    title: "Title 1",
    imgSrc: "https://picsum.photos/100/50",
    imgAlt: "pic1",
    description: "lorem ipsum ",
  },
  {
    id: 2,
    title: "Title 2",
    imgSrc: "https://picsum.photos/100/50",
    imgAlt: "pic2",
    description: "lorem ipsum ",
  },
  {
    id: 3,
    title: "Title 3",
    imgSrc: "https://picsum.photos/100/50",
    imgAlt: "pic3",
    description: "lorem ipsum ",
  },
];

function App() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className={`${Styles.par} dark:bg-green-700`}>
        <h1 className=" dark:text-white">Flowbite React + Vite</h1>
        <p className={Styles.par}>kfdsgjhdgflkjhdfkjhd dflgkjdflkg ghyh</p>
        <DarkThemeToggle />

        {arr.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}

        <div className="flex flex-wrap gap-2">
          <Button gradientMonochrome="info">Info</Button>
          <Button gradientMonochrome="success">Success</Button>
          <Button gradientMonochrome="cyan">Cyan</Button>
          <Button gradientMonochrome="teal">Teal</Button>
          <Button gradientMonochrome="lime">Lime</Button>
          <Button gradientMonochrome="failure">Failure</Button>
          <Button gradientMonochrome="pink">Pink</Button>
          <Button gradientMonochrome="purple">Purple</Button>
        </div>

        {cards.map((item) => {
          return (
            <Card className="max-h-[20vh] max-w-sm" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </Card>
          );
        })}
      </main>
    </>
  );
}

export default App;
