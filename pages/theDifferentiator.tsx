import React from "react";
import Header from "components/TheDifferentiatorHeader";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic1.gif";
import value from "../public/img/value.png";
import vision from "../public/img/vision.png";
import Button from "../components/backToTop";
import SeeInvestmentPhilosophy from "components/SeeInvestmentPhilosophy";
import Footer from "components/footer";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function TheDifferentiator() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#00953b] w-full flex flex-col  items-center">
        <div className="lg:max-w-[1440px] lg:px-[144px]">
          <Header />
          <div className="pt-[8rem] lg:pb-9">
            <div className="flex flex-col lg:flex-row items-center">
              <h1 className="font-light hidden lg:block	text-[48px] leading-[60px] text-white">
                Not to Go Back is to Advance;
                <br />
                Here’s when Old meets New.
              </h1>
              <div className="lg:ml-[200px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="font-light pb-[15px] lg:hidden text-[26px] leading-[36px] text-white">
                Not to Go Back is to Advance;
                <br />
                Here’s when Old meets New.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="pr-[930px] hidden lg:block max-w-[1440px] ">
          <div className="py-[17px] flex ">
            <h1 className="text-[#00953B] font-semibold	text-[18px] leading-[30px] mr-1">
              About /
              <span className="text-black ml-1 font-semibold	text-[18px] leading-[30px]">
                The Differentiator
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full px-[7%] lg:px-[0%] bg-[#F5F5F5] flex flex-col justify-center items-center ">
        <div className="lg:px-[144px] lg:max-w-[1440px] ">
          <div className="lg:pb-[100px] pb-[55px]"></div>
          <div className="border-t-[4px]  lg:border-t-[8px] border-b-[1px] border-[#00953b]">
            <div className="flex flex-col lg:flex-row lg:py-[35px]">
              <h1 className="lg:hidden font-light my-[25px] text-[44px] leading-[46px] text-[#00953B]">
                Our <span className="font-bold">Vision</span>
              </h1>
              <p className="font-light text-[16px] lg:hidden leading-[24px] lg:text-[28px] lg:leading-[38px] text-justify">
                We are passionate about discovering all possible investing
                opportunities that offer the potential risk-adjusted returns in
                an efficient and effective manner.
              </p>
              <div className="relative lg:w-[45%] p-7 lg:p-0">
                <Image src={vision} alt="TheDifferentiator" />
              </div>
              <h1 className="absolute font-light hidden lg:block text-[45px] leading-[56px] text-[#00953B]">
                Our
                <div className="font-extrabold	text-[45px] leading-[56px]">
                  Vision
                </div>
              </h1>
              <div className="lg:w-[55%]">
                <p className="font-light text-[16px] hidden lg:block leading-[24px] lg:text-[28px] lg:leading-[38px] text-justify">
                  We are passionate about discovering all possible investing
                  opportunities that offer the potential risk-adjusted returns
                  in an efficient and effective manner.
                </p>
                <div className="lg:flex lg:mt-14 lg:grid lg:grid-cols-2 lg:gap-14">
                  <p className="font-light text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px] text-left">
                    We are committed to using the
                    <span className="font-normal mx-2 text-[#00953B] italic text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px]">
                      latest technology
                    </span>
                    to identify market trends and behaviour and benefit from
                    these anomalies before they become the norm.
                  </p>
                  <p className="font-light text-[16px] leading-[21px] my-[25px] lg:mt-[0px] lg:text-[18px] lg:leading-[28px] text-left">
                    We strive to strike an utmost appropriate balance between
                    <span className="font-normal mx-2 text-[#00953B] italic text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px]">
                      human source intelligence and signal intelligence
                    </span>
                    without sacrificing potential upside.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-[4px] lg:mt-[94px] mt-[35px] lg:border-t-[8px] border-b-[1px] border-[#00953b]">
            <div className="flex flex-col lg:flex-row lg:py-[35px]">
              <h1 className="lg:hidden font-light my-[25px] text-[44px] leading-[46px] text-[#00953B]">
                Our <span className="font-bold">Value</span>
              </h1>
              <p className="font-light text-[16px] lg:hidden leading-[24px] lg:text-[28px] lg:leading-[38px] text-justify">
                We are passionate about discovering all possible investing
                opportunities that offer the potential risk-adjusted returns in
                an efficient and effective manner.
              </p>
              <div className="relative lg:pt-[110px] lg:w-[45%] p-7 lg:p-0">
                <Image src={value} alt="TheDifferentiator" />
              </div>
              <h1 className="absolute font-light hidden lg:block text-[45px] leading-[56px] text-[#00953B]">
                Our
                <div className="font-extrabold	text-[45px] leading-[56px]">
                  Value
                </div>
              </h1>
              <div className="lg:w-[55%]">
                <p className="font-light text-[16px] hidden lg:block leading-[24px] lg:text-[28px] lg:leading-[38px] text-justify">
                  We combine the traditional investing philosophy and in-house
                  developed technical models to find the best trading
                  opportunities.
                </p>
                <div className="lg:flex lg:mt-14 lg:grid lg:grid-cols-2 lg:gap-14">
                  <p className="font-light text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px] text-left">
                    We carry
                    <span className="font-normal mx-2 text-[#00953B] italic text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px]">
                      dynamic investing mindset and adopt structured risk
                      framework
                    </span>
                    to keep evaluating and improving the strategies with
                    behaviour learning technologies.
                  </p>
                  <p className="font-light text-[16px] leading-[21px] my-[25px] lg:mt-[0px] lg:text-[18px] lg:leading-[28px] text-left">
                    We are
                    <span className="font-normal mx-2 text-[#00953B] italic text-[16px] leading-[21px] lg:text-[18px] lg:leading-[28px]">
                      human source intelligence and signal intelligence
                    </span>
                    without sacrificing potential upside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] flow-root pb-[68px]">
        <div className="mt-[153px] hidden lg:block">
          <Button />
        </div>
        <div className="mt-[53px]">
          <SeeInvestmentPhilosophy />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
