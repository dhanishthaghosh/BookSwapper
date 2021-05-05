import React, { useState}  from 'react';
import {ReactComponent as Log} from '../images/Login.svg';
import {Link as DomLink} from 'react-router-dom';
import {ReactComponent as Register} from '../images/Register.svg';
import './Login.css';

function Login(){

  const [name,setName] =  useState("");
  const[password,setPassword] = useState("");
  

function init(){
  const sign_up_btn = document.querySelector("#sign-up-btnn");
  const container = document.querySelector(".containr");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  
}
return(
    <div className="containr" >
      <div className="forms-containr">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Login</h2>
            
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
              <i className="fas fa-user"></i>
              <input type="text"className="form__input" placeholder="Name"  value={name}
              onChange={(e)=>setName(e.target.value) } required />
            </div> 
            <div className="form__input-error-message"></div>
            <div className="form__input-group">
              <i className="fas fa-lock"></i>
              <input type="password" className="form__input"placeholder="Password" value={password} 
              onChange={(e)=>setPassword(e.target.value) } required/>
            </div>
            <div className="form__input-error-message"></div>
            <input type="submit" value="Login" className="btnn solid" />
            
            
          </form>
          
        </div>
      </div>

      <div className="panels-containr">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Create a new account and keep exploring!
            </p>
            <button className="btnn transparent" id="sign-up-btnn" onClick={init}>
            <DomLink to='/register' >Sign up</DomLink> 
            </button>
          </div>
          <Log/>
        </div>
       
      </div>
    </div>

);



}

export default Login;