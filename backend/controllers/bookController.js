import Book from "../models/bookModel.js"
import asyncHandler from "express-async-handler"

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({})
  res.status(200).json(books)
})

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id).populate(
    "owner",
    "name email phoneNumber"
  )
  if (book) {
    res.status(200).json(book)
  } else {
    res.status(404)
    throw new Error("Book Not Found in DB")
  }
})

export { getBooks, getBookById }
