import Book from "../models/bookModel.js"
import asyncHandler from "express-async-handler"
import cloudinary from "../utils/cloudinary.js"

const getBooks = asyncHandler(async (req, res) => {
  const keyword = req.query.search ? {
    bookname: new RegExp(req.query.search, 'i')
  } : {};

  const books = await Book.find({ ...keyword })
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

  const uploadedImageResponse = await cloudinary.uploader.upload(image, {
    upload_preset: 'Book_Images'
  })

  if (!uploadedImageResponse) {
    res.status(404)
    throw new Error('Error occured while storing bookData in DB')
  }

  if (book) {
    book.bookname = bookname
    book.author = author
    book.description = description
    book.image = uploadedImageResponse.public_id
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
