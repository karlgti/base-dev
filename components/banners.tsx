import React from "react";
import Image from "next/image";
import logo from "../public/img/banner/diff.png";
import invest from "../public/img/banner/invest.png";
import process from "../public/img/banner/process.png";
import rightArrow from "../public/img/arrow-25-xxl.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function banners() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <div className="relative lg:flex top-[-5rem] lg:top-[-15rem]">
      <div className="flex lg:block relative lg:w-[368px] lg:h-[480px] bg-[#00953B]">
        <div className="flex flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <p className="font-light	text-white	lg:text-[38px] text-[23px] leading-[27px] lg:leading-[45px]">
              The <br />
              Differentiator
            </p>
          </ThemeProvider>
          <div className="lg:pt-[50px] pb-[15px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="lg:absolute lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
          <a href="/theDifferentiator">
            <Image src={logo} alt="Base Asset Management" />
          </a>
        </div>
      </div>

      <div className="flex lg:block relative lg:w-[368px] lg:mx-[24px] my-[7px] lg:my-[0px] lg:h-[480px] bg-[#CC9C4A]">
        <div className="flex flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <p className="font-light	text-white	lg:text-[38px] text-[27px] leading-[27px] lg:leading-[45px]">
              Investment <br />
              Philosophy
            </p>
          </ThemeProvider>
          <div className="lg:pt-[50px] pb-[15px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="lg:absolute lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
          <a href="/theDifferentiator">
            <Image src={invest} alt="Base Asset Management" />
          </a>
        </div>
      </div>

      <div className="flex lg:block relative lg:w-[368px] lg:h-[480px] bg-[#E04403]">
        <div className="flex flex-col lg:flex-row pt-[18px] lg:pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <p className="font-light	text-white	lg:text-[38px] text-[27px] leading-[27px] lg:leading-[45px]">
              Investment <br />
              Process
            </p>
          </ThemeProvider>
          <div className="lg:pt-[50px] pb-[15px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="lg:absolute lg:bottom-[19px] p-[10px] lg:p-[0px] lg:right-[19px]">
          <a href="/theDifferentiator">
            <Image src={process} alt="Base Asset Management" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default banners;
