import plane from "../assets/img/plane.png";
import Image from "next/image";
const Plane = () => {
  return (
    <section className="plane">
      <Image src={plane} alt="" />
    </section>
  );
};

export default Plane;
