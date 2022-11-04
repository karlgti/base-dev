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
      <div className="bg-[#4D008C] w-full flex flex-col justify-center items-center">
        <div className="max-w-[1440px] justify-center items-center">
          <Header />
          <div className=" pt-[8rem] pb-9">
            <div className="flex items-center">
              <h1 className="font-light	text-[48px] leading-[60px] text-white">
                Trends. Views. Observations. <br />
                And more.
              </h1>
              <div className="ml-[220px]">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={300}
                height={300}
              />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center ">
        <div className="px-[144px] max-w-[1440px] ">
          <div className="pt-[80px] pb-[12px] flex">
            {
              <h1 className="text-black font-semibold	text-[18px] leading-[30px]">
                Featured Insight
              </h1>
            }
          </div>
          <div className="flex">
            <div className="w-[760px] mr-[16px] border-t-[8px] border-b-[1px] border-[#4D008C]">
              <div className="block mt-[13px] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img src="https://source.unsplash.com/random/760x434" />
                <div className="">
                  <p className="font-semibold	text-[18px] leading-[30px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold	text-[45px] leading-[56px] group-hover:underline group-focus:underline">
                    Is now a good time to buy shares amid the coronavirus
                    pandemic?
                  </p>

                  <p className="font-normal mt-[20px]	text-[18px] leading-[28px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <br />
                  <p className="font-normal	text-[18px] leading-[28px]">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip. Ewea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate veli.
                  </p>
                </div>
              </div>
              <div className="flex mt-[175px] justify-between">
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
                <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                  2022-10-17
                </div>
              </div>
            </div>
            <div className=" w-[360px] ml-[16px] border-b-[1px] border-t-[8px] border-[#4D008C]">
              <div className="block mt-[13px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img src="https://source.unsplash.com/random/360x250" />
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
              <div className="block mt-[27px] border-t-[8px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/360x250"
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-[38px]">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>

              <div className="block border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                <img
                  src="https://source.unsplash.com/random/264x180"
                  className="mt-[13px]"
                />
                <div className="">
                  <p className="font-semibold	text-[14px] mt-[14px] leading-[14px]">
                    Theme / Topic
                  </p>

                  <p className="font-extrabold mt-[10px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                    Oil money pumps up luxury property
                  </p>
                </div>
                <div className="flex mt-[21px] justify-between">
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
                  <div className="font-medium	text-[12px] leading-[22px] text-[#000000]">
                    2022-10-17
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-[150px] justify-center">
              <button
                type="button"
                className="hover:underline font-bold	text-[24px] leading-[28px]"
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] pb-14">
        <Button />
      </div>

      <Footer />
    </ThemeProvider>
  );
}
