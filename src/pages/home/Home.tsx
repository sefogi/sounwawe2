import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage from "../../assets/landing-page-girl.png";
import "./home.css"



export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span:5, offset: 6 }} >
             <h1>Felling the music</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere repudiandae magni odit similique id molestias tempora voluptates aperiam iste repellat. Culpa consequatur beatae itaque reiciendis. Soluta officiis expedita ratione ducimus.</p>
          </Col>
          
          <Col  md={{ span: 6, offset: 2 }} >
            
          <img className='bg-image' src={bgimage} alt="Girl in a field"></img>
              
          
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Home
