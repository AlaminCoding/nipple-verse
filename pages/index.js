import Banner from "../components/banner";
import Four from "../components/four";
import Mint from "../components/mint";
import Head from "next/head";
import Feature from "../components/feature";
export default function Home() {
  return (
    <div className="body-wrapper">
      <Banner />
      <Four />
      <Mint />
      <Feature />
    </div>
  );
}
