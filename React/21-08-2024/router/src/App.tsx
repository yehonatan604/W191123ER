import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <Header />
      {/* תוכן מתחלף */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
