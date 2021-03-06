import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import NavDropdown from "react-bootstrap/NavDropdown"
import { LinkContainer } from "react-router-bootstrap"
import { Image } from "cloudinary-react"
import "./Navigation.css"
import "./MainBookDisplay.css"

import { useDispatch, useSelector } from "react-redux"
import { listBookDetails } from "../actions/bookActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Map from "../components/Map/Map"
import { logout } from "../actions/userAction"

const MainBookDisplay = ({ match, history }) => {
  const dispatch = useDispatch()
  const bookDetails = useSelector(state => state.bookDetails)
  const { loading, error, book } = bookDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    dispatch(listBookDetails(match.params.id))
  }, [dispatch, match])

  const logOutHandler = () => {
    dispatch(logout())
    history.push("/")
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Navbar expand='lg' className='nav-colored' id='navbar-component'>
        <div className='container'>
          <Navbar.Brand id='branding-nonmain' className='text-center'>
            <Link
              to='/'
              className='router-links text-center align-self-center justify-content-center'>
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
            {/* {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/user/booklist'>
                  <NavDropdown.Item></NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logOutHandler}>
                  Log Out
              </NavDropdown.Item>
              </NavDropdown>
            ) : null} */}
          </Navbar.Brand>

          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/user/booklist'>
                <NavDropdown.Item>My Books</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logOutHandler}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : null}
        </div>
      </Navbar>

      <div className='container' id='bookDisplay'>
        <div className='row'>
          <div className='col-lg-6 img-fluid image-styles'>
            <Image
              cloudName={`${process.env.REACT_APP_CLOUDINARY_NAME}`}
              publicId={book.image}
              className='book-image'
              alt='Map of Mumbai'
            />
          </div>

          <div className='col-lg-6 information'>
            <h3>Book Information</h3>
            <p>
              <b>Name:</b> {book.bookname}
            </p>
            <p>
              <b>Author:</b> {book.author}
            </p>
            <p>
              <b>Publisher:</b> {book.publisher}
            </p>
            <p>
              <b>Book Condition:</b> {book.condition}
            </p>
            <p>
              <b>Description:</b> {book.description}
            </p>

            <h3>User Information</h3>
            <p>
              <b>Name: </b> {book.owner.name ? book.owner.name : ""}
            </p>
            <p>
              <b>Email: </b>
              {book.owner.email ? book.owner.email : ""}
            </p>
            <p>
              <b>Owner Address: </b>
              {book.owner.address ? book.owner.address : ""}
            </p>
          </div>
        </div>
      </div>
      <Map adrs={book.owner.address} />
    </>
  )
}
export default MainBookDisplay
