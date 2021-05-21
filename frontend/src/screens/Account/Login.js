import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import "../Navigation.css"
import "./Login.css"
import Loader from "../../components/Loader"
import Message from "../../components/Message"
import { login } from "../../actions/userAction"
const Login = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //   console.log("location.search", location.search)
  //   const redirect = location.search ? location.search.split("=")[1] : "/"
  //   console.log("redirect", redirect)
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push("/books")
    }
  }, [history, userInfo])
  const submitHandler = e => {
    e.preventDefault()
    console.log("Login.js")
    //Dispatch LOGIN
    dispatch(login(email, password))
  }
  return (
    <>
      <Navbar expand='lg' className='nav-colored' id='navbar-component'>
        <div className='container'>
          <Navbar.Brand id='branding-nonmain' className='text-center'>
            <Link
              to='/'
              className='router-links text-center align-self-center justify-content-center'
            >
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>
      {error ? <Message variant='danger'>{error}</Message> : null}
      {loading ? <Loader /> : null}
      <div className='container'>
        <div className='form-div-control'>
          <form className='form-control' onSubmit={submitHandler}>
            <input
              type='email'
              placeholder='Your email'
              className='input-control'
              id='first-box'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Your password'
              className='input-control'
              id='last-box'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button type='submit' className='btn-warning submit-btn'>
              Login
            </Button>

            <p className='text-muted text-center'>
              Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
