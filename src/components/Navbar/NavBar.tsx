import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../../assets/logo.png"
import "./navbar.css"


export const NavBar = () => {
  return (
    <>
    <Navbar className="bg_body">
        <Container>
          <Navbar.Brand className='text-light' >
            <img alt=""src={logo} width="40"height="40"className="Logo"/>
              Sounwave
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="m-auto">
            <NavLink to={"/"} className='text-light'>Home</NavLink>
            <NavLink to={"/Discover"} className='text-light'>Discover</NavLink>
            <NavLink to={"/Join"} className='text-light'>Join</NavLink>
            
          </Nav>
          
        </Container>
      </Navbar>
    </>
    
  )
}
