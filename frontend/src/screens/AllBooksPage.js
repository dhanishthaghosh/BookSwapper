import React, { useEffect } from "react"
import { Link, Route } from "react-router-dom"
import { Navbar, Card } from "react-bootstrap"
import NavDropdown from "react-bootstrap/NavDropdown"
import { LinkContainer } from "react-router-bootstrap"
import { Image } from "cloudinary-react"
import Search from "../components/Search"
import "./AllBooksPage.css"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { useDispatch, useSelector } from "react-redux"
// import the Action
import { listBooks } from "../actions/bookActions.js"
import { logout } from "../actions/userAction"


function AllBooksPage({ match, history }) {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const bookList = useSelector(state => state.bookList)
  const { loading, error, books } = bookList

  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    dispatch(listBooks(keyword))
  }, [dispatch, keyword])

  
  const logOutHandler = () => {
    dispatch(logout())
    history.push("/")
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

      <div className='container'>
        <Route render={({ history }) => <Search history={history} />}></Route>

        <div className='row'>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error.message}</Message>
          ) : (
            <>
              {books.map(book => (
                <div className='col-md-4' key={book._id}>
                  <Card className='intersection'>
                    {/* <Card.Img variant='top' src={book.image} /> */}
                    <Image
                      cloudName={`${process.env.REACT_APP_CLOUDINARY_NAME}`}
                      publicId={book.image}
                      width='100%'
                      height='350em'
                    />
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
