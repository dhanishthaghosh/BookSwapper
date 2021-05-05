import React, { useState}  from 'react';
import {Link as DomLink} from 'react-router-dom';
import {ReactComponent as Reg} from '../images/Register.svg';
import './Login.css';




function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [cpassword, setCPassword] = useState("");

    function init(){
      const sign_in_btn = document.querySelector("#sign-in-btnn");
      const container = document.querySelector(".containr");
      
      sign_in_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });
    }
  
  
  return(
    <div className="containr">
      <div className="forms-containr">
        <div className="signin-signup">
          
          <form action="#" className="sign-in-form">
            <h2 className="title">Register</h2>
            
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
              <i className="fas fa-user"></i>
              <input type="text" className="form__input"placeholder="Name" />
            </div>
            <div className="form__input-error-message"></div>
            <div className="form__input-group">
              <i className="fas fa-envelope"></i>
              <input type="email"className="form__input" placeholder="xyz@gmail.com" />
            </div>
            <div className="form__input-error-message"></div>
            <div className="form__input-group">
              <i className="fas fa-lock"></i>
              <input type="password"className="form__input" placeholder="Password" />
            </div>
            <div className="form__input-error-message"></div>
            <div className="form__input-group">
              <i className="fas fa-lock"></i>
              <input type="password" className="form__input"placeholder="Confirm Password" />
            </div>
            <div className="form__input-error-message"></div>
            <div className="form__input-group">
              <i className="fas fa-phone"></i>
              <input type="text"className="form__input" placeholder="Phone Number" />
            </div>
            <div className="form__input-error-message"></div>
            <input type="submit" className="btnn" value="Sign up" />
            
          </form>
        </div>
      </div>

      <div className="panels-containr">
        
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Login to your account and continue searching for your favourite books!
            </p>
            <button className="btnn transparent" id="sign-in-btnn"   >
            <DomLink to='/login' onClick={init}>Sign in</DomLink>
            </button>
          </div>
          <Reg/>
        </div>
      </div>
    </div>
  );
}
      

export default Register;