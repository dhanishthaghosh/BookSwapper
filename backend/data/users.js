import bcryptjs from "bcryptjs"

// create an array of 3 users
const users = [
  {
    name: "User1",
    email: "user1@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: "1111111111",
    address: "H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019",
  },
  {
    name: "User2",
    email: "user2@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: "2222222222",
    address: "H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019",
  },
  {
    name: "User3",
    email: "user3@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: "3333333333",
    address: "H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019",
  },
]

export default users
