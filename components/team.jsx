import team from "../assets/img/team.png";
import Image from "next/image";
const Team = () => {
  return (
    <section className="team">
      <h2>Team</h2>
      <Image src={team} alt="" />
    </section>
  );
};

export default Team;
