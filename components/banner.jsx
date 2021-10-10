import Image from "next/image";
import logo from "../assets/img/logo.png";
const Banner = () => {
  return (
    <section className="banner" id="banner">
      <h2>
        WELCOME <br /> <span>TO THE</span>
      </h2>
      <div className="banner-img">
        <Image src={logo} alt="site-logo" />
      </div>
      <p>
        <span>The world has chastised them from public view.</span> They belong
        to all of us yet we are ashamed of them because society taught us so.
        However their power is too hard to contain, they found refuge on the
        Ethereum blockchain and now they are ready to break free. With about
        8,000,000,000 people in the world and only 4444 unique entitties, only a
        few will be able to claim they were brave enough to #freethenipple and
        wear them as badges of honour.
      </p>
    </section>
  );
};

export default Banner;
