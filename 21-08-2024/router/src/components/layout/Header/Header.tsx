import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const location = useLocation().pathname;

  console.log(location);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" to="/home" active={location === "/home" || location==="/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/about" to="/about" active={location === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Brand>
          <TextInput rightIcon={CiSearch} />
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
