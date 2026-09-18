import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homelayout from "./Layout/Homelayout";
import AdminLayout from "./Layout/AdminLayout";

import Productpage from "./Pages/Productpage";
import Productdetails from "./Pages/Productdetails";
import ServicePage from "./Pages/ServicePage";
import Contactpage from "./Pages/Contactpage";

import Home from "./components/global/Home";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";

import Admin from "./Pages/admin/Admin";
import AdminUser from "./Pages/admin/AdminUser";

const App = () => {
  const router = createBrowserRouter([
    // =========================
    // CUSTOMER ROUTES
    // =========================
    {
      path: "/",
      element: <Homelayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Productpage />,
        },
        {
          path: "productsdetails/:id",
          element: <Productdetails />,
        },
        {
          path: "service",
          element: <ServicePage />,
        },
        {
          path: "contact",
          element: <Contactpage />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Signup />,
        },
      ],
    },

    // =========================
    // ADMIN ROUTES
    // =========================
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Admin />,
        },
        {
          path: "users",
          element:<AdminUser/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;