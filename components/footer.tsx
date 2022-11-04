import React from "react";
import TermOfUse from "components/TermOfUse";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import linkedin from "../public/img/icons8-linkedin.svg";
import twitter from "../public/img/twitter-square-icon.svg";

export default function footer() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <footer className="">
        <div className="flex items-center justify-between border-b-[1px] border-[#001B71]">
          <div className="pl-[63px] flex font-black text-[#021B71]">
            <span className="cursor-pointer	font-bold	text-[18px] leading-[26px] text-[#001B71]">
              Base Asset Management Limited
            </span>
          </div>

          <div className="flex lg:border-l-[1px] py-[14px] px-[63px] border-[#001B71]">
            <div className="border-[#001B71] text-[#001B71] pr-[35px]">
              <a
                href="mailto:info@base-am.com"
                className="cursor-pointer	font-medium	text-[13px] text-[#001B71]"
              >
                info@base-am.com
              </a>
            </div>

            <div className="pr-[18px]">
              <a href="https://www.linkedin.com/company/base-am/">
                <Image
                  src={linkedin}
                  width={31}
                  height={30}
                  className="cursor-pointer"
                  alt="Base Asset Management"
                />
              </a>
            </div>

            <div>
              <a href="https://twitter.com/BASE_AssetMgmt">
                <Image
                  src={twitter}
                  width={31}
                  height={28}
                  className="cursor-pointer"
                  alt="Base Asset Management"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex py-[23px] justify-between px-[63px]">
            <div>
              <h6 className=" cursor-default hidden lg:block cursor-pointer font-medium	text-[13px] leading-[17px] text-[#001B71] ">
                Copyright 2022 © BASE. All rights reserved.
              </h6>
            </div>

            <div className="flex">
              <TermOfUse />

              <p className="border-[#001B71] font-medium	text-[13px] leading-[17px] text-[#001B71]  text-[#001B71] cursor-pointer pl-2">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
