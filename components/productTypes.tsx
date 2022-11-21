import React, { useState } from "react";
import one from "../public/img/Artboard 65@2x.png";
import two from "../public/img/Artboard 66@2x.png";
import three from "../public/img/Artboard 67@2x.png";
import zeroone from "../public/img/01.png";
import zerotwo from "../public/img/02.png";
import zerothree from "../public/img/03.png";
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
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-between mt-[70px]">
        <div>
          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {!isShown && (
              <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center">
                <div className="mt-[109px]">
                  <Image src={zeroone} alt={"picture"} />
                </div>
                <p className="font-bold text-[28px] leading-[36px] text-[#E04403] mt-[39px]">
                  Advisory
                </p>
                <p className="font-bold text-[28px] text-[#E04403] leading-[36px]">
                  Service
                </p>
                <div className="mt-[24px]">
                  <Image src={one} alt={"picture"} />
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              {isShown && (
                <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center flex">
                  <div className="h-[497px] w-[320px] bg-[#E04403] text-center justify-center mx-auto my-auto">
                    <div className="mt-[93px]">
                      <Image src={zeroonewhite} alt={"picture"} />
                    </div>
                    <p className="font-bold text-[28px] leading-[36px] text-white mt-[39px]">
                      Advisory
                    </p>
                    <p className="font-bold text-[28px] text-white leading-[36px]">
                      Service
                    </p>
                    <p className="font-normal text-[16px] mt-[31px] px-[28px] text-white leading-[28px]">
                      BASE provides investment advice to clients on asset
                      allocation and investment strategy that fits within the
                      clients’ investment objectives and risk appetites.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mx-[37px]">
          <div
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
          >
            {!isShown1 && (
              <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center">
                <div className="mt-[109px]">
                  <Image src={zerotwo} alt={"picture"} />
                </div>
                <p className="font-bold text-[28px] leading-[36px] text-[#E04403] mt-[39px]">
                  Discretionary
                </p>
                <p className="font-bold text-[28px] text-[#E04403] leading-[36px]">
                  Account
                </p>
                <div className="mt-[24px]">
                  <Image src={two} alt={"picture"} />
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setIsShown1(true)}
            onMouseLeave={() => setIsShown1(false)}
          >
            {isShown1 && (
              <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center flex">
                <div className="h-[497px] w-[320px] bg-[#E04403] text-center justify-center mx-auto my-auto">
                  <div className="mt-[93px]">
                    <Image src={zerotwowhite} alt={"picture"} />
                  </div>
                  <p className="font-bold text-[28px] leading-[36px] text-white mt-[39px]">
                    Discretionary
                  </p>
                  <p className="font-bold text-[28px] text-white leading-[36px]">
                    Account
                  </p>
                  <p className="font-normal text-[16px] mt-[31px] px-[28px] text-white leading-[28px]">
                    BASE manages the client’s investment portfolio in accordance
                    with the clients’ investment guidelines, policies and
                    restrictions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            {!isShown2 && (
              <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center">
                <div className="mt-[109px]">
                  <Image src={zerothree} alt={"picture"} />
                </div>
                <p className="font-bold text-[28px] leading-[36px] text-[#E04403] mt-[39px]">
                  Investment
                </p>
                <p className="font-bold text-[28px] text-[#E04403] leading-[36px]">
                  Fund
                </p>
                <div className="mt-[24px]">
                  <Image src={three} alt={"picture"} />
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            {isShown2 && (
              <div className="border-[3px] border-[#E04403] h-[536px] w-[359px] bg-white text-center flex">
                <div className="h-[497px] w-[320px] bg-[#E04403] text-center justify-center mx-auto my-auto">
                  <div className="mt-[93px]">
                    <Image src={zerothreewhite} alt={"picture"} />
                  </div>
                  <p className="font-bold text-[28px] leading-[36px] text-white mt-[39px]">
                    Investment
                  </p>
                  <p className="font-bold text-[28px] text-white leading-[36px]">
                    Fund
                  </p>
                  <p className="font-normal text-[16px] mt-[31px] px-[28px] text-white leading-[28px]">
                    BASE provides discretionary investment management services
                    to the Fund based on the investment strategies and mandates
                    of the Fund as set out in its offering memorandum.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
