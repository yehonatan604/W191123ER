import Title from "./Components/Title";
import Flex from "./Components/Flex";
import { FlexDirections } from "./enums/FlexDirections";
import { FlexAlign } from "./enums/FlexAligns";

function App() {
  return (
    <main className="flex items-center justify-center min-h-screen gap-2 dark:bg-gray-800">
      <Flex dir={FlexDirections.COL} justify={FlexAlign.CENTER}>
        <Title>Hello World</Title>
        <Title>Hello Dor</Title>
        <Title>Hello Class</Title>
      </Flex>

      <Flex dir={FlexDirections.ROW} justify={FlexAlign.START}>
        <h1>dfhggh</h1>
        <p>ertertert</p>
        <p>ertertert</p>
        <p>ertertert</p>
        <p>ertertert</p>
      </Flex>
    </main>
  );
}

export default App;
