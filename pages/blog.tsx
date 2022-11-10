import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic4.gif";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/BlogHeader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import linkedin from "../public/img/icons8-linkedin.svg";
import twitter from "../public/img/twitter-square-icon.svg";

export default function Blog() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#4D008C] w-full flex flex-col items-center">
        <div className="lg:max-w-[1440px] lg:px-[144px]">
          <Header />
          <div className="pt-[8rem] lg:pb-9">
            <div className="flex flex-col lg:flex-row items-center">
              <h1 className="font-light hidden lg:block	text-[48px] leading-[60px] text-white">
                Trends. Views. Observations. <br />
                And more.
              </h1>
              <div className="lg:ml-[200px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="font-light pb-[15px] lg:hidden text-[26px] leading-[36px] text-white">
                Trends. Views. Observations. <br />
                And more.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] flex flex-col items-center ">
        <div className="lg:px-[144px] px-[7%] max-w-[1440px] ">
          <div className="pt-[42px] lg:pt-[80px] lg:pb-[12px] flex">
            {
              <h1 className="text-black font-semibold	lg:text-[26px] text-[20px] leading-[30px]">
                Featured Insight
              </h1>
            }
          </div>
          <div className="lg:flex">
            <div className="lg:w-[65%] lg:mr-[16px] lg:border-t-[8px] border-t-[4px] border-b-[1px] border-[#4D008C]">
              <div className="mt-[13px] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img src="https://source.unsplash.com/random" />
                <div className="">
                  <p className="font-semibold	lg:text-[18px] text-[16px] mt-1 leading-[30px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold	lg:text-[45px] lg:leading-[56px] text-[22px] leading-[32px] group-hover:underline group-focus:underline">
                    Is now a good time to buy shares amid the coronavirus
                    pandemic?
                  </p>

                  <p className="font-normal mt-[20px]	lg:text-[18px] text-[16px] leading-[24px] lg:leading-[28px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <br />
                  <p className="font-normal	hidden lg:block text-[18px] leading-[28px]">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip. Ewea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate veli.
                  </p>
                </div>
              </div>
              <div className="flex lg:mt-[175px] justify-between">
                <div>
                  <a
                    href="https://www.linkedin.com/company/base-am/"
                    className="text-gray-600"
                  >
                    <Image
                      src={linkedin}
                      width={32}
                      height={32}
                      className="cursor-pointer"
                      alt="Base Asset Management"
                    />
                  </a>
                </div>
                <div className="font-medium	text-[12px] pt-3 leading-[22px] text-[#000000]">
                  2022-10-17
                </div>
              </div>
            </div>
            <div className="lg:w-[35%] ml-[16px] hidden lg:block border-b-[1px] border-t-[8px] border-[#4D008C]">
              <div className="block mt-[13px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img src="https://source.unsplash.com/random" />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold	mt-[10px] text-[25px] leading-[30px] group-hover:underline group-focus:underline">
                    Zipmex joins growing list of crypto exchanges to block
                    withdrawals
                  </p>
                </div>
                <div className="flex mt-[41px] justify-between">
                  <div>
                    <a
                      href="https://www.linkedin.com/company/base-am/"
                      className="text-gray-600"
                    >
                      <Image
                        src={twitter}
                        width={32}
                        height={32}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                    </a>
                  </div>
                  <div className="font-medium	text-[12px] pt-3 leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
              <div className="block mt-[27px] border-t-[8px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[25px] leading-[30px] group-hover:underline group-focus:underline">
                    Zipmex joins growing list of crypto exchanges to block
                    withdrawals
                  </p>
                </div>
                <div className="flex mt-[41px] justify-between">
                  <div>
                    <a
                      href="https://www.linkedin.com/company/base-am/"
                      className="text-gray-600"
                    >
                      <Image
                        src={linkedin}
                        width={32}
                        height={32}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                    </a>
                  </div>
                  <div className="font-medium	text-[12px] pt-3 leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-[38px]">
            <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((e, i) => {
                return (
                  <div
                    key={i}
                    className="block border-t-[4px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                  >
                    <img
                      src="https://source.unsplash.com/random"
                      className="mt-[13px]"
                    />
                    <div className="">
                      <p className="font-semibold	text-[11px] lg:text-[14px] mt-[14px] leading-[14px]">
                        Theme / Topic
                      </p>

                      <p className="font-extrabold mt-[10px] text-[14px] leading-[15px] lg:text-[20px] lg:leading-[28px] group-hover:underline group-focus:underline">
                        Oil money pumps up luxury property
                      </p>
                    </div>
                    <div className="flex mt-[21px] lg:hiddden justify-between">
                      <div className="lg:hidden">
                        <a
                          href="https://www.linkedin.com/company/base-am/"
                          className="text-gray-600"
                        >
                          <Image
                            src={linkedin}
                            width={21}
                            height={21}
                            className="cursor-pointer"
                            alt="Base Asset Management"
                          />
                        </a>
                      </div>

                      <div className="hidden lg:block">
                        <a
                          href="https://www.linkedin.com/company/base-am/"
                          className="text-gray-600"
                        >
                          <Image
                            src={linkedin}
                            width={32}
                            height={32}
                            className="cursor-pointer"
                            alt="Base Asset Management"
                          />
                        </a>
                      </div>

                      <div className="font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                        2022-10-17
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex mb-[50px] lg:mb-[0px] mt-[71px] lg:mt-[150px] justify-center">
              <button
                type="button"
                className="hover:underline font-bold	text-[18px] leading-[18px] lg:text-[24px] lg:leading-[28px]"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] hidden lg:block pb-14">
        <Button />
      </div>
      <div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
