import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateWebToken from "../utils/generateToken.js"

// Authenticate the user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateWebToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid Email or Password")
  }
})

// get User Profile
const getUserProfile = asyncHandler(async (req, res) => {
  // res.send("Success")
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error("User Not found")
  }
})

//Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error(
      "User Already exists (main reasons is email already exits in db) "
    )
  }
  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
    address,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      token: generateWebToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invaid user data")
  }
})

// Update the User data
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    const email = req.body.email
    const changedEmailExistInDB = await User.findOne({ email })
    if (email !== changedEmailExistInDB && changedEmailExistInDB) {
      throw new Error("Email Already Exists")
    }
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = bcryptjs.hashSync(req.body.password, 10)
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      token: generateWebToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error("User Not found")
  }
})

export { authUser, getUserProfile, registerUser, updateUserProfile }
