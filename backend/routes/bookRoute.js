import express from "express";
const router = express.Router();
import { getBooks, getBookById } from "../controllers/bookController.js";

router.route("/").get(getBooks);
router.route("/:id").get(getBookById);

export default router;
