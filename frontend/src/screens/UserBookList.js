import React, { useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Row, Col, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { createBook } from "../actions/bookActions"
import { BOOK_CREATE_RESET } from "../constants/bookConstants"

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
    // CREATE PRODUCT
    dispatch(createBook())
  }
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row className='align-items-center'>
          <Col>
            <h1>Your Books</h1>
          </Col>
          <Col className='text-right'>
            <Button className='my-3' onClick={createBookHandler}>
              <i className='fas fa-plus'></i> Create Book
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
