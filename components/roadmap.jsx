import { Col, Container, Row } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h2>Roadmap</h2>
      <Container>
        <Row className="roadmap-row">
          <Col md={4}>
            <div className="roadmap-box">
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="roadmap-box">
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Roadmap;
