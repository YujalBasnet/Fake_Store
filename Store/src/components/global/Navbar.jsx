import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../Button";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout = () => {
    logout();
    navigate("/");
  }

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-2 font-medium transition-colors duration-200 ${
      isActive
        ? "text-white"
        : "text-amber-100 hover:text-white"
    }`;

  return (
    <nav className="flex h-20 items-center justify-between bg-amber-600 px-4">

      {/* Logo */}
      <Link
        to="/"
        className="text-4xl font-bold text-white"
      >
        LOGO
      </Link>

      {/* Navigation */}
      <ul className="flex gap-5">

        <li>
          <NavLink to="/" end className={navLinkClass}>
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-7" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Products
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-7" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/service" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Service
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-7" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Contact
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    isActive ? "w-7" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        </li>

      </ul>

      {/* Authentication */}
      <div className="flex items-center gap-2">

        {currentUser ? (
          <>
            {/* User name */}
            <span className="mr-2 font-medium text-white">
              Hi, {currentUser.name}
            </span>

            {/* Logout */}
            <Button
              text="Logout"
              color="red"
              onClick={handlelogout}
            />
          </>
        ) : (
          <>
            {/* Login */}
            <Link to="/login">
              <Button text="Login" color="blue" />
            </Link>

            {/* Register */}
            <Link to="/register">
              <Button text="Register" color="red" />
            </Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;