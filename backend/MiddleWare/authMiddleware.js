import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"

// this is Middleware to protect the Route
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      // setting the user params in req -->> req.user
      req.user = await User.findById(decoded.id).select("-password")
      next()
    } catch (error) {
      console.log("Error in authMiddleware.js in try catch block")
      res.status(401)
      throw new Error("Not Authorized, Token Failed")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not Authorised, NO Token")
  }
})

export default protect
