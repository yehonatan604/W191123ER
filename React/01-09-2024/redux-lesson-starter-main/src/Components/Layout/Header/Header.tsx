import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

type HeaderProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Header = (props: HeaderProps) => {
  
  const logout = () => {
    props.setIsLoggedIn(false);
  };

  return (
    <Navbar fluid rounded className="bg-slate-800">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
          My App
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={"/"} href="/" className="text-white">
          Home
        </Navbar.Link>

        {!props.isLoggedIn && (
          <Navbar.Link
            as={Link}
            to={"/signin"}
            href="/signin"
            className="text-white"
          >
            Sign In
          </Navbar.Link>
        )}

        <Navbar.Link className="text-white cursor-pointer" onClick={logout}>
          Sign Out
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to={"/profile"}
          href="/profile"
          className="text-white"
        >
          Profile
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
