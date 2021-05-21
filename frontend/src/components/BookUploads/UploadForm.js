import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import '../Navigation.css';
import './UploadForm.css';


function UploadForm() {
    return (
        <>
        <Navbar expand='lg' className="nav-colored" id="navbar-component">
            <div className="container">   
                <Navbar.Brand id='branding-nonmain' className='text-center'><Link to='/' className='router-links text-center align-self-center justify-content-center'>BookSwapper <i className="fas fa-exchange-alt"></i></Link></Navbar.Brand>
            </div>
        </Navbar>

        <div className="container">
            <div className='form-div-control'>
                    
                {/* <HeaderContainer>
                    <HeaderText>Hello There</HeaderText>
                    <HeaderText>There</HeaderText>
                    <SmallText>Please fill in the details so that your book is visible to our community people!</SmallText>
                </HeaderContainer> */}

                    <form className='form-control'>
                        <input type="text" placeholder="Book name" className='input-control' id='first-box' />
                        <input type="text" placeholder="Author name" className='input-control'/>
                        <input type="text" placeholder="Publisher" className='input-control'/>
                        <input type="text" placeholder="Condition" className='input-control'/>
                        <input type="textarea" placeholder="Book description" className='input-control'/>
                        <input type="file" placeholder="Book image" className="input-control" id='last-box'/>

                        <Button type='submit' className='btn-warning submit-btn'>Upload</Button>
                    </form>
                    
                    
            </div>       
        </div>
        </>
    )
}

export default UploadForm;
