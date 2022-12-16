import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "components/footer";
import Banners from "../components/banners";
import Button from "../components/backToTop";
import Insight from "../components/Insight";
import Disclaimer from "components/Disclaimer";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "components/Cookie/Popup";

const Home: NextPage = () => {
  const [agreedDisclaimer, setAgreedDisclaimer] = useState<boolean>(false);
  const [agreedCookies, setAgreedCookies] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const disclaimer = sessionStorage.getItem("disclaimer");
      if (disclaimer == "agreed") {
        setAgreedDisclaimer(true), setAgreedCookies(true);
      }
    }
  }, [agreedDisclaimer]);

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
      <Header bg={"#001B71 !important"} />

      <div className="mt-14">
        <video
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          className="block object-cover w-full"
        >
          <source src="homePage/BASE.mp4" type="video/mp4" />
        </video>
      </div>
      <ThemeProvider theme={theme}>
        <div className="bg-[#F5F5F5] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1100px] m-0 m-auto pt-[42px] lg:pt-[60px] flex justify-between">
            <div>
              <p className="lg:font-black font-[900] text-[50px] leading-[50px] lg:text-[80px] lg:leading-[90px] text-[#001B71]">
                Leave <br className="lg:hidden" /> No Stone
                <br />
                Unturned
              </p>
              <p className=" text-[#001B71] text-[15px] leading-[25px] lg:text-[16px] lg:leading-[28px] font-[400] mt-[30px]">
                An investment firm powered by automation{" "}
                <br className="lg:hidden" /> and programmed signals that{" "}
                <br className="hidden lg:block" /> identify hidden{" "}
                <br className="lg:hidden" /> gems and capitalise on trading
                opportunities.
              </p>
              <p className=" text-[#001B71] text-[15px] leading-[25px] lg:text-[16px] lg:leading-[28px] font-[400] mt-[30px]">
                Always on the lookout for new market trends{" "}
                <br className="lg:hidden" /> and behaviours
                <br className="hidden lg:block" /> so our investors can stay{" "}
                <br className="lg:hidden" /> ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>

      <div className="bg-[#F5F5F5] lg:px-[144px] px-[5%] pt-[60px] pb-[84px]">
        <div className="lg:max-w-[1100px] m-0 m-auto flex flex-col justify-between">
          <div>
            <Banners />
          </div>
          <div className="relative pt-[68px]">
            <Insight />
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5]">
        <Disclaimer setAgreedDisclaimer={setAgreedDisclaimer} />
      </div>

      <div className="bg-[#F5F5F5]">
        {agreedCookies && <Cookies agreedDisclaimer={agreedCookies} />}
      </div>

      <Footer />
      <Button />
    </div>
  );
};
export default Home;
