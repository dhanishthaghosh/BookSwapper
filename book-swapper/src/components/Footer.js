import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer-styles'>
            <div className='container'>
                <div className='row text-center footer-header'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.</p>
                </div>

                <div className='row align-self-center justify-content-center text-center'>
                    <div className='col-12 col-md-4'>
                        <p className="footer-sub-header">Contact Us</p>
                        <p className='footer-contact'><i class="fas fa-phone"></i> +91-8169996761</p>
                        <p className='footer-contact'><i class="fas fa-envelope"></i> bookswapperquery@gmail.com </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <p className="footer-sub-header">Navigate to</p>
                        <ul className='navbar-nav footer-nav'>
                            <li className='nav-item footer-item-links'>
                                <Link to='home' className='nav-link footer-links' spy={true} smooth={true} offset={50} duration={500} delay={300}>Home</Link>
                            </li>
                            <li className='nav-item footer-item-links'>
                                <Link to='aboutus' className='nav-link footer-links' spy={true} smooth={true} offset={50} duration={500} delay={300}>About Us</Link>
                            </li>
                            <li className='nav-item footer-item-links'>
                                <Link to='contactus' className='nav-link footer-links' spy={true} smooth={true} offset={50} duration={500} delay={300}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4'>
                        <p className="footer-sub-header">The Creators</p>
                        <p className='footer-creator'>Dhanishtha Ghosh</p>
                        <p className='footer-creator'>Nishant Dongre</p>
                        <p className='footer-creator'>XYZ</p>
                        <p className='footer-creator'>Vanshita Singh</p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
