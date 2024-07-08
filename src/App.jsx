import React from 'react'
import Listpage from './Pages/LIstpage/Listpage.jsx'
import Layout from './Pages/Layout/Layout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/Homepage/homePage.jsx';
import Singlepage from './Pages/singlepage/Singlepage.jsx';
import Profile from './Pages/profile/Profile.jsx';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
         {
          path:"/",
          element: <HomePage/>
         }, 
         {
          path:"/list",
          element: <Listpage/>
         },
         {
          path:"/:id",
          element: <Singlepage/>
         }, 
         {
          path:"/profile",
          element: <Profile/>
         }, 
        
      ]
    }
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

