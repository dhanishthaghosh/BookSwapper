import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import SearchBar from './SearchBar';
import BookImage1 from '../images/WarandPeace.jpg';
import BookImage2 from '../images/AnnaKarenina.jpg';
import BookImage3 from '../images/AMidsummerNightsDream.png';
import BookImage4 from '../images/TheGodfather.jpg';
import './AllBooksPage.css';

function AllBooksPage() {
    return (
        <>
           <Navbar expand='lg' className="nav-colored" id="navbar-component">
                <div className="container">   
                    <Navbar.Brand id='branding-nonmain' className='text-center'><Link to='/home' className='router-links text-center align-self-center justify-content-center'>BookSwapper <i className="fas fa-exchange-alt"></i></Link></Navbar.Brand>
                </div>
            </Navbar> 

            <div className='container'>
                <SearchBar />

                <div className='row row-intersection'>
                    <div className='col-md-4'>
                        <Card>
                            <Card.Img variant='top' src={BookImage1} />
                            <Card.Body>
                                <Card.Title>
                                    War and Peace
                                </Card.Title>
                                <Card.Subtitle>
                                    Leo Tolstoy
                                </Card.Subtitle>
                                <Card.Link>
                                    <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card>
                            <Card.Img variant='top' src={BookImage2} />
                            <Card.Body>
                                <Card.Title>
                                    Anna Karenina
                                </Card.Title>
                                <Card.Subtitle>
                                    Leo Tolstoy
                                </Card.Subtitle>
                                <Card.Link>
                                    <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-4'>
                        <Card>
                            <Card.Img variant='top' src={BookImage3} />
                            <Card.Body>
                                <Card.Title>
                                    A Midsummer Night's Dream
                                </Card.Title>
                                <Card.Subtitle>
                                    William Shakespeare
                                </Card.Subtitle>
                                <Card.Link>
                                    <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                
                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant='top' src={BookImage4} />
                        <Card.Body>
                            <Card.Title>
                                The Godfather
                            </Card.Title>
                            <Card.Subtitle>
                                Mario Puzo
                            </Card.Subtitle>
                            <Card.Link>
                                <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant='top' src={BookImage4} />
                        <Card.Body>
                            <Card.Title>
                                The Godfather
                            </Card.Title>
                            <Card.Subtitle>
                                Mario Puzo
                            </Card.Subtitle>
                            <Card.Link>
                                <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-4'>
                    <Card>
                        <Card.Img variant='top' src={BookImage4} />
                        <Card.Body>
                            <Card.Title>
                                The Godfather
                            </Card.Title>
                            <Card.Subtitle>
                                Mario Puzo
                            </Card.Subtitle>
                            <Card.Link>
                                <Link to='/bookDisplay'>User: Dhanishtha Ghosh</Link>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            
        </>
    )
}

export default AllBooksPage;
