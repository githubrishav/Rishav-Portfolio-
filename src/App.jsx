import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import AppLayout from './Components/AppLayout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]

    },
  ])
  return (

    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App