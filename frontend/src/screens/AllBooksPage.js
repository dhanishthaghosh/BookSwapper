import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import SearchBar from "../components/SearchBar"
import { Image } from "cloudinary-react"
import BookImage1 from "../images/WarandPeace.jpg"
import BookImage2 from "../images/AnnaKarenina.jpg"
import BookImage3 from "../images/AMidsummerNightsDream.png"
import BookImage4 from "../images/TheGodfather.jpg"
import "./AllBooksPage.css"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useDispatch, useSelector } from "react-redux"
// import the Action
import { listBooks } from "../actions/bookActions.js"

function AllBooksPage() {
  const dispatch = useDispatch()

  const bookList = useSelector(state => state.bookList)
  const { loading, error, books } = bookList
  useEffect(() => {
    dispatch(listBooks())
  }, [dispatch])
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

      <div className='container'>
        <SearchBar />

        <div className='row row-intersection'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error.message}</Message>
          ) : (
            <>
              {books.map(book => (
                <div className='col-md-4' key={book._id}>
                  <Card>
                    {/* <Card.Img variant='top' src={book.image} /> */}
                    <Image cloudName={`${process.env.REACT_APP_CLOUDINARY_NAME}`} publicId={book.image} />
                    <Card.Body>
                      <Card.Link>
                        <Link to={`/books/${book._id}`}>
                          <Card.Title>{book.bookname}</Card.Title>
                        </Link>
                      </Card.Link>
                      <Card.Text>Publisher: {book.publisher}</Card.Text>
                      <Card.Text>Condition: {book.condition}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default AllBooksPage
