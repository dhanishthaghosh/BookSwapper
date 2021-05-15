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
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Intro from "./components/Intro"
import MainBookDisplay from "./screens/MainBookDisplay"
import AllBooksPage from "./screens/AllBooksPage"
import dotenv from "dotenv"
dotenv.config()

function App() {
  return (
    <div className='backgroundImage'>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path='/' component={Frontpage} />
          <Route exact path='/books' component={AllBooksPage} />
          <Route exact path='/books/:id' component={MainBookDisplay} />

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
