import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/MainHeader";
import Footer from "components/footer";
import Banners from "../components/banners";
import Button from "../components/backToTop";
import Insight from "../components/Insight";
import Disclaimer from "components/Disclaimer";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import invest from "../public/homePage/base_videogit_blue.gif";

const Home: NextPage = () => {
  const [agreedDisclaimer, setAgreedDisclaimer] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const disclaimer = sessionStorage.getItem("disclaimer");
      if (disclaimer == "agreed") setAgreedDisclaimer(true);
    }
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  <Head>
    <title>Base Asset Management Limited </title>
    <meta name="description" content="Base Asset Management Limited" />
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
  </Head>;
  return (
    <div className="relative w-full">
      <ThemeProvider theme={theme}>
        <Header />

        <div className="bg-[#021E7B] lg:px-[144px] px-[5%] pb-[100px] lg:pb-[330px]">
          <div className="lg:max-w-[1100px] m-0 m-auto pt-[110px] flex justify-between">
            <div>
              <div className="lg:w-full lg:mx-auto self-center items-center flex justify-center">
                <Image src={invest} width={1224} height={747} />
              </div>
              <p className="lg:font-black lg:block hidden font-[900] text-[50px] lg:text-[90px] leading-[50px] lg:leading-[100px] text-white">
                Leave No Stone
                <br />
                Unturned
              </p>
              <p className="lg:font-black lg:hidden font-[900] text-[50px] lg:text-[90px] leading-[50px] lg:leading-[100px] text-white">
                Leave <br /> No Stone
                <br />
                Unturned
              </p>
              <p className="lg:text-[16px] hidden lg:block lg:leading-[28px] text-white lg:font-normal text-[15px] leading-[25px] font-[400] mt-[20px]">
                An investment firm powered by automation and programmed signals
                that <br /> identify hidden gems and capitalise on trading
                opportunities.
              </p>
              <p className="lg:text-[16px] hidden lg:block lg:leading-[28px] text-white lg:font-normal text-[15px] leading-[25px] font-[400] mt-[20px]">
                Always on the lookout for new market trends and behaviours{" "}
                <br /> so our investors can stay ahead of the curve.
              </p>

              <p className="lg:text-[16px] lg:hidden lg:leading-[28px] text-white lg:font-normal text-[15px] leading-[25px] font-[400] mt-[25px]">
                An investment firm powered by automation <br /> and programmed
                signals that identify hidden <br /> gems and capitalise on
                trading opportunities.
              </p>
              <p className="lg:text-[16px] lg:hidden lg:leading-[28px] text-white lg:font-normal text-[15px] leading-[25px] font-[400] mt-[25px]">
                Always on the lookout for new market trends
                <br /> and behaviours so our investors can stay <br /> ahead of
                the curve.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1100px] m-0 m-auto flex flex-col justify-between">
            <div>
              <Banners />
            </div>
            <div className="relative lg:top-[-116px]  pb-[65px] lg:pb-[30px]">
              <Insight />
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5]">
          <Disclaimer setAgreedDisclaimer={setAgreedDisclaimer} />
        </div>
        <Footer />
      </ThemeProvider>
      <Button />
    </div>
  );
};
export default Home;
