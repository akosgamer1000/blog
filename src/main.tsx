import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bloglist from './companens/Bloglist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Bloglist />,
  },
  
]);


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)