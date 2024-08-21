import { Button } from "flowbite-react";
import { FaRegSadCry } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const nav = useNavigate();

    const navHome = () => {
        nav('/home');
    }

    return (
        <>
        <h1 className="text-3xl">404</h1>
        <p>page not found</p>
        <FaRegSadCry size={50}/>
        <Link to="/home">Go Home</Link>
        <Button onClick={navHome}>Go Home</Button>
        </>
    )
}

export default Error;