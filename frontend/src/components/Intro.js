import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Bibliophile} from '../images/Bibliophile.svg';
import '../screens/Frontpage.css';

export default function Intro() {
    return (
        <div className='container'>
           <div className="row front-page-style" id="home">
                <div className="col my-auto intro">
                    <h2>Who we are?</h2>
                    <p>A group of book and tech lovers who came with an idea to bridge the gap between people who love to share books and love.<br/>
                    Because why not? Sharing is after all caring.<br/>
                    So why wait when you can join us, and spread the love of books you have in your heart? <Link to='/signup' className='joining-link'>Sign Up today</Link>.
                    </p>
                </div>
                <div className="col img-fluid">
                    <Bibliophile />
                </div>
            </div> 
        </div>
    );
}
