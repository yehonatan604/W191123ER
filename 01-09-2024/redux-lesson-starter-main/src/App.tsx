import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import Profile from "./Pages/Profile/Profile";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/signin"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
