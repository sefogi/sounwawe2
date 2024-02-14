import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.png"
import "./navbar.css"


export const NavBar = () => {
    
    return (
      <Navbar expand="lg" className="bg_body">
        <Container className="cont_navbar">
        <Navbar.Brand className='text-light' href="#home">
            <img className='logo' src={logo} alt='logo'/>
            <>Soundwawe</>
         </Navbar.Brand>
          <Nav className="m-auto">
         <Nav.Link className='text-light' href="#discover">Discover</Nav.Link>
    <Nav.Link className='text-light' href="#join">Join</Nav.Link>
  </Nav>

  </Container>
      </Navbar>
    );
}
