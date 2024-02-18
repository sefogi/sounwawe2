import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage from "../../assets/landing-page-girl.png";
import Figure from 'react-bootstrap/Figure';
import "./home.css"



export const Home = () => {
  return (
    <>
      
     <Container>
        
        <Row >
          <Col md={{ span: 4, offset:2  }} >
          <img className='bg-image' src={bgimage} alt="Girl in a field" ></img>
          </Col>
          
          <Col>
           <div className="jumbotron">
             <h1 className="display-">Feel the music</h1>
                   <p className="lead">Stream over 20 thousand songs with one click </p>
                   <a className="btn btn-primary btn-lg" href="/Join" role="button">Join now</a>
           </div>
          </Col>
        </Row>
      </Container>
      <div id='circle'></div>
    </>
  )
}

export default Home
