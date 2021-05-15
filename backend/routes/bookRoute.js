import express from "express";
const router = express.Router();
import { getBooks, getBookById, addBook } from "../controllers/bookController.js";

router.route("/").get(getBooks).post(addBook);
router.route("/:id").get(getBookById);

export default router;
