import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../../assets/logo.png"
import Figure from 'react-bootstrap/Figure';

import "./navbar.css"


export const NavBar = () => {
  return (
    <>
    <Navbar className="bg_body">
        <Container>
          <Navbar.Brand href="/" className='text-light' >
            <img alt="logo"src={logo} width="40"height="40"className="Logo" />{' '}
              Sounwave
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="menu">
         
            <Nav.Link to={"/Discover"} className='text-light' href='/Discover'>Discover</Nav.Link>
            <Nav.Link to={"/Join"} className='text-light'href='/Join'>Join</Nav.Link>
            
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}
