import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import { AuthContext } from "../../context/AuthContext";

const AdminNavbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 font-medium transition ${
      isActive
        ? "text-amber-400 border-b-2 border-amber-400"
        : "text-white hover:text-amber-400"
    }`;

  return (
    <nav className="flex h-20 items-center justify-between bg-slate-900 px-6 shadow-md">
      
      {/* Logo */}
      <Link to="/admin" className="text-3xl font-bold text-white">
        FakeStore{" "}
        <span className="text-amber-400">Admin</span>
      </Link>

      {/* Admin Navigation */}
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to="/admin" end className={navLinkClass}>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/products" className={navLinkClass}>
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/orders" className={navLinkClass}>
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/users" className={navLinkClass}>
            Users
          </NavLink>
        </li>
      </ul>

      {/* User + Logout */}
      <div className="flex items-center gap-4">
        <span className="font-medium text-white">
          Hi, {currentUser?.name || "Admin"}
        </span>

        <Button
          text="Logout"
          color="red"
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default AdminNavbar;