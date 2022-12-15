import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import blogone from "../public/img/blogone.png";
import blogtwo from "../public/img/blogtwo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import linkedin from "../public/img/linkedin.svg";
import twitter from "../public/img/square-twitter.svg";
import useOnScreen from "hook/useOnScreen";
import Link from "next/link";
import rightArrow from "../public/img/Arrow1.png";

function Insight() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  const divOnShow1 = useRef(null);
  const refValue = useOnScreen(divOnShow1);
  const showDiv1 = useMemo(() => {
    const divOnShow1_100: any = divOnShow1.current;
    refValue
      ? (divOnShow1_100.className =
          "lg:flex transition-opacity ease-in duration-1000 opacity-100")
      : "";
  }, [refValue]);

  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div ref={divOnShow1} className="lg:flex opacity-0">
          <div className="lg:w-[50%]">
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <h2 className="text-white font-[400] lg:text-[58px] lg:leading-[76px] text-[44px] leading-[44px] text-[#4D008C] pb-[30px]">
                  Insights
                </h2>
                <div className="font-[400] hidden lg:block	text-[16px] leading-[28px] text-[#000000]">
                  <p>
                    We pride ourselves on being open and transparent with <br />
                    our investors. This means not only providing informed
                    decisions <br /> about their portfolios but also sharing our
                    views on <br /> market trends and investment opportunities.
                  </p>
                  <p className="mt-[20px]">
                    To that end, we publish online articles to highlight both
                    the <br /> risks and the rewards of investing, and we
                    welcome
                    <br />
                    feedback and suggestions.
                  </p>
                </div>

                <div className="font-normal lg:hidden	lg:text-[16px] lg:leading-[28px] text-[14px] leading-[24px] text-[#000000]">
                  <p>
                    We pride ourselves on being open and transparent with our
                    investors. This means not only providing informed decisions
                    about their portfolios but also sharing our views on market
                    trends and investment opportunities.
                  </p>
                  <p className="mt-[20px]">
                    To that end, we publish online articles to highlight both
                    the risks and the rewards of investing, and we welcome
                    feedback and suggestions.
                  </p>
                </div>
              </div>
              <a href="/insights">
                <button
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  className="mt-[40px] hidden lg:block w-[170px] h-[58px] bg-[#4D008C] text-white font-bold text-[14px] leading-[17px]"
                >
                  {!isShown && <p> View more</p>}
                  {isShown && (
                    <div className="flex justify-between mx-[31.5px]">
                      <div className="self-center">
                        <p>View more</p>
                      </div>
                      <div className="pt-1">
                        <Image src={rightArrow} />
                      </div>
                    </div>
                  )}
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] mt-[45px] lg:mt-0">
            <div className="flex lg:justify-right">
              <Link href="https://twitter.com/BASE_AssetMgmt/status/1592008449524928513">
                <div className="mx-auto cursor-pointer pt-[6px] lg:pt-[14px] lg:border-t-[8px] border-t-[3px] mr-[6px] lg:mr-[16px] border-b border-[#4D008C]">
                  <div className="">
                    <Image src={blogtwo} alt="Base Asset Management" />
                  </div>
                  <p className="font-[600] mt-[7px]	lg:text-[14px] lg:leading-[14px] text-[11px] leading-[14px] text-[#000000] ">
                    Strategy / Model Study
                  </p>
                  <h3 className="mt-[7px] font-[800] h-16 	hover:underline lg:text-[18px] lg:leading-[24px] lg:pb-[33px] text-[14px] leading-[15px] text-[#000000]">
                    Follow up.
                  </h3>

                  <div className="flex justify-between">
                    <div>
                      <a
                        href="https://www.linkedin.com/company/base-am/"
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
                    <div className="font-[500] pt-3 text-[12px] leading-[22px] text-[#000000]">
                      2022-11-14
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://www.linkedin.com/posts/base-am_tapping-into-november-2022-activity-6991558083294490624-Khp6/?utm_source=share&utm_medium=member_desktop">
                <div className="mx-auto cursor-pointer pt-[6px] lg:pt-[14px] lg:border-t-[8px] border-t-[3px] ml-[6px] lg:ml-[16px] border-b border-[#4D008C]">
                  <div>
                    <Image src={blogone} alt="Base Asset Management" />
                  </div>
                  <p className="font-[600] mt-[7px] lg:text-[14px] lg:leading-[14px] text-[11px] leading-[14px] text-[#000000]">
                    Investment / Outlook Brief
                  </p>
                  <h3 className="mt-[7px] font-[800] h-16 	hover:underline lg:text-[18px] lg:leading-[24px] lg:pb-[33px] text-[14px] leading-[15px] text-[#000000]">
                    Tapping into November 2022
                  </h3>
                  <div className="flex justify-between">
                    <div>
                      <a
                        href="https://www.linkedin.com/company/base-am/"
                        className="text-gray-600"
                      >
                        <Image
                          src={linkedin}
                          width={31}
                          height={31}
                          className="cursor-pointer"
                          alt="Base Asset Management"
                        />
                      </a>
                    </div>
                    <div className="font-[500] pt-3 text-[12px] leading-[22px] text-[#000000]">
                      2022-10-28
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <a
              className="lg:hidden mt-7 inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
              href="/insights"
            >
              <button className="mr-2 text-[13px] font-[700] bg-[#4D008C] text-white py-[12px] px-[27px]">
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
