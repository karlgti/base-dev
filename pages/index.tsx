import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/MainHeader";
import Footer from "components/footer";
import Banners from "../components/banners";
import Button from "../components/backToTop";
import Insight from "../components/Insight";
import Disclaimer from "components/Disclaimer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [agreedDisclaimer, setAgreedDisclaimer] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const disclaimer = sessionStorage.getItem("disclaimer");
      if (disclaimer == "agreed") setAgreedDisclaimer(true);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Base Asset Management Limited </title>
        <meta name="description" content="Base Asset Management Limited" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Header />
      </div>

      <div className="bg-[#001e7d] pt-10 pb-32 lg:pb-80">
        <video
          autoPlay
          loop
          muted
          className="block bottom-[-10rem] object-cover w-full"
        >
          <source src="homePage/base_stone.mov" type="video/mp4" />
        </video>

        <div className="font-extrabold lg:max-w-[70%] px-[9%] z-30 text-5xl lg:text-8xl text-white rounded-xl bold">
          Leave No Stone
          <br />
          Unturned.
          <div className="font-thin pt-3 z-30 text-lg lg:text-2xl text-white rounded-xl bold">
            <p className="mb-3">
              An investment strategy that is powered by automation and
              programmed signals that identify hidden gems and capitalise on
              trading opportunities.
            </p>

            <p>
              {" "}
              Always on the lookout for new market trends and behaviours so our
              investors can stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] lg:pb-[12rem]">
        <Banners />
        <div className="px-[10%]">
          <Insight />
        </div>
        <div className="pt-10">
          <div className="hidden lg:block">
            <Button />
          </div>
          <Disclaimer setAgreedDisclaimer={setAgreedDisclaimer} />{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
