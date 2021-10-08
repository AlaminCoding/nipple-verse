import Banner from "../components/banner";
import Four from "../components/four";
import Mint from "../components/mint";
import Head from "next/head";
import Feature from "../components/feature";
export default function Home() {
  return (
    <div className="body-wrapper">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Banner />
      <Four />
      <Mint />
      <Feature />
    </div>
  );
}
