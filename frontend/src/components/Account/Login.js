import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../Navigation.css';
import './Login.css';

export default function Login() {
    return (
        <>
        <Navbar expand='lg' className="nav-colored" id="navbar-component">
            <div className="container">   
                <Navbar.Brand id='branding-nonmain' className='text-center'><Link to='/' className='router-links text-center align-self-center justify-content-center'>BookSwapper <i className="fas fa-exchange-alt"></i></Link></Navbar.Brand>
            </div>
        </Navbar>

        <div className='container'>
            <div className='form-div-control'>
                <form className='form-control'>
                    <input type='text' placeholder='Your email' className='input-control' id='first-box' />
                    <input type='password' placeholder='Your password' className='input-control' id='last-box'/>

                    <Button type='submit' className='btn-warning submit-btn'>Login</Button>

                    <p className='text-muted text-center'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                    
                </form>
            </div>
        </div>
        </>
    )
}
