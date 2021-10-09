import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import featureTopLogo from "../assets/img/feature-top-logo.png";
import { nippleFirst, nippleMiddle, nippleLast } from "../data/nippleData";
import featureBG from "../assets/img/feature-bg.png";
const Feature = () => {
  return (
    <section className="feature">
      <div className="heading">
        <h2>Feature</h2>
      </div>
      <div className="main-feature">
        <div className="main-feature-top">
          <Row>
            <Col md={5}>
              <div className="feature-img">
                <div className="fimage-box">
                  <Image src={featureTopLogo} alt="" />
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="blocks">
                <div className="block block1"></div>
                <div className="block block2 common-block"></div>
                <div className="block block3 common-block"></div>
                <div className="block block4"></div>
                <div className="block block5"></div>
                <div className="block block6"></div>
                <div className="block block7 common-block"></div>
              </div>
            </Col>
          </Row>
          <Row className="nipple-first-row">
            {nippleFirst.map((element, index) => (
              <Col md={2} key={index}>
                <div className="nipple-box">
                  <Image src={element} alt="" />
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            {nippleMiddle.map((element, index) => (
              <Col md={2} key={index}>
                <div className="nipple-box">
                  <Image src={element} alt="" />
                </div>
              </Col>
            ))}
          </Row>
          <Row className="nipple-last-row mt-3">
            {nippleLast.map((element, index) => (
              <Col md={2} key={index}>
                <div className="nipple-box">
                  <Image src={element} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="feature-bg-img">
          <Image src={featureBG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
