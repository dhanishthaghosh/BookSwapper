import React from 'react';
// import {ReactComponent as Bibliophile} from '../images/Bibliophile.svg';
// import {ReactComponent as Book} from '../images/Books.svg';
// import {ReactComponent as Contact} from '../images/ContactUs.svg';
import Intro from './Intro';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import './Frontpage.css';

function Frontpage() {
    return (
        <div className='container'>
            <Intro />
            <AboutUs />
            <ContactUs />
            {/* Introduction 
            <div className="row front-page-style">
                <div className="col my-auto">
                    <h2>LQu'est-ce que le Lorem Ipsum?</h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                    </p>
                </div>
                <div className="col img-fluid">
                    <Bibliophile />
                </div>
            </div>
            */ }
   
            {/* About Us
            <div className="row front-page-style">
                <div className="col img-fluid">
                        <Book />
                </div> 
                <div className="col my-auto">
                    <h2>LQu'est-ce que le Lorem Ipsum?</h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                    </p>
                </div>
            </div> */}

            {/* Contact Us 
            <div className="row front-page-style">
                <div className="col my-auto">
                    <h2>LQu'est-ce que le Lorem Ipsum?</h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                    </p>
                </div>
                <div className="col img-fluid">
                    <Contact />
                </div>
            </div> */}
        </div>
    )
}

export default Frontpage;
