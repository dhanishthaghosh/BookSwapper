import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Book} from '../images/Books.svg';
import './Frontpage.css';

function AboutUs() {
    return(
        <div className='container'>
            <div className="row front-page-style" id="aboutus">
                <div className="col img-fluid">
                    <Book />
                </div> 
                <div className="col my-auto about">
                    <h2>How we work?</h2>
                    <p>Rather simple actually.<br/>
                    You create an account, or else login in if you have already cleared that step<br/>
                    Search for a book you wish to have/read in our Books section<br/>
                    If you find the book of your choice, you can then see the details of the person willing to give their book by clicking the book title<br/>
                    You can then go forward and email that person regarding the book and how to swap it<br/>
                    So what are waiting for? Have some books you are willing to share? <Link to='/signup' className='joining-link'>Join us today</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;