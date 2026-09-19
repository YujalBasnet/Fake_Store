import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Button from "../Button";

import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const { cartCount } = useContext(CartContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-white border-b-2 border-white pb-1"
        : "text-white hover:text-amber-200"
    }`;

  return (
    <nav className="flex h-20 items-center justify-between bg-amber-600 px-6 shadow-md">

      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-white">
        FakeStore
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/service" className={navLinkClass}>
            Service
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">

        {currentUser ? (
          <>
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center rounded-md p-2 text-2xl text-white transition hover:bg-amber-700"
              title="Shopping Cart"
            >
              🛒

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <span className="font-medium text-white">
              Hi, {currentUser.name}
            </span>

            {/* Logout */}
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