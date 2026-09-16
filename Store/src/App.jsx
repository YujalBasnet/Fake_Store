import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homelayout from './Layout/Homelayout';
import Productpage from './Pages/Productpage';
import Productdetails from './Pages/Productdetails';
import ServicePage from './Pages/ServicePage';
import Contactpage from './Pages/Contactpage';
import Home from './components/global/Home';

const App = () => {

  const router =createBrowserRouter([
    {
      path: "/",
      element:<Homelayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
      {
        path:"products",
        element:<Productpage/>
      },
      {
        path:"productsdetails/:id",
        element:<Productdetails/>
      },
      {
        path:"service",
        element:<ServicePage/>
      },
      {
        path:"contact",
        element:<Contactpage/>
      }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;