import express from "express"
const router = express.Router()
import {
  getBooks,
  getBookById,
  createBook,
  updatebook,
} from "../controllers/bookController.js"
import protect from "../MiddleWare/authMiddleware.js"

router.route("/").get(getBooks).post(protect, createBook)
router.route("/:id").get(getBookById).put(protect, updatebook)

export default router
