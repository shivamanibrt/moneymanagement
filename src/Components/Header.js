import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="md">
            <Container>
                <Navbar.Brand href="/" className='text-warning'>Expense Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="login">
                            <i className='fa-solid fa-right-to-bracket fs-5' title='Login'></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="signup">
                            <i className='fa-solid fa-user-pen fs-5' title='User'></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="logout">
                            <i className='fa-solid fa-right-from-bracket fs-5' title='Logout'></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;