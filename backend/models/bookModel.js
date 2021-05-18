import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    owner: {
      // Which User is the owner of this book
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bookname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
