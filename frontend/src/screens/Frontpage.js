import React from "react"
// import {ReactComponent as Bibliophile} from '../images/Bibliophile.svg';
// import {ReactComponent as Book} from '../images/Books.svg';
// import {ReactComponent as Contact} from '../images/ContactUs.svg';
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
