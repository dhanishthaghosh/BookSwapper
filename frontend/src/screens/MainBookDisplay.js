import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import { Image } from "cloudinary-react"
// import {ReactComponent as Map} from '../images/MumbaiMap.jpg';
// var Map = require('../images/MumbaiMap.jpg');
import Map from "../images/MumbaiMap.jpg"
import "./Navigation.css"
import "./MainBookDisplay.css"

import { useDispatch, useSelector } from "react-redux"
import { listBookDetails } from "../actions/bookActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
const MainBookDisplay = ({ match }) => {
  const dispatch = useDispatch()
  const bookDetails = useSelector(state => state.bookDetails)
  const { loading, error, book } = bookDetails

  useEffect(() => {
    dispatch(listBookDetails(match.params.id))
  }, [dispatch, match])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <Navbar expand='lg' className='nav-colored' id='navbar-component'>
        <div className='container'>
          <Navbar.Brand id='branding-nonmain' className='text-center'>
            <Link
              to='/'
              className='router-links text-center align-self-center justify-content-center'
            >
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>

      <div className='container' id='bookDisplay'>
        <div className='row'>
          <div className='col-lg-7 img-fluid map-location'>
            {/* <img
              src={book.image}
              className='map-image'
              alt='Map of Mumbai'
              style={{ height: "50%" }}
            /> */}
            <Image cloudName={`${process.env.REACT_APP_CLOUDINARY_NAME}`} publicId={book.image} className='map-image' alt='Map of Mumbai' height="50%" />
          </div>

          <div className='col-lg-5'>
            <h3>Book Information</h3>
            <p>
              <b>Name:</b> {book.bookname}
            </p>
            <p>
              <b>Author:</b> {book.author}
            </p>
            <p>
              <b>Publisher:</b> {book.publisher}
            </p>
            <p>
              <b>Book Condition:</b> {book.condition}
            </p>
            <p>
              <b>Description:</b> {book.description}
            </p>

            <h3>User Information</h3>
            <p><b>Name:</b> {book.owner.name ? book.owner.name : ""}</p>
            <p>
              <b>Contact No:</b>
              {book.owner.phoneNumber ? book.owner.phoneNumber : ""}
            </p>
            <p>
              <b>Review:</b> The Tempest is a play by English playwright William
              Shakespeare, probably written in 1610–1611, and thought to be one
              of the last plays that Shakespeare wrote alone. After the first
              scene, which takes place on a ship at sea during a tempest, the
              rest of the story is set on a remote island, where the sorcerer
              Prospero, a complex and contradictory character, lives with his
              daughter Miranda, and his two servants—Caliban, a savage monster
              figure, and Ariel, an airy spirit. The play contains music and
              songs that evoke the spirit of enchantment on the island. It
              explores many themes, including magic, betrayal, revenge, and
              family. In Act IV, a wedding masque serves as a play-within-the
              play, and contributes spectacle, allegory, and elevated language.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <>
      <Navbar expand='lg' className='nav-colored' id='navbar-component'>
        <div className='container'>
          <Navbar.Brand id='branding-nonmain' className='text-center'>
            <Link
              to='/'
              className='router-links text-center align-self-center justify-content-center'
            >
              BookSwapper <i className='fas fa-exchange-alt'></i>
            </Link>
          </Navbar.Brand>
        </div>
      </Navbar>

      <div className='container' id='bookDisplay'>
        <div className='row'>
          <div className='col-lg-7 img-fluid map-location'>
            <img src={Map} className='map-image' alt='Map of Mumbai' />
          </div>

          <div className='col-lg-5'>
            <h3>Book Information</h3>
            <p>
              <b>Name:</b> {book.bookname}
            </p>
            <p>
              <b>Author:</b> {book.author}
            </p>
            <p>
              <b>Publisher:</b> {book.publisher}
            </p>
            <p>
              <b>Description:</b> {book.description}
            </p>

            <h3>User Information</h3>
            <p>
              <b>Name:</b> {book.owner.name ? book.owner.name : ""}
            </p>
            <p>
              <b>Contact No:</b>{" "}
              {book.owner.phoneNumber ? book.owner.phoneNumber : ""}
            </p>
            <p>
              <b>Review:</b> The Tempest is a play by English playwright William
              Shakespeare, probably written in 1610–1611, and thought to be one
              of the last plays that Shakespeare wrote alone. After the first
              scene, which takes place on a ship at sea during a tempest, the
              rest of the story is set on a remote island, where the sorcerer
              Prospero, a complex and contradictory character, lives with his
              daughter Miranda, and his two servants—Caliban, a savage monster
              figure, and Ariel, an airy spirit. The play contains music and
              songs that evoke the spirit of enchantment on the island. It
              explores many themes, including magic, betrayal, revenge, and
              family. In Act IV, a wedding masque serves as a play-within-the
              play, and contributes spectacle, allegory, and elevated language.
            </p>
          </div>
        </div>
      </div>
    </> */
}

