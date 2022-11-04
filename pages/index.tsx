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

  return (
    <>
      <div className="w-full bg-[#021E7B] flex flex-col justify-center items-center pt-[5rem]">
        <Head>
          <title>Base Asset Management Limited </title>
          <meta name="description" content="Base Asset Management Limited" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="max-w-[1440px]">
          <Header />

          <div className="pb-80">
            <div className="w-full flex flex-col items-center">
              <Image src={invest} width={1224} height={747} />
            </div>

            <ThemeProvider theme={theme}>
              <div className="px-[146px]">
                <div className="lg:max-w-[70%] z-30 text-white font-black	text-[90px] leading-[100px]">
                  Leave No Stone
                  <br />
                  Unturned.
                </div>

                <div className="lg:max-w-[70%]  z-30 text-white font-normal pt-[50px]	text-[18px] leading-[28px]">
                  <p className="mb-3">
                    An investment strategy that is powered by automation and
                    programmed signals that identify hidden gems and capitalise
                    on trading opportunities.
                  </p>

                  <p>
                    Always on the lookout for new market trends and behaviours
                    so our investors can stay ahead of the curve.
                  </p>
                </div>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="max-w-[1440px]">
          <Banners />

          <Insight />
        </div>
      </div>

      <div className="bg-[#F5F5F5] py-[66px] lg:pt-10">
        <div className="hidden lg:block">
          <Button />
        </div>

        <Disclaimer setAgreedDisclaimer={setAgreedDisclaimer} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
