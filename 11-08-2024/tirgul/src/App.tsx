import Square from "./components/Square";

function App() {
  return (
    <main className="flex items-center justify-center min-h-screen gap-2 dark:bg-gray-800">
      <Square size={100} bgColor="blue" />
    </main>
  );
}

export default App;
