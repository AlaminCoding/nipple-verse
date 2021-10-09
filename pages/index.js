import Banner from "../components/banner";
import Four from "../components/four";
import Mint from "../components/mint";
import Head from "next/head";
import Navbar from "../components/navbar";
import Feature from "../components/feature";
import Music from "../components/music";
import Roadmap from "../components/roadmap";
import Plane from "../components/plane";
import Team from "../components/team";
export default function Home() {
  return (
    <div className="body-wrapper">
      <Navbar />
      <Banner />
      <Four />
      <Mint />
      <Feature />
      <Music />
      <Roadmap />
      <Plane />
      <Team />
    </div>
  );
}
