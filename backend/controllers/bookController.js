import Book from "../models/bookModel.js"
import asyncHandler from "express-async-handler"

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({})
  res.status(200).json(books)
})

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate(
    "owner",
    "name email phoneNumber address"
  )
  if (book) {
    res.status(200).json(book)
  } else {
    res.status(404)
    throw new Error("Book Not Found in DB")
  }
})

const createBook = asyncHandler(async (req, res) => {
  const book = new Book({
    bookname: "Sample bookname",
    owner: req.user._id,
    image: "/images/sample.jpg",
    author: "Book Author",
    publisher: "Book publisher",
    condition: "Good",
    description: "Book description",
  })

  const createdBook = await book.save()
  res.status(201).json(createdBook)
})

const updatebook = asyncHandler(async (req, res) => {
  const { bookname, image, author, publisher, condition, description } =
    req.body

  const book = await Book.findById(req.params.id)

  if (book) {
    book.bookname = bookname
    book.author = author
    book.description = description
    book.image = image || book.image
    book.publisher = publisher
    book.condition = condition

    const updatedbook = await book.save()
    res.json(updatedbook)
  } else {
    res.status(404)
    throw new Error("book not found")
  }
})

export { getBooks, getBookById, createBook, updatebook }
