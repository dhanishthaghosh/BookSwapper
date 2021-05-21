import React, { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { FormContainer } from "../components/FormContainer"
import { register } from "../actions/userActions"

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState(null)

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  // I want to redirect if we are already loged in, I don't want to come to the login secreen
  // if we are already loged in.
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = e => {
    e.preventDefault()

    //Dispatch REGISTER
    if (password !== confirmPassword) {
      setMessage("Password do not Match")
    } else {
      dispatch(register(name, email, password, phoneNumber, address))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message ? <Message variant='danger'>{message}</Message> : null}
      {loading ? <Loader /> : null}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' varient='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
