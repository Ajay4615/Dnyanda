import { useState } from "react";
import Header from "./Components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Sector from "./Components/Sector";
import ContactusSection from "./Components/ContactusSection";
import DonatePage from "./Components/Donate";
import ServicesSection from "./Components/ServicesSection";
import CentersPage from "./Components/CentersPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Header />
          <Hero />
          <Footer />
        </>
      ),
    },
    {
      path: "/AboutUs",
      element: (
        <>
          <Header />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/Sector",
      element: (
        <>
          <Header />
          <Sector />
          <Footer />
        </>
      ),
    },
    {
      path: "/Centers",
      element: (
        <>
          <Header />
          <CentersPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/Services",
      element: (
        <>
          <Header />
          <ServicesSection />
          <Footer />
        </>
      ),
    },
    {
      path: "/Donate",
      element: (
        <>
          <Header />
          <DonatePage />
          <Footer />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Header />
          <ContactusSection />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
