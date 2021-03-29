import React from 'react';
// import {ReactComponent as Bibliophile} from '../images/Bibliophile.svg';
// import {ReactComponent as Book} from '../images/Books.svg';
// import {ReactComponent as Contact} from '../images/ContactUs.svg';
import Intro from './Intro';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './Frontpage.css';

function Frontpage() {
    return (
        <div>
            <Intro />
            <AboutUs />
            <ContactUs />
            <Footer />

        </div>
       
    )
}

export default Frontpage;
