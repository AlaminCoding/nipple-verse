import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import mintImg from "../assets/img/min-img.png";
const Mint = () => {
  return (
    <section className="mint">
      <Row>
        <Col md={6}>
          <div className="mint-box">
            <h2 className="mint-heading">Mint</h2>
            <p>Enter the amount of nipples you would like to buy (5 max):</p>
            <div className="input-box">
              <div className="input-wrapper">
                <input type="text" />
              </div>
              <button>Mint</button>
              <h2 className="mint-total">
                Total: <span>12 ETH</span>
              </h2>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="mint-img-wrapper">
            <div className="mint-img">
              <Image src={mintImg} alt="mint-image" />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Mint;
