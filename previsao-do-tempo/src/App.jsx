import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Index from './components/Index'
import Favoritos from './components/favoritos/Favoritos'
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <Index/>},
        {path: 'favoritos', element: <Favoritos/>}
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
