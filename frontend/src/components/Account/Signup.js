import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../Navigation.css';
import './Login.css';

export default function Signup() {
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
                    <input type='text' placeholder='Your full name' className='input-control' id='first-box' />
                    <input type='text' placeholder='Your email' className='input-control' />
                    <input type='tel' placeholder='Your mobile number' className='input-control' />
                    <input type='textarea' placeholder='Your residential address' className='input-control' />
                    <input type='password' placeholder='Set a password' className='input-control'/>
                    <input type='password' placeholder='Confirm password' className='input-control' id='last-box'/>

                    <Button type='submit' className='btn-warning submit-btn'>Sign Up</Button>

                    <p className='text-muted text-center'>Already have an account? <Link to='/login'>Login</Link></p>
                    
                </form>
            </div>
        </div>
        </>
    )
}
