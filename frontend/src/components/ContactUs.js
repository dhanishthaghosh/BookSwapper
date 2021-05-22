import React from 'react';
import {ReactComponent as Contact} from '../images/ContactUs.svg';;
// import './ContactUs.css';

function ContactUs() {
    return (
        <div className="container">
           <div className="row front-page-style" id="contactus">
                <div className="col my-auto contact">
                    <h2>Have a query or suggestion?</h2>
                    <p>You can contact any of our creators by dropping an email<br/>
                    Dhanishtha Ghosh - dsghosh_b19@it.vjti.ac.in<br/>
                    Dixit Mendon - dnmendon_b18@el.vjti.ac.in<br/>
                    Nishant Dongre - nadongre_b19@el.vjti.ac.in<br/>
                    Vanshita Singh - vrsingh_b19@ce.vjti.ac.in<br/>
                    Or else, drop an email on our official email at bookswapperquery@gmail.com
                    </p>
                </div>
                <div className="col img-fluid">
                    <Contact />
                </div>
            </div> 
        </div>
    );
}

export default ContactUs;

