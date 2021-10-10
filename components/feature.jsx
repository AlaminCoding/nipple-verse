import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import featureTopLogo from "../assets/img/feature.gif";
import blockImage from "../assets/img/blocks.png";
import { allNipples } from "../data/nippleData";
// import featureBG from "../assets/img/feature-bg.png";
const Feature = () => {
  return (
    <section className="feature" id="feature">
      {/* <div className="heading">
        <h2>Feature</h2>
      </div> */}
      <div className="main-feature">
        <div className="heading">
          <h2>Featured Nipples</h2>
        </div>
        <Row>
          <Col xs={5}>
            <div className="feature-img">
              <div className="fimage-box">
                <Image src={featureTopLogo} alt="" />
              </div>
            </div>
          </Col>
          <Col xs={7}>
            <div className="blocks">
              <div className="block block1"></div>
              <div className="block block2 common-block"></div>
              <div className="block block3 common-block"></div>
              <div className="block block4"></div>
              <div className="block block5"></div>
              <div className="block block6"></div>
              <div className="block block7 common-block"></div>
              <div className="block block8 common-block"></div>
              <div className="block block9 common-block"></div>
              <div className="block block10"></div>
            </div>
            <div className="block-img">
              <Image src={blockImage} alt="" />
            </div>
          </Col>
        </Row>
        <div className="main-feature-top">
          <div className="grid-container">
            {allNipples.map((element, index) => (
              <div
                className={
                  index === allNipples.length - 1
                    ? "nipple-box last-nipple-box"
                    : "nipple-box"
                }
                key={index}
              >
                <Image src={element} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="feature-bg-img">
          <img src="/feature-bg.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
