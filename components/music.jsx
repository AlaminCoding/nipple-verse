import MusicImage from "../assets/img/nipple-music.png";
import Image from "next/image";
const Music = () => {
  return (
    <section className="music">
      <Image src={MusicImage} alt="" />
    </section>
  );
};

export default Music;
