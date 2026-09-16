import React from 'react'
import Navbar from '../components/global/Navbar'
import { Outlet } from 'react-router-dom';

import { Link } from "react-router-dom";
import Footer from '../components/global/Footer';

const Homelayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
    
    
    
  );
};

export default Homelayout;