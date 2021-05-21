import React from "react"
import "./App.css"
import Navigation from "./components/Navigation"
import Frontpage from "./screens/Frontpage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom"
import MainBookDisplay from "./screens/MainBookDisplay"
import AllBooksPage from "./screens/AllBooksPage"
import Login from "./screens/Account/Login"
import Register from "./screens/Account/Register"
import UserBooksList from "./screens/UserBookList"
import UploadBook from "./screens/BookUploads/UploadBook"
function App() {
  return (
    <div className='backgroundImage'>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path='/' component={Frontpage} />
          <Route exact path='/books' component={AllBooksPage} />
          <Route exact path='/books/:id' component={MainBookDisplay} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/user/booklist' component={UserBooksList} />
          <Route exact path='/user/book/:id/edit' component={UploadBook} />
          {/* <Route exact path='/home' component={Frontpage} />
            <Route exact path='/intro' component={Intro} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/contactus' component={ContactUs} />
            <Route exact path='/bookDisplay' component={MainBookDisplay} />
            <Route exact path='/allBooks' component={AllBooksPage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