// {loading ? (
//   <Loader />
// ) : error ? (
//   <Message variant='danger'>{error.message}</Message>
// ) : (
//   <div className='container' id='bookDisplay'>
//     <div className='row'>
//       <div className='col-lg-7 img-fluid map-location'>
//         <img src={Map} className='map-image' alt='Map of Mumbai' />
//       </div>

//       <div className='col-lg-5'>
//         <h3>Book Information</h3>
//         <p>
//           <b>Name:</b> {book.bookname}
//         </p>
//         <p>
//           <b>Author:</b> {book.author}
//         </p>
//         <p>
//           <b>Publisher:</b> {book.publisher}
//         </p>
//         <p>
//           <b>Description:</b> {book.description}
//         </p>

//         <h3>User Information</h3>
//         <p>{/* <b>Name:</b> {book.owner.name} */}</p>
//         <p>{/* <b>Contact No:</b> {book.owner.phoneNumber} */}</p>
//         <p>
//           <b>Review:</b> The Tempest is a play by English playwright
//           William Shakespeare, probably written in 1610–1611, and thought
//           to be one of the last plays that Shakespeare wrote alone. After
//           the first scene, which takes place on a ship at sea during a
//           tempest, the rest of the story is set on a remote island, where
//           the sorcerer Prospero, a complex and contradictory character,
//           lives with his daughter Miranda, and his two servants—Caliban, a
//           savage monster figure, and Ariel, an airy spirit. The play
//           contains music and songs that evoke the spirit of enchantment on
//           the island. It explores many themes, including magic, betrayal,
//           revenge, and family. In Act IV, a wedding masque serves as a
//           play-within-the play, and contributes spectacle, allegory, and
//           elevated language.
//         </p>
//       </div>
//     </div>
//   </div>
// )}
export default MainBookDisplay

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// // import {ReactComponent as Map} from '../images/MumbaiMap.jpg';
// // var Map = require('../images/MumbaiMap.jpg');
// import SearchBar from './SearchBar';
// import Map from '../images/MumbaiMap.jpg';
// import './Navigation.css';
// import './MainBookDisplay.css';

// export class MainBookDisplay extends Component {

//     constructor(props){
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event){
//         alert("This was what was written there: " + this.state.value);
//         event.preventDefault();
//     }

//     /* const not working here in class as opposed to functions. Eg. const [navbar, setnavbar] was not working, hence affixed a non-changing color.
//     */

//     render() {
//         return (
//             <>
//             <Navbar expand='lg' className="nav-colored" id="navbar-component">
//                 <div className="container">
//                     <Navbar.Brand id='branding-nonmain' className='text-center'><Link to='/home' className='router-links text-center align-self-center justify-content-center'>BookSwapper <i className="fas fa-exchange-alt"></i></Link></Navbar.Brand>
//                 </div>
//             </Navbar>

//             <div className='container' id='bookDisplay'>
//                 <div className='row'>
//                     <div className='col-lg-7 img-fluid map-location'>
//                         <img src={Map} className='map-image' alt='Map of Mumbai'/>
//                     </div>

//                     <div className='col-lg-5'>
//                         {/* <div className='input-wrapper'>
//                             <form onSubmit={this.handleSubmit}>
//                                 <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Type book name here' className='book-name-input'></input>
//                                 <i class="fas fa-search search-icon"></i>
//                                 <input type='submit' value='Search' className='submit-button'></input>
//                             </form>
//                         </div> */}
//                         <SearchBar />

//                         <h3>Book Information</h3>
//                         <p><b>Name:</b> The Tempest</p>
//                         <p><b>Author:</b> William Shakespeare</p>
//                         <p><b>Description:</b> The Tempest is a play by English playwright William Shakespeare, probably written in 1610–1611, and thought to be one of the last plays that Shakespeare wrote alone. After the first scene, which takes place on a ship at sea during a tempest, the rest of the story is set on a remote island, where the sorcerer Prospero, a complex and contradictory character, lives with his daughter Miranda, and his two servants—Caliban, a savage monster figure, and Ariel, an airy spirit. The play contains music and songs that evoke the spirit of enchantment on the island. It explores many themes, including magic, betrayal, revenge, and family. In Act IV, a wedding masque serves as a play-within-the play, and contributes spectacle, allegory, and elevated language.</p>

//                         <h3>User Information</h3>
//                         <p><b>Name:</b> Vanshita Singh</p>
//                         <p><b>Contact No:</b> 8169996290</p>
//                         <p><b>Review:</b> The Tempest is a play by English playwright William Shakespeare, probably written in 1610–1611, and thought to be one of the last plays that Shakespeare wrote alone. After the first scene, which takes place on a ship at sea during a tempest, the rest of the story is set on a remote island, where the sorcerer Prospero, a complex and contradictory character, lives with his daughter Miranda, and his two servants—Caliban, a savage monster figure, and Ariel, an airy spirit. The play contains music and songs that evoke the spirit of enchantment on the island. It explores many themes, including magic, betrayal, revenge, and family. In Act IV, a wedding masque serves as a play-within-the play, and contributes spectacle, allegory, and elevated language.</p>
//                     </div>
//                 </div>
//             </div>
//             </>
//         );
//     }
// }

// export default MainBookDisplay;
