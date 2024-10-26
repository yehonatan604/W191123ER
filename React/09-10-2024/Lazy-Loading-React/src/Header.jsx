import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}
