import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home';
import Layout from './Layout';
import BedSheet from './component/BedSheets/BedSheet';
import Handbags from './component/Handbags/Handbags';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bedsheet" element={<BedSheet/>} />
        <Route path="/handbags" element={<Handbags />} />
      </Route>
    )
  );
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App