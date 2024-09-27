import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const App = () => {
  const router = createBrowserRouter([
   

    {
      path: "/",
      element:  <div className=" lg:flex xl:flex "> <Navbar/> <Sidebar/> <Home/></div>
    },

    {
      path: "/about",
      element:<div className="lg:flex xl:flex ">  <Navbar/> <Sidebar/> <About /> </div>
    },
    {
      path: "portfolio",
      element: <div className="lg:flex xl:flex ">  <Navbar/> <Sidebar/> <Portfolio /></div>
    },
    {
      path: "/contact",
      element: <div className="lg:flex xl:flex ">  <Navbar/>  <Sidebar/> <Contact />  </div> 
    }
      

    
  ])
return (

  <div>

    <RouterProvider router={router} />
  </div>
)
}

export default App