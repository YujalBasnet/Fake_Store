import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 h-20 items-center bg-amber-600">
      <h1 className="text-4xl font-bold">LOGO</h1>

      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex gap-2">
        <Link to="/login">
          <Button text="Login" color="blue" />
        </Link>

        <Link to="/register">
          <Button text="Register" color="red" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
