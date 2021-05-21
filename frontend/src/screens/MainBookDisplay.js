import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import "./Navigation.css"
import "./MainBookDisplay.css"

import { useDispatch, useSelector } from "react-redux"
import { listBookDetails } from "../actions/bookActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Map from "../components/Map/Map"

const MainBookDisplay = ({ match }) => {
  const dispatch = useDispatch()
  const bookDetails = useSelector(state => state.bookDetails)
  const { loading, error, book } = bookDetails

  useEffect(() => {
    dispatch(listBookDetails(match.params.id))
  }, [dispatch, match])

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
              className='router-links text-center align-self-center justify-content-center'
            >
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>

      <div className='container' id='bookDisplay'>
        <div className='row'>
          <div className='col-lg-7 img-fluid map-location'>
            <img
              src={book.image}
              className='map-image'
              alt='Map of Mumbai'
              style={{ height: "50%" }}
            />
          </div>

          <div className='col-lg-5'>
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
              <b>Contact No: </b>
              {book.owner.phoneNumber ? book.owner.phoneNumber : ""}
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
