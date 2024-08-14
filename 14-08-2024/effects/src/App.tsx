import { DarkThemeToggle } from "flowbite-react";
import { useEffect } from "react";
import Now from "./Now";
import MyNum from "./MyNum";
import Lamp from "./Lamp";

function App() {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Vite</h1>
      <Now />
      <DarkThemeToggle />
      <MyNum />
      <Lamp />
    </main>
  );
}

export default App;
