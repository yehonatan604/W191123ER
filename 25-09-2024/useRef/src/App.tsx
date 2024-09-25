import Numbers from "./components/Numbers";
import Numbers2 from "./components/Numbers2";

function App() {

  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center gap-2 dark:bg-gray-800">
      <Numbers/>
      <Numbers2/>
    </main>
  );
}

export default App;
