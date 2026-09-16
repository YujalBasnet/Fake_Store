import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homelayout from './Layout/Homelayout';

const App = () => {

  const router =createBrowserRouter([
    {
      path: "/",
      element:<Homelayout/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;