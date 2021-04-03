import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './Navbar_1.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
        <nav className={navbar ? 'navbar navbar-expand-md sticky-top nav-colored' : 'navbar navbar-expand-md sticky-top nav-transparent'} id="navbar-component">
            <div className="container navbar-styles">   
                <Link to="home" className="navbar-brand branding" spy={true} smooth={true} offset={50} duration={500} delay={200}>
                    BookSwapper <i className="fas fa-exchange-alt"></i>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation" onClick={handleClick}>
                    <i className={click ? 'far fa-times-circle' : 'fas fa-bars'}></i>
                    {/* <span class="navbar-toggler-icon"></span> */}
                </button>

                <div className="collapse navbar-collapse">
                    <ul className={click ? 'nav-menu-active navbar-nav ml-auto' : 'nav-menu navbar-nav ml-auto'}>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='home' className='nav-link nav-link-style' spy={true} smooth={true} offset={50} duration={500} delay={300} onClick={closeMobileMenu}> Home
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='aboutus' className='nav-link nav-link-style' spy={true} smooth={true} offset={35} duration={500} delay={300} onClick={closeMobileMenu}> About Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='contactus' className='nav-link nav-link-style' spy={true} smooth={true} offset={35} duration={500} delay={300} onClick={closeMobileMenu}> Contact Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='login' className='nav-link nav-link-style' onClick={closeMobileMenu}> Login
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='signup' className='nav-link nav-link-style' onClick={closeMobileMenu}> Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} 
                </div>
            
            </div>
        </nav>
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

export default Navbar;
