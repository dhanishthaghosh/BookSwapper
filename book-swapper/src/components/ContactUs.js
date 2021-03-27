import React from 'react';
import {ReactComponent as Contact} from '../images/ContactUs.svg';;
// import './ContactUs.css';

function ContactUs() {
    return (
        <>
           <div className="row front-page-style" id="contactus">
                <div className="col my-auto">
                    <h2>LQu'est-ce que le Lorem Ipsum?</h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                    </p>
                </div>
                <div className="col img-fluid">
                    <Contact />
                </div>
            </div> 
        </>
    );
}

export default ContactUs;

