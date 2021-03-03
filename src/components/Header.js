import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import Link from './Link';
import './styles.css'
import logo from '../resources/icon.svg';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light">
            <Navbar.Brand className='title' href="#home">
                <Link href='/' className='item'>
                    <img alt="" src={logo} width="45" height="35" className="d-inline-block align-top" />
                    {' '}GORITHM
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="">
                        <Link href='/' className='item'>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="">
                        <Link href='/cp' className='item'>
                            Career Path
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="Tutorials" id="dropdown-menu-align-right">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Button variant="dark">
                        <Link href='/practice' className='item'>
                            <i className="fas fa-code"></i> Practice
                        </Link>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;