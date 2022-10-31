import React from "react";
import Image from "next/image";
import blogone from "../public/img/blogone.png";
import blogtwo from "../public/img/blogtwo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import linkedin from "../public/img/icons8-linkedin.svg";
import twitter from "../public/img/twitter-square-icon.svg";

function Insight() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="flex">
          <div className="w-[50%]">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <h2 className="mb-5 text-white font-normal	text-[58px] leading-[76px] text-[#4D008C] pb-[30px]">
                  Insights
                </h2>
                <div className="max-w-sm  font-normal	text-[18px] leading-[28px] text-[#000000]">
                  <p>
                    At BASE, we pride ourselves on being open and transparent
                    with our investors. This means not only providing informed
                    decisions about their portfolios but also sharing our views
                    on market trends and investment opportunities.
                  </p>
                  <p className="mt-3">
                    To that end, we publish online articles to highlight both
                    the risks and the rewards of investing, and we welcome
                    feedback and suggestions. Thank you for investing with us.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
                href="#"
              >
                <button className="hidden lg:block mr-2 font-bold	text-[14px] leading-[17px] text-[#ffffff] bg-[#4D008C] text-white p-6 pr-16 pl-16">
                  View more
                </button>
              </a>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex">
              <div className="mx-auto pt-2 border-t-[6px] border-b border-[#4D008C]">
                <div className="">
                  <Image src={blogone} alt="Base Asset Management" />
                </div>
                <p className="mb-4 font-semibold	text-[14px] leading-[14px] text-[#000000] max-w-max text-sm uppercase ">
                  Theme / Topic
                </p>
                <a
                  className="max-w-[16rem]  mb-2 inline-block hover:text-gray-800 hover:underline"
                  href="#"
                >
                  <h3 className="font-extrabold	text-[20px] leading-[28px] text-[#000000]">
                    Oil money pumps up luxury property
                  </h3>
                </a>

                <div className="flex justify-between">
                  <div>
                    <a
                      href="https://www.linkedin.com/company/base-am/"
                      className="text-gray-600"
                    >
                      <Image
                        src={linkedin}
                        width={35}
                        height={35}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                    </a>
                  </div>
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="mx-auto pt-2 border-t-[6px] border-b border-[#4D008C]">
                <div className="">
                  <Image src={blogtwo} alt="Base Asset Management" />
                </div>
                <p className="mb-4 font-semibold	text-[14px] leading-[14px] text-[#000000] max-w-max text-sm uppercase ">
                  Theme / Topic
                </p>
                <a
                  className="max-w-[16rem]  mb-2 inline-block hover:text-gray-800 hover:underline"
                  href="#"
                >
                  <h3 className="font-extrabold	text-[20px] leading-[28px] text-[#000000]">
                    Oil money pumps up luxury property
                  </h3>
                </a>
                <div className="flex justify-between">
                  <div>
                    <a
                      href="https://twitter.com/BASE_AssetMgmt"
                      className="text-gray-600"
                    >
                      <Image
                        src={twitter}
                        width={31}
                        height={31}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                    </a>
                  </div>
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              className="lg:hidden mt-7 inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
              href="#"
            >
              <button className="mr-2 font-semibold bg-[#4D008C] text-white p-2 pr-5 pl-5">
                View more
              </button>
            </a>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Insight;
