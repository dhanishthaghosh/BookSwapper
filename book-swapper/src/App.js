import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="backgroundImage">
      <Router>
        <Navbar />
        <Switch>
           <Route path='/' exact component={Frontpage}/>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
