import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Intro from './components/Intro';

function App() {
  return (
    <div className="backgroundImage">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Frontpage} />
          <Route exact path='/home' component={Frontpage} />
          <Route exact path='/intro' component={Intro} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route exact path='/contactus' component={ContactUs} />
        </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
