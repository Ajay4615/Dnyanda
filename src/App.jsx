import { useState } from 'react'
import Header from './Components/Header'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import Sector from './Components/Sector'

function App() {

  const router = createBrowserRouter([
    {
      path : "",
      element : <>
          <Header/>
          <Hero/>
          <Footer/>
      </>
    },
    {
      path : "/AboutUs",
      element : <>
          <Header/>
          <AboutUs/>
          <Footer/>
      </>
    },
    {
      path : "/Sector",
      element : <>
          <Header/>
          <Sector/>
          <Footer/>
      </>
    },
    {
      path : "/Centers",
      element : <>
          <Header/>
          <Footer/>
      </>
    },
    {
      path : "/Services",
      element : <>
          <Header/>
          <Hero/>
      </>
    },
    {
      path : "/Donate",
      element : <>
          <Header/>
          <Hero/>
      </>
    },
    {
      path : "/Contact",
      element : <>
          <Header/>
          <Hero/>
      </>
    }
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
