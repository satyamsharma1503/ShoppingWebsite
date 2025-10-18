import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Marquees from './Marquee/Marquees';
import { Divider } from '@react-md/divider';

function Layout() {
  return (
    <div>
      <Marquees/>
      <Navbar />
      <Divider className="w-full" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout