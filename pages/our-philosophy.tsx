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
        <div className="bg-[#00953B] px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                Old meets New.
              </h1>
            </div>

            <div className="self-center py-[10px]">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="bg-white px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto py-[17px]">
            <h1 className="font-bold text-[18px] leading-[30px] text-[#00953B]">
              About /
              <span className="font-semibold text-black"> Our Philosophy</span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] px-[144px]">
          <div className="max-w-[1200px] border-b-[6px] border-[#00953B] opacity-[100%] pt-[77px] pb-[90px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[52px] leading-[62px] text-[#00953B]">
              Our Principles <span className="font-light">and</span> Core
              Beliefs
            </h1>

            <div className="pt-[58px] flex justify-between">
              <div className="w-[40%] mr-[80px]">
                <Image
                  src={value}
                  alt="TheDifferentiator"
                  width={277}
                  height={230}
                />
              </div>
              <div className="w-[60%]  text-left">
                <p className="font-normal text-[16px] leading-[28px] text-[#000000] ">
                  With constantly evolving financial markets due to volatile
                  geopolitics, irrational valuations and unpredictable
                  behavioural factors, asset pricings are deviating from their
                  fundamental values in magnitude and duration. The mainstream
                  investment strategies, like fundamental and quantitative
                  approaches, which are missing the predictability of
                  behavioural factors, are no longer sufficient to interpret the
                  evolving market conditions for consistent positive returns.
                </p>

                <p className="font-normal text-[16px] leading-[28px] text-[#000000] mt-5">
                  We believe that a well-designed technical analysis model is
                  required to remedy the missing elements to enhance the
                  visibility and predictability of price movements and market
                  timing. Equally important is that embedding automation and
                  systematic methodology is vital in the investment process for
                  capturing opportunities uninterruptedly and timely in the
                  enormous degree of the investment universe and distorted
                  signals.
                </p>

                <p className="mt-[56px] border-[2px] italic font-semibold text-[21px] leading-[32px] border-[#00953B] text-[#00953B] p-[29px]">
                  Our proprietary technical model, combined with technology and
                  automation, can monitor different asset classes more closely
                  than humans on a timely basis without subjective bias, leaving
                  no stone unturned.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[80px] pb-[175px] bg-[#F0F0F0]">
          <a href="/investment-approach">
            <div className="w-[278px] h-[90px] bg-[#CC9C4A] flex justify-center float-right">
              <div className="self-center">
                <p className="font-bold text-[22px] leading-[28px] text-white">
                  See Investment
                </p>
                <p className="font-bold text-[22px] leading-[28px] text-white">
                  Approach
                </p>
              </div>
              <div className="ml-[40px] self-center">
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
