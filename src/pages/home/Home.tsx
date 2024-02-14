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
          <Col md={{ span: 4, offset: 1 }}>
              <img className='bg-image' src={bgimage} alt="Girl in a field"></img>
          </Col>
          <Col  md={{ span: 4, offset: 1 }} className='text-col'>
            
              <h1 className="display">Felling the music</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              
              
          
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Home
