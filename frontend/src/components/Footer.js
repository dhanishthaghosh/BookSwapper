import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer-styles'>
            <div className='container'>
                <div className='row text-center footer-header'>
                <h3>Have a book to share and swap, join us now</h3>
                </div>

                <div className='row align-self-center justify-content-center text-center'>
                    <div className='col-12 col-md-4 contact-column'>
                        <p className="footer-sub-header">Contact Us</p>
                        <a href='tel:+91 8169996296' className='footer-contact'><i class="fas fa-phone"></i> +91-8169996296</a>
                        <a href="mailto:bookswapperquery@gmail.com" className='footer-contact'><i class="fas fa-envelope"></i> bookswapperquery@gmail.com</a>
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
                        <p className='footer-creator'>Dixit Mendon</p>
                        <p className='footer-creator'>Nishant Dongre</p>
                        <p className='footer-creator'>Vanshita Singh</p>
                    </div>
                </div>
                
                <div className='row justify-content-center copyright'>
                    <span>BookSwapper &copy; 2021</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
