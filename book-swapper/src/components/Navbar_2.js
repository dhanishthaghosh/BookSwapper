import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './Navbar_2.css';
// import { Button } from './Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';

function Navbar_2() {

    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 760) {
          setButton(false);
        } else {
          setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);


    const changeNavbarBackground = () => {
        if(window.scrollY >= 112) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changeNavbarBackground);


    return (
        <Navbar expand='lg' className={navbar ? 'sticky-top nav-colored' : 'sticky-top nav-transparent'} id="navbar-component">
            <div className="container navbar-styles">   
                <Navbar.Brand href='home' spy={true} smooth={true} offset={50} duration={500} delay={200} id='branding'>BookSwapper <i className="fas fa-exchange-alt"></i></Navbar.Brand> 
                    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className='nav-link-style' spy={true} smooth={true} offset={50} duration={500} delay={200}>Home</Nav.Link>

                        <Nav.Link href="#aboutus" className='nav-link-style' spy={true} smooth={true} offset={50} duration={500} delay={200}>About Us</Nav.Link>

                        <Nav.Link href="#contactus" className='nav-link-style' spy={true} smooth={true} offset={50} duration={500} delay={200}>Contact Us</Nav.Link>
                        
                        <Nav.Link href="#" className='nav-link-style'>Login</Nav.Link>

                        {button && <Button className='btn-effect sp-effect'>Sign Up</Button>}
                    </Nav>
                     
                </Navbar.Collapse>
            
            </div>
        </Navbar>
    );

}

// var navDisplay = document.getElementById('navbar-component');
//     window.onscroll = function () { 
//         "use strict";
//         console.log("ghosh " + navDisplay);
//         if (document.body.scrollTop >= 200 ) {
//             navDisplay.classList.add("nav-colored");
//             navDisplay.classList.remove("nav-transparent");
//         } 
//         else {
//             navDisplay.classList.add("nav-transparent");
//             navDisplay.classList.remove("nav-colored");
//         }
// };

export default Navbar_2;
