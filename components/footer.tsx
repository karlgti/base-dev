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
      <footer className="text-center lg:text-left text-gray-600">
        <div className="flex justify-center items-center lg:justify-between border-separate border-spacing-4 border-b-4 border-[#001B71]">
          <div className="lg:mr-12 lg:pl-16 flex font-black text-[#021B71]">
            <span className="cursor-pointer	font-bold	text-[18px] leading-[26px] text-[#001B71]">
              Base Asset Management Limited
            </span>
          </div>
          <div className="flex justify-center lg:border-l-4 border-[#001B71]">
            <div className="lg:pl-6 border-[#001B71] lg:mr-6 text-[#001B71] p-5">
              <a
                href="mailto:info@base-am.com"
                className="cursor-pointer	font-medium	text-[13px] leading-[17px] text-[#001B71]"
              >
                info@base-am.com
              </a>
            </div>

            <a
              href="https://www.linkedin.com/company/base-am/"
              className="hidden lg:block pr-4 pt-4 text-gray-600"
            >
            <Image
              src={linkedin}
              width={31}
              height={31}
              className="cursor-pointer"
              alt="Base Asset Management"
            />
            </a>
            <a
              href="https://twitter.com/BASE_AssetMgmt"
              className="hidden lg:block pr-4 pt-4 text-gray-600"
            >
              <Image
                src={twitter}
                width={28}
                height={28}
                className="cursor-pointer"
                alt="Base Asset Management"
              />
            </a>
          </div>
        </div>
        <div className="lg:mx-6 lg:mr-12 lg:py-10 text-center md:text-left">
          <div className="lg:mr-6 lg:grid lg:grid-1 lg:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            <div>
              <h6
                className="
              pl-[2.5rem]
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
              cursor-default
              hidden lg:block
              cursor-pointer
              font-medium	
              text-[13px] 
              leading-[17px]
              text-[#001B71]
            "
              >
                Copyright 2022 © BASE. All rights reserved.
              </h6>
            </div>

            <div className="flex justify-end ">
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
