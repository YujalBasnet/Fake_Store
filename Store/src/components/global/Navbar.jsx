import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../Button";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-2 font-medium transition-colors duration-200 ${
      isActive
        ? "text-white"
        : "text-amber-100 hover:text-white"
    }`;

  // ADMIN NAVBAR
  if (currentUser?.role === "admin") {
    return (
      <nav className="flex h-20 items-center justify-between bg-slate-900 px-4">

        {/* Logo */}
        <Link
          to="/admin"
          className="text-3xl font-bold text-white"
        >
          FakeStore <span className="text-amber-400">Admin</span>
        </Link>

        {/* Admin Navigation */}
        <ul className="flex gap-5">

          <li>
            <NavLink
              to="/admin"
              end
              className={navLinkClass}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/products"
              className={navLinkClass}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/orders"
              className={navLinkClass}
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/users"
              className={navLinkClass}
            >
              Users
            </NavLink>
          </li>

        </ul>

        {/* Admin Account */}
        <div className="flex items-center gap-3">

          <span className="font-medium text-white">
            Hi, {currentUser.name}
          </span>

          <Button
            text="Logout"
            color="red"
            onClick={handleLogout}
          />

        </div>
      </nav>
    );
  }

  // NORMAL USER NAVBAR
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
          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={navLinkClass}
          >
            Products
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/service"
            className={navLinkClass}
          >
            Service
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </li>

      </ul>

      {/* Authentication */}
      <div className="flex items-center gap-3">

        {currentUser ? (
          <>
            <span className="font-medium text-white">
              Hi, {currentUser.name}
            </span>

            <Button
              text="Logout"
              color="red"
              onClick={handleLogout}
            />
          </>
        ) : (
          <>
            <Link to="/login">
              <Button text="Login" color="blue" />
            </Link>

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