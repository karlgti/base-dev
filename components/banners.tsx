import React from "react";
import Image from "next/image";
import logo from "../public/img/banner/diff.png";
import invest from "../public/img/banner/invest.png";
import process from "../public/img/banner/process.png";
import rightArrow from "../public/img/Arrow.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function banners() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <>
      <div className="relative lg:flex lg:justify-between">
        <a href="/our-philosophy">
          <div className="flex lg:block relative lg:w-[355px] lg:h-[480px] bg-[#00953B]">
            <div className="flex lg:w-[100%] w-[70%] flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
              <ThemeProvider theme={theme}>
                <p className="font-light lg:font-[300]	text-white	lg:text-[38px] text-[25px] leading-[27px] lg:leading-[45px]">
                  Our <br />
                  Philosophy
                </p>
              </ThemeProvider>
              <div className="lg:pt-[50px] pb-[15px]">
                <Image src={rightArrow} />
              </div>
            </div>
            <div className="lg:absolute  lg:w-[60%] w-[45%] lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
              <Image src={logo} alt="Base Asset Management" />
            </div>
          </div>
        </a>

        <a href="/investment-approach">
          <div className="flex lg:block relative lg:w-[355px] my-[7px] lg:my-[0px] lg:h-[480px] bg-[#CC9C4A]">
            <div className="flex lg:w-[100%] w-[70%] flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
              <ThemeProvider theme={theme}>
                <p className="font-light lg:font-[300]	text-white	lg:text-[38px] text-[25px] leading-[27px] lg:leading-[45px]">
                  Investment <br />
                  Approach
                </p>
              </ThemeProvider>
              <div className="lg:pt-[50px] pb-[15px]">
                <Image src={rightArrow} />
              </div>
            </div>
            <div className="lg:absolute  lg:w-[60%] w-[45%] lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
              <Image src={invest} alt="Base Asset Management" />
            </div>
          </div>
        </a>

        <a href="/the-solutions">
          <div className="flex lg:block relative lg:w-[355px] lg:h-[480px] bg-[#E04403]">
            <div className="flex  lg:w-[100%] w-[70%] flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
              <ThemeProvider theme={theme}>
                <p className="font-light lg:font-[300]	text-white	lg:text-[38px] text-[25px] leading-[27px] lg:leading-[45px]">
                  The <br />
                  Solutions
                </p>
              </ThemeProvider>
              <div className="lg:pt-[50px] pb-[15px]">
                <Image src={rightArrow} />
              </div>
            </div>
            <div className="lg:absolute lg:w-[60%] w-[45%] lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
              <Image src={process} alt="Base Asset Management" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default banners;
