import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic4.gif";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/BlogHeader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import linkedin from "../public/img/linkedin.svg";
import twitter from "../public/img/square-twitter.svg";
import blogone from "../public/img/blogone.png";
import blogtwo from "../public/img/blogtwo.png";
import one from "../public/img/1.png";
import two from "../public/img/2.png";
import three from "../public/img/3.png";
import four from "../public/img/4.png";
import five from "../public/img/5.png";
import six from "../public/img/6.png";
import seven from "../public/img/7.png";
import eight from "../public/img/8.png";
import nine from "../public/img/9.png";
import ten from "../public/img/10.png";

import Link from "next/link";

const data = [
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition, follow up.",
    date: "2022-11-04",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1588461046209335296",
    src: "img/3.png",
  },
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition",
    date: "2022-10-21",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1583409034027479040",
    src: "img/4.png",
  },
  {
    theme: "Strategy",
    topic: "Commodity",
    subject: "Gold, follow up.",
    date: "2022-10-05",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1577542391976062976",
    src: "img/5.png",
  },
  {
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "Tapping into October 2022",
    date: "2022-09-29",
    linktwt: linkedin,
    link: "https://www.linkedin.com/posts/base-am_tapping-into-october-2022-activity-6981275494910492672-BcZz?utm_source=share&utm_medium=member_desktop",
    src: "img/6.png",
  },
  {
    theme: "Trend",
    topic: "Currency",
    subject: "What if DXY is bullish longer term than you expected?!",
    date: "2022-09-28",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1575051402832797696",
    src: "img/7.png",
  },
  {
    theme: "Strategy",
    topic: "Commodity",
    subject: "Important Time Upcoming for Gold!",
    date: "2022-09-20",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1572247010073530369",
    src: "img/8.png",
  },
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject:
      "Are we about to repeat the 2008 crisis? Or more reference points?",
    date: "2022-09-20",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1572183810028208133",
    src: "img/9.png",
  },
  {
    theme: "Trend",
    topic: "Cryptocurrency",
    subject: "Crypto Bottomed? Not yet, but soon!?!",
    date: "2022-09-19",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1571876394392748033",
    src: "img/10.png",
  },
];

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
    <>
      <div className="w-full">
        <ThemeProvider theme={theme}>
          <Header />

          <div className="bg-[#4D008C] lg:px-[144px] px-[5%]">
            <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
              <div className="self-center">
                <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                  Trends. Views. Observations. <br />
                  And more.{" "}
                </h1>
              </div>

              <div className="self-center py-[10px] hidden lg:block">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={350}
                  height={350}
                />
              </div>

              <div className="self-center lg:hidden py-[27px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F0F0F0] px-[5%] lg:px-[144px] ">
            <div className="max-w-[1200px] lg:pt-[76px] lg:pb-[90px] pb-[1px] pt-[44px] m-0 m-auto">
              <div className="">
                {
                  <h1 className="text-black font-semibold	lg:text-[26px] text-[18px] leading-[24px]">
                    Featured Insights
                  </h1>
                }
              </div>
              <div className="lg:flex mt-[16px]">
                <Link href="https://twitter.com/BASE_AssetMgmt/status/1592008843491692544">
                  <div className="relative cursor-pointer lg:w-[65%] lg:mr-[16px] lg:border-t-[8px] border-t-[4px] border-b-[1px] border-[#4D008C]">
                    <div className="mt-[13px] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900 pb-[70px]">
                      <Image
                        src={one}
                        width={760}
                        height={434}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                      <div className="">
                        <div className="font-[600]	lg:text-[14px] text-[16px] lg:mt-[20px] mt-[10px] leading-[14px]">
                          Strategy / Model Study
                        </div>

                        <div className="font-extrabold mt-[5px]	lg:text-[42px] lg:leading-[56px] text-[24px] leading-[32px] lg:no-underline underline group-hover:underline group-focus:underline">
                          Follow up.
                        </div>

                        <div className="font-normal ml-[17px] lg:ml-0 mt-[15px] lg:mt-[32px] lg:text-[16px] text-[13px] leading-[21px] lg:leading-[28px]">
                          <ul className="list-disc lg:list-inside">
                            <li>
                              We were similar to the previous pattern {"->"}{" "}
                              choppy then meaningful down leg - Checked!
                            </li>
                            <li>Bottom around end-Oct/early-Nov - Checked!</li>
                          </ul>
                        </div>

                        <br />
                        <br className="hidden lg:block" />
                        <div className="font-normal	lg:text-[16px] text-[13px] leading-[21px] lg:leading-[28px]">
                          Other markets (Dow/HSI/Crypto) behaved similarly but
                          on different amplitude as expected too.
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full">
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
                        <div className="font-medium text-[12px] pt-[14px] leading-[22px] text-[#000000]">
                          2022-11-14
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="lg:w-[35%] ml-[16px] hidden lg:block border-b-[1px] border-t-[8px] border-[#4D008C]">
                  <Link href="https://www.linkedin.com/posts/base-am_tapping-into-november-2022-activity-6991558083294490624-Khp6?utm_source=share&utm_medium=member_desktop">
                    <div className="block mt-[13px] cursor-pointer border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                      <Image
                        src={blogone}
                        width={430}
                        height={280}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                      <div className="">
                        <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                          Investment / Outlook Brief
                        </p>

                        <p className="font-extrabold	mt-[5px] text-[22px] leading-[28px] group-hover:underline group-focus:underline">
                          Tapping into November 2022
                        </p>
                      </div>
                      <div className="relative flex mt-[100px] justify-between">
                        <div className="absolute bottom-0 left-0">
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
                        <div className="font-medium	text-[12px] pt-3 absolute bottom-0 right-0 leading-[22px] text-[#000000]">
                          2022-10-28
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="https://twitter.com/BASE_AssetMgmt/status/1588461046209335296">
                    <div className="block mt-[27px] border-t-[8px] cursor-pointer border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                      <div className="mt-[13px]"></div>
                      <Image
                        src={two}
                        width={430}
                        height={280}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                      <div className="">
                        <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                          Strategy / U.S. Market
                        </p>

                        <p className="font-extrabold mt-[5px] text-[22px] leading-[28px] group-hover:underline group-focus:underline">
                          Pattern Recognition, follow up.
                        </p>
                      </div>
                      <div className="relative flex mt-[100px] justify-between">
                        <div className="absolute bottom-0 left-0">
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
                        <div className="font-medium	text-[12px] absolute bottom-0 right-0 pt-3 leading-[22px] text-[#000000]">
                          2022-11-04
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="container mt-[38px]">
                <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {data.map((content, i) => (
                    <Link href={content.link}>
                      <div
                        key={i}
                        className="block cursor-pointer border-t-[4px] pt-[14px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                      >
                        <div>
                          <img
                            src={content.src}
                            className="lg:w-[300px] lg:h-[180px]"
                          />
                        </div>
                        <div className="">
                          <p className="font-[600]	text-[11px] lg:text-[14px] lg:mt-[14px] mt-[5px] leading-[14px]">
                            {content.theme} / {content.topic}
                          </p>

                          <p className="font-extrabold h-7 lg:h-16 lg:mt-[10px] mt-[5px] text-[14px] leading-[15px] lg:text-[20px] lg:leading-[28px] group-hover:underline group-focus:underline">
                            {content.subject}
                          </p>
                        </div>
                        <div className="relative flex lg:mt-[60px] mt-[30px] lg:hiddden justify-between">
                          <div className="lg:hidden">
                            <a
                              href="https://www.linkedin.com/company/base-am/"
                              className="text-gray-600"
                            >
                              <Image
                                src={content.linktwt}
                                width={31}
                                height={31}
                                className="cursor-pointer"
                                alt="Base Asset Management"
                              />
                            </a>
                          </div>

                          <div className="hidden lg:block absolute bottom-0 left-0">
                            <a
                              href="https://www.linkedin.com/company/base-am/"
                              className="text-gray-600"
                            >
                              <Image
                                src={content.linktwt}
                                width={31}
                                height={31}
                                className="cursor-pointer"
                                alt="Base Asset Management"
                              />
                            </a>
                          </div>

                          <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                            {content.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
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
        </ThemeProvider>
        <Button />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
