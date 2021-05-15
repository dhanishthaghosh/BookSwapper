import Book from "../models/bookModel.js"
import asyncHandler from "express-async-handler"
import cloudinary from "../utils/cloudinary.js"

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

const addBook = asyncHandler(async (req, res) => {
  const bookData = req.body
  const uploadedResponse = await cloudinary.uploader.upload(bookData.image, {
    upload_preset: 'Book_Images'
  })
  console.log(uploadedResponse);
  if (uploadedResponse) {
    bookData.image = uploadedResponse.public_id
    const data = { ...bookData, owner: req.user._id }
    const result = await Book.create(data)
    if (result) {
      return res.status(200).json(result)
    }
    res.status(404);
    throw new Error('Error occured while storing bookData in DB')
  }
  else {
    res.status(404)
    throw new Error('Unable to upload image to cloudinary')
  }
})

export { getBooks, getBookById, addBook }
