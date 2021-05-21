import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import "../Navigation.css"
import "./UploadForm.css"
import { useDispatch, useSelector } from "react-redux"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import { listBookDetails, updateBook } from "../../actions/bookActions"
import { BOOK_UPDATE_RESET } from "../../constants/bookConstants"

const UploadForm = ({ match, history }) => {
  const bookId = match.params.id

  const [bookname, setBookName] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [condition, setCondition] = useState("")
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()

  const bookDetails = useSelector(state => state.bookDetails)
  const { loading, error, book } = bookDetails

  const bookUpdate = useSelector(state => state.bookUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = bookUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BOOK_UPDATE_RESET })
      history.push("/books")
    } else {
      if (!book || book._id !== bookId) {
        dispatch(listBookDetails(bookId))
      } else {
        setBookName(book.name)
        setImage(book.image)
        setAuthor(book.author)
        setPublisher(book.publisher)
        setCondition(book.condition)
        setDescription(book.description)
      }
    }
  }, [dispatch, history, bookId, book, successUpdate])

  const submitHandler = e => {
    e.preventDefault()
    // UPDATE BOOK
    dispatch(
      updateBook({
        _id: bookId,
        bookname,
        image,
        author,
        publisher,
        condition,
        description,
      })
    )
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
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='container'>
          <div className='form-div-control'>
            <form className='form-control' onSubmit={submitHandler}>
              <input
                type='text'
                placeholder='Book name'
                className='input-control'
                id='first-box'
                value={bookname}
                onChange={e => setBookName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Author name'
                className='input-control'
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
              <input
                type='text'
                placeholder='Publisher'
                className='input-control'
                value={publisher}
                onChange={e => setPublisher(e.target.value)}
              />
              <input
                type='text'
                placeholder='Condition'
                className='input-control'
                value={condition}
                onChange={e => setCondition(e.target.value)}
              />
              <input
                type='textarea'
                placeholder='Book description'
                className='input-control'
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              {/* <input
                type='file'
                placeholder='Book image'
                className='input-control'
                id='last-box'
                value={image}
                onChange={e => setImage(e.target.value)}
              /> */}

              <Button type='submit' className='btn-warning submit-btn'>
                Upload
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default UploadForm
