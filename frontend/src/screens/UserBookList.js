import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Table, Button, Row, Col, Container, Navbar, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { createBook } from "../actions/bookActions"
import { BOOK_CREATE_RESET } from "../constants/bookConstants"
import { logout } from "../actions/userAction"
import "./Navigation.css"

const UserBookList = ({ history, match }) => {
  const dispatch = useDispatch()

  const bookCreate = useSelector(state => state.bookCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    book: createdBook,
  } = bookCreate

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: BOOK_CREATE_RESET })

    if (!userInfo) {
      history.push("/login")
    }

    if (successCreate) {
      history.push(`/user/book/${createdBook._id}/edit`)
    }
  }, [dispatch, history, userInfo, successCreate, createdBook])

  const createBookHandler = () => {
    // CREATE BOOK
    dispatch(createBook())
  }

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
              className='router-links text-center align-self-center justify-content-center'>
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
            {/* {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/user/booklist'>
                  <NavDropdown.Item>Your Books</NavDropdown.Item>
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


      <Container style={{ height: "100vh" }}>
        <Row className='align-items-center'>
          <Col>
            <h2>My Books</h2>
          </Col>
          <Col className='text-right'>
            <Button className='my-3' onClick={createBookHandler}>
              <i className='fas fa-plus'></i> Upload Book
            </Button>
          </Col>
        </Row>
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </>
  )
}

export default UserBookList
