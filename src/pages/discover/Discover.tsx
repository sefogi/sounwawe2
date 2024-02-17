import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import covers from "../../assets/covers.jpg";
import icon1 from "../../assets/microphone.svg";
import icon2 from "../../assets/albums.svg";
import icon3 from "../../assets/more.svg";
import "./discover.css";

export const Discover = () => {
  return (
    <>
      <Container className="bgicons">
        <Row>
          <Col>
            <div className="jumbotron jumbotron-fluid">
              <h1 className="display">Discover new music</h1>
              <div>
                <CardGroup>
                  <Card className="cardimg">
                    <Col>
                    
                      <Card bg={"Dark".toLowerCase()} style={{ width: '2rem' }}>
                        <Card.Img src={icon1} />
                      </Card>
                    </Col>
                    <Col>
                      <Card bg={"Dark".toLowerCase()}>
                        <Card.Img src={icon2} />
                      </Card>
                    </Col>
                    <Card bg={"Dark".toLowerCase()}>
                      <Card.Img src={icon3} />
                    </Card>
                  </Card>
                </CardGroup>
                <p className="lead">
                  by joining you can benefit by listening to the latest albums
                  release
                </p>
              </div>
            </div>
          </Col>
          <Col className="cover">
            <Card.Img variant="top" src={covers} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
