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
    <div className="relative justify-between flex top-[-15rem]">
      <div className="relative w-[368px] h-[480px] bg-[#00953B]">
        <div className="flex pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <div className="font-light	text-white	text-[38px] leading-[45px]">
              The <br />
              Differentiator
            </div>
          </ThemeProvider>
          <div className="pt-[50px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="absolute bottom-[19px] right-[19px]">
          <a href="/theDifferentiator">
            <Image src={logo} alt="Base Asset Management" />
          </a>
        </div>
      </div>

      <div className="relative  w-[368px] h-[480px] bg-[#CC9C4A]">
        <div className="flex pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <div className="font-light	text-white	text-[38px] leading-[45px]">
              Investment <br />
              Philosophy
            </div>
          </ThemeProvider>
          <div className="pt-[50px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="absolute bottom-[19px] right-[19px]">
          <a href="/theDifferentiator">
            <Image src={invest} alt="Base Asset Management" />
          </a>
        </div>
      </div>

      <div className="relative  w-[368px] h-[480px] bg-[#E04403]">
        <div className="flex pt-[37px] justify-between px-[25px]">
          <ThemeProvider theme={theme}>
            <div className="font-light	text-white	text-[38px] leading-[45px]">
              Investment <br />
              Process
            </div>
          </ThemeProvider>
          <div className="pt-[50px]">
            <Image src={rightArrow} width={34} height={34} />
          </div>
        </div>
        <div className="absolute bottom-[19px] right-[19px]">
          <a href="/theDifferentiator">
            <Image src={process} alt="Base Asset Management" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default banners;
