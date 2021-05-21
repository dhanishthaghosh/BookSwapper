import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import "../Navigation.css"
import "./Login.css"
import Loader from "../../components/Loader"
import Message from "../../components/Message"
import { register } from "../../actions/userAction"

export default function Register({ history }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push("/books")
    }
  }, [history, userInfo])

  const submitHandler = e => {
    e.preventDefault()

    //Dispatch REGISTER
    if (password !== confirmPassword) {
      setMessage("Password do not Match")
    } else {
      dispatch(register(name, email, phoneNumber, address, password))
    }
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
      {message ? <Message variant='danger'>{message}</Message> : null}
      {loading ? <Loader /> : null}
      <div className='container'>
        <div className='form-div-control'>
          <form className='form-control' onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='Your full name'
              className='input-control'
              id='first-box'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Your email'
              className='input-control'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='number'
              placeholder='Your mobile number'
              className='input-control'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
            <input
              type='textarea'
              placeholder='Your residential address'
              className='input-control'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <input
              type='password'
              placeholder='Set a password'
              className='input-control'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirm password'
              className='input-control'
              id='last-box'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <Button type='submit' className='btn-warning submit-btn'>
              Sign Up
            </Button>

            <p className='text-muted text-center'>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
