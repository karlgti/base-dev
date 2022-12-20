import React, { useState } from "react";
import one from "../public/img/Artboard 75@2x.png";
import two from "../public/img/Artboard 75@2x copy.png";
import three from "../public/img/Artboard 75@2x copy 2.png";

import zeroonewhite from "../public/img/01 white.png";
import zerotwowhite from "../public/img/02 white.png";
import zerothreewhite from "../public/img/03 white.png";

import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

export default function productTypes() {
  return (
    <ThemeProvider theme={theme}>
      <div className="mt-[36px]">
        <div className="border-[1px] border-[#E04403] p-[8px] flex">
          <div className="h-[232px] w-full bg-[#E04403]">
            <div className="mt-[23px] ml-[18px] flex">
              <div>
                <Image
                  src={zeroonewhite}
                  width={52}
                  height={38}
                  alt={"picture"}
                />
              </div>
              <div>
                <p className="font-[700] ml-[20px] text-[18px] leading-[36px] text-white">
                  Advisory Service
                </p>
              </div>
            </div>

            <div className="flex mt-[15px]">
              <div className="w-[55%] font-[400] text-[13px]  ml-[18px] text-white leading-[22px]">
                BASE provides investment advice to clients on asset allocation
                and investment strategy that fits within the clients’ investment
                objectives and risk appetites.
              </div>
              <div className="mx-auto ">
                <Image src={one} width={100} height={100} alt={"picture"} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] mt-[12px] border-[#E04403] p-[8px] flex">
          <div className="h-[232px] w-full bg-[#E04403]">
            <div className="mt-[23px] ml-[18px] flex">
              <div>
                <Image
                  src={zerotwowhite}
                  width={52}
                  height={38}
                  alt={"picture"}
                />
              </div>
              <div>
                <p className="font-[700] ml-[20px] text-[18px] leading-[36px] text-white">
                  Discretionary Account{" "}
                </p>
              </div>
            </div>

            <div className="flex mt-[15px]">
              <div className="w-[55%] font-[400] text-[13px]  ml-[18px] text-white leading-[22px]">
                BASE manages the client’s investment portfolio in accordance
                with the clients’ investment guidelines, policies and
                restrictions.
              </div>
              <div className="mx-auto ">
                <Image src={two} width={100} height={100} alt={"picture"} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] mt-[12px] border-[#E04403] p-[8px] flex">
          <div className="h-[232px] w-full bg-[#E04403]">
            <div className="mt-[23px] ml-[18px] flex">
              <div>
                <Image
                  src={zerothreewhite}
                  width={52}
                  height={38}
                  alt={"picture"}
                />
              </div>
              <div>
                <p className="font-[700] ml-[20px] text-[18px] leading-[36px] text-white">
                  Investment Fund
                </p>
              </div>
            </div>

            <div className="flex mt-[12px]">
              <div className="w-[55%] font-[400] text-[13px]  ml-[18px] text-white leading-[22px]">
                BASE provides discretionary investment management services to
                the Fund based on the investment strategies and mandates of the
                Fund as set out in its offering memorandum.
              </div>
              <div className="mx-auto ">
                <Image src={three} width={100} height={100} alt={"picture"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
