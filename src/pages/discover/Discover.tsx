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
      <Container >
        <Row>
          <Col >
            <CardGroup className="bgicons">
              <Card bg={"Dark".toLowerCase()} >
                <Card.Img variant="top" src={icon1} style={{ width: "5rem" }} />
              </Card>
              <Card bg={"Dark".toLowerCase()} >
                <Card.Img variant="top" src={icon2} style={{ width: "5rem" }}/>
              </Card>
              <Card bg={"Dark".toLowerCase()} >
                <Card.Img variant="top" src={icon3} style={{ width: "5rem" }}/>
              </Card>
            </CardGroup>
          </Col>
          <Col className="cover">
            <Card.Img variant="top" src={covers} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
