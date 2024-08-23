import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './views/Home/Home'
import About from './views/About/About'
import Review from './views/Review/Review'
import Login from './views/Login/Login'

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/review",
      element:<Review></Review>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/events",
      element:<Events></Events>
    },
<<<<<<< HEAD
    
=======

>>>>>>> fe7aa17184052d779b5b18d385844b18f9ab6b5e
  ])
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
