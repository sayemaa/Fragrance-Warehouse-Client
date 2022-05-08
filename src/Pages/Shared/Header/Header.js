import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../../images/logo/logo.png'

import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link as={CustomLink} to="home">Home</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={CustomLink} to="manage">Manage Inventory</Nav.Link>
                                    <Nav.Link as={CustomLink} to="additem">Add Item</Nav.Link>
                                </>
                            }
                            <Nav.Link as={CustomLink} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <button className='signout-btn mx-auto' onClick={handleSignOut}>Sign Out <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon></button>
                                    :
                                    <Nav.Link className="text-center" as={CustomLink} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;