import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="container navbar-styles">
            <nav className="navbar navbar-expand-md my-auto">    
                <Link to="/" className="navbar-brand branding">
                    BookSwapper <i className="fas fa-exchange-alt"></i>
                </Link>
                <button className="navbar-toggler" onClick={handleClick}>
                    <i className={click ? 'far fa-times-circle' : 'fas fa-bars'}></i>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className={click ? 'nav-menu-active navbar-nav ml-auto' : 'nav-menu navbar-nav ml-auto'}>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='/' className='nav-link nav-link-style' onClick={closeMobileMenu}> Home
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='/about' className='nav-link nav-link-style' onClick={closeMobileMenu}> About Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='/contact' className='nav-link nav-link-style' onClick={closeMobileMenu}> Contact Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='/login' className='nav-link nav-link-style' onClick={closeMobileMenu}> Login
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active nav-item-style' : 'nav-item nav-item-style'}>
                            <Link to='/signup' className='nav-link nav-link-style' onClick={closeMobileMenu}> Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
