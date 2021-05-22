import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Link as DomLink } from "react-router-dom"
import "./Navigation.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userAction"
function Navigation() {
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const showButton = () => {
    if (window.innerWidth <= 760) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener("resize", showButton)
  const changeNavbarBackground = () => {
    if (window.scrollY >= 112) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNavbarBackground)

  const logOutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar
      expand='lg'
      className={
        navbar ? "sticky-top nav-colored" : "sticky-top nav-transparent"
      }
      id='navbar-component'
    >
      <div className='container navbar-styles'>
        <Navbar.Brand id='branding'>
          <Link
            to='/'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={200}
          >
            BookSwapper <i className='fas fa-exchange-alt'></i>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='nav-link-style'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={200}
                activeClass='active-nav-link-style'
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className='nav-link-style'>
              <Link
                to='aboutus'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={200}
                activeClass='active-nav-link-style'
              >
                About Us
              </Link>
            </Nav.Link>

            <Nav.Link className='nav-link-style'>
              <Link
                to='contactus'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={200}
                activeClass='active-nav-link-style'
              >
                Contact Us
              </Link>
            </Nav.Link>

            {userInfo ? (
              // <LinkContainer to='/user/booklist'>
              //   <NavDropdown.Item>Profile</NavDropdown.Item>
              // </LinkContainer>
              <Nav.Link className='nav-link-style'>
                <DomLink to='/books' className='dom-link-style'>Books</DomLink>
              </Nav.Link>
            ) : null}
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/user/booklist'>
                  <NavDropdown.Item>Your Books</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logOutHandler}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}

            {!userInfo && (
              <Nav.Link className='nav-link-style'>
                <DomLink to='/login' className='dom-link-style'>Login</DomLink>
              </Nav.Link>
            )}

            {!userInfo && button && (
              <Button className='btn-effect sp-effect'>
                <DomLink to='/register' className='btn-link-style'>Sign Up</DomLink>
              </Button>
            )}

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation;
