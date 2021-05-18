import mongoose from 'mongoose'
import dotenv from 'dotenv'
// importing the data
import users from './data/users.js'
import books from './data/books.js'
// Importing the models
import Book from './models/bookModel.js'
import User from './models/userModel.js'

// importing the  connection to mongoose db 
import connectDB from './config/db.js'

dotenv.config()

// connecting to DB
connectDB();

const importData = async () =>{
    try{
        const createdUsers = await User.insertMany(users)  // this will be an array
        
        const user1 = createdUsers[0]._id;

        // Now connect the books and user(owner) 

        const sampleBooks = books.map(book =>{
            return{ ...book , owner: user1}
        })

        await Book.insertMany(sampleBooks)

        console.log("User and Books added successfully to the DB")
        process.exit()

    }catch(err){
        console.log('ERROR 💥 ',err)
        process.exit(1) // pass 1 so as to exit with failure
    }
}


const destroyData = async () =>{
    try{
        // Deleting the DB data
        await Book.deleteMany()
        await User.deleteMany()

        console.log("User and Books deleted successfully from the DB")
        process.exit()

    }catch(err){
        console.log('ERROR 💥 ',err)
        process.exit(1) // pass 1 so as to exit with failure
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}