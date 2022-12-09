import React from "react";
import Header from "../components/TheDifferentiatorHeader";
import Footer from "components/footer";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic1.gif";
import value from "../public/img/Artboard 59@2x 1.png";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "../components/backToTop";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function ourPhilosophy() {
  return (
    <div className="relative w-full">
      <ThemeProvider theme={theme}>
        <Header />
        <div className="bg-[#00953B] lg:px-[144px] px-[5%]">
          <div className="max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                Keep Inspired and Innovative,
                <br />
                Here is when Old meets New.
              </h1>
            </div>

            <div className="self-center py-[10px] hidden lg:block">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={350}
                height={350}
              />
            </div>

            <div className="self-center lg:hidden py-[33px]">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="bg-white lg:px-[144px] px-[5%]">
          <div className="max-w-[1200px] m-0 m-auto py-[9px] lg:py-[17px]">
            <h1 className="lg:font-bold font-[600] lg:text-[18px] leading-[30px] text-[12px] text-[#00953B]">
              About /
              <span className="lg:font-semibold font-[700] text-black">
                {" "}
                Our Philosophy
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] lg:px-[144px] px-[5%]">
          <div className="max-w-[1200px] border-b-[6px] border-[#00953B] opacity-[100%] pt-[22px] lg:pt-[77px] lg:pb-[90px] pb-[36px] m-0 m-auto py-20">
            <h1 className="lg:font-extrabold lg:text-[52px] lg:leading-[62px] font-[800] leading-[35px] text-[26px] text-[#00953B]">
              <span className="font-light font-[300]">Our</span> Principles{" "}
              <br className="lg:hidden" />{" "}
              <span className="font-light font-[300]">and</span> Core Beliefs
            </h1>

            <div className="lg:pt-[58px] pt-[36px] flex lg:flex-row flex-col lg:justify-between">
              <div className="mx-auto lg:w-[40%] lg:mr-[80px]">
                <div className="lg:block hidden">
                  <Image
                    src={value}
                    alt="TheDifferentiator"
                    width={277}
                    height={230}
                  />
                </div>
                <div className="lg:hidden">
                  <Image
                    src={value}
                    alt="TheDifferentiator"
                    width={148}
                    height={122}
                  />
                </div>
              </div>
              <div className="lg:w-[60%]  text-left">
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[36px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  We believe financial markets are now evolving. With asset
                  pricing increasingly volatile, irrational and inefficient,
                  unpredictable behavioural factors (psychological, emotional)
                  are turning out to be one of the power drivers of asset
                  prices.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-5 mt-[30px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  In this context, stock prices can significantly and more
                  frequently deviate from their rational values in terms of
                  magnitude and duration. The mainstream investment strategies
                  like fundamental and quantitative approaches, which are
                  missing the predictability of behavioral factors, are no
                  longer sufficient to interpret the evolving market conditions
                  for consistent positive returns.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-5 mt-[30px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Thus, to remedy the missing elements in mainstream strategies,
                  we believe that a well-designed Technical Analysis model, the
                  study of mass psychology, can enhance the visibility and
                  predictability of price movement and capture the investment
                  opportunities in this irrational market.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-5 mt-[30px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  We believe that the markets move in trends and cycles with
                  human behaviour repeating over time, which can be tracked and
                  measured through technical analysis.
                </p>

                <p className="lg:mt-[56px] mt-[36px] border-[2px] italic lg:font-semibold lg:text-[21px] text-[15px] leading-[25px] font-[600] lg:leading-[32px] border-[#00953B] text-[#00953B] p-[15px] lg:p-[29px]">
                  We believe our proprietary technical model, combined with
                  technology and automation, can monitor different asset classes
                  more closely than humans on a timely basis without subjective
                  bias, leaving no stone unturned.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-[80px] pt-[50px] pb-[123px] lg:pb-[175px] bg-[#F0F0F0]">
          <a href="/investment-approach">
            <div className="w-[204px] h-[68px] lg:w-[278px] lg:h-[90px] bg-[#CC9C4A] flex justify-center float-right">
              <div className="self-center">
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  See Investment
                </p>
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  Approach
                </p>
              </div>
              <div className="ml-2 lg:ml-[40px] self-center">
                <Image src={Arrow} width={48} height={69} />
              </div>
            </div>
          </a>
        </div>
      </ThemeProvider>
      <div>
        <Footer />
      </div>
      <Button />
    </div>
  );
}

export default ourPhilosophy;
