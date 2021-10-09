import { Col, Container, Row } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <h2>Roadmap</h2>
      <Container>
        <Row className="roadmap-row">
          <Col md={6} lg={5} xl={4} sm={12}>
            <div className="roadmap-box">
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={5} xl={4} sm={12}>
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
