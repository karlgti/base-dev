import React from "react";
import Header from "components/TheDifferentiatorHeader";
import Image from "next/image";
import mypic from "../public/img/Differentiator_icon_1.gif";
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
      <div className="bg-[#00953b] w-full flex flex-col justify-center items-center">
        <div className="max-w-[1440px] justify-center items-center">
          <Header />
          <div className=" pt-[8rem] pb-9">
            <div className="flex items-center">
              <h1 className="font-light	text-[48px] leading-[60px] text-white">
                Not to Go Back is to Advance;
                <br />
                Here’s when Old meets New.
              </h1>
              <div className="ml-[200px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-[144px] py-[17px] flex">
        <Link className="text-slate-100	mr-1" href="/">
          {
            <h1 className="text-[#00953B] font-semibold	text-[18px] leading-[30px] mr-1">
              About /
            </h1>
          }
        </Link>
        {
          <h1 className="text-black font-semibold	text-[18px] leading-[30px]">
            The Differentiator
          </h1>
        }
      </div>
      <div className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center ">
        <div className="px-[144px] max-w-[1440px] ">
          <div className="pb-[100px]"></div>
          <div className="border-t-[8px] border-b-[1px] border-[#00953b]">
            <div className="flex py-[35px]">
              <div className="relative w-[45%]">
                <Image src={vision} alt="TheDifferentiator" />
              </div>
              <h1 className="absolute font-light	text-[45px] leading-[56px] text-[#00953B]">
                Our
                <div className="font-extrabold	text-[45px] leading-[56px]">
                  Vision
                </div>
              </h1>
              <div className="w-[55%]">
                <p className="font-light	text-[28px] leading-[38px] text-justify">
                  We are passionate about discovering all possible investing
                  opportunities that offer the potential risk-adjusted returns
                  in an efficient and effective manner.
                </p>
                <div className="flex mt-14 grid grid-cols-2 gap-14">
                  <p className="font-light	text-[18px] leading-[28px] text-left">
                    We are committed to using the
                    <span className="font-normal mx-2 text-[#00953B] italic text-[18px]">
                      latest technology
                    </span>
                    to identify market trends and behaviour and benefit from
                    these anomalies before they become the norm.
                  </p>
                  <p className="font-light	text-[18px] leading-[28px] text-left">
                    We strive to strike an utmost appropriate balance between
                    <span className="font-normal mx-2 text-[#00953B] italic text-[18px]">
                      human source intelligence and signal intelligence
                    </span>
                    without sacrificing potential upside.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-[8px] mt-[94px] border-b-[1px] border-[#00953b]">
            <div className="flex py-[35px]">
              <div className="pt-[110px] relative w-[45%]">
                <Image src={value} alt="TheDifferentiator" />
              </div>
              <h1 className="absolute font-light	text-[45px] leading-[56px] text-[#00953B]">
                Our
                <div className="font-extrabold	text-[45px] leading-[56px]">
                  Value
                </div>
              </h1>
              <div className="w-[55%]">
                <p className="font-light	text-[28px] leading-[38px] text-justify">
                  We are passionate about discovering all possible investing
                  opportunities that offer the potential risk-adjusted returns
                  in an efficient and effective manner.
                </p>
                <div className="flex mt-14 grid grid-cols-2 gap-14">
                  <p className="font-light	text-[18px] leading-[28px] text-left">
                    We are committed to using the
                    <span className="font-normal mx-2 text-[#00953B] italic text-[18px]">
                      latest technology
                    </span>
                    to identify market trends and behaviour and benefit from
                    these anomalies before they become the norm.
                  </p>
                  <p className="font-light	text-[18px] leading-[28px] text-left">
                    We strive to strike an utmost appropriate balance between
                    <span className="font-normal mx-2 text-[#00953B] italic text-[18px]">
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
        <div className="mt-[153px]">
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
