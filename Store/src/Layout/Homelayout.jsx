import React from 'react'
import Navbar from '../components/global/Navbar'
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
};

export default Homelayout;