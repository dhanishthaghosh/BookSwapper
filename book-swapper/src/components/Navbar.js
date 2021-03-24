import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-md">    
                <Link to="/" className="navbar-brand">
                    BookSwapper <i className="fas fa-exchange-alt"></i>
                </Link>
                <button className="navbar-toggler" onClick={handleClick}>
                    <i className={click ? 'far fa-times-circle' : 'fas fa-bars'}></i>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className={click ? 'nav-menu-active navbar-nav ml-auto' : 'nav-menu navbar-nav ml-auto'}>
                        <li className={click ? 'nav-item active' : 'nav-item'}>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}> Home
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active' : 'nav-item'}>
                            <Link to='/about' className='nav-link' onClick={closeMobileMenu}> About Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active' : 'nav-item'}>
                            <Link to='/contact' className='nav-link' onClick={closeMobileMenu}> Contact Us
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active' : 'nav-item'}>
                            <Link to='/login' className='nav-link' onClick={closeMobileMenu}> Login
                            </Link>
                        </li>
                        <li className={click ? 'nav-item active' : 'nav-item'}>
                            <Link to='/signup' className='nav-link' onClick={closeMobileMenu}> Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
