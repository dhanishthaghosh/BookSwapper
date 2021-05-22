import React from "react"
import Intro from "../components/Intro"
import AboutUs from "../components/AboutUs"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "./Frontpage.css"

function Frontpage() {
  return (
    <div>
      <Navigation />
      <Intro />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Frontpage
