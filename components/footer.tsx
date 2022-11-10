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
      <footer>
        <div className="lg:flex px-[7%] py-[10px] lg:py-[0px] lg:px-[0%] lg:items-center lg:justify-between border-b-[1px] border-[#001B71]">
          <div className="lg:pl-[63px] flex font-black text-[#021B71]">
            <span className="cursor-pointer	font-bold	lg:text-[18px] text-[15px] leading-[26px] text-[#001B71]">
              Base Asset Management Limited
            </span>
          </div>

          <div className="flex justify-between pt-[1%] lg:border-l-[1px] lg:py-[14px] lg:px-[63px] border-[#001B71]">
            <div className="border-[#001B71] my-auto text-[#001B71] lg:pr-[35px]">
              <a
                href="mailto:info@base-am.com"
                className="cursor-pointer	font-medium	text-[13px] lg:text-[13px] text-[#001B71]"
              >
                info@base-am.com
              </a>
            </div>
            <div className="flex">
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
        </div>
        <div className="px-[7%] lg:px-[0%] py-[17px] lg:py-[0px]">
          <div className="lg:flex lg:py-[23px] lg:justify-between lg:px-[63px]">
            <div>
              <h6 className=" cursor-default cursor-pointer font-medium	lg:text-[13px] text-[12px] leading-[17px] text-[#001B71] ">
                Copyright 2022 © BASE. All rights reserved.
              </h6>
            </div>

            <div className="flex pt-[2%] lg:pt-[0%]">
              <TermOfUse />
              <p className="border-[#001B71] font-medium	text-[13px] lg:text-[13px] leading-[17px] text-[#001B71]  text-[#001B71] cursor-pointer pl-4 lg:pl-2">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
