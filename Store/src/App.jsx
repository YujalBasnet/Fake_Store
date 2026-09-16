import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homelayout from './Layout/Homelayout';
import Productpage from './Pages/Productpage';
import Productdetails from './Pages/Productdetails';

const App = () => {

  const router =createBrowserRouter([
    {
      path: "/",
      element:<Homelayout/>,
      children:[
      {
        path:"products",
        element:<Productpage/>
      },
      {
        path:"productsdetails/:id",
        element:<Productdetails/>
      }]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;