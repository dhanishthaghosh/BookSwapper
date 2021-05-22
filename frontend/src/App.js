import React from "react"
import "./App.css"
import Frontpage from "./screens/Frontpage"
import {
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
        <Switch>
          <Route exact path='/' component={Frontpage} />
          <Route exact path='/books' component={AllBooksPage} />
          <Route exact path='/books/:id' component={MainBookDisplay} />
          <Route path='/search/:keyword' component={AllBooksPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/user/booklist' component={UserBooksList} />
          <Route exact path='/user/book/:id/edit' component={UploadBook} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
