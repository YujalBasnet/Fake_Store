import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/global/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;