import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic4.gif";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import linkedin from "../public/img/linkedin.svg";
import twitter from "../public/img/square-twitter.svg";
import blogone from "../public/img/11.jpg";
import one from "../public/img/10.jpg";
import two from "../public/img/12.jpg";
import arrow from "../public/img/Arrow 2.png";

import Link from "next/link";

const data1 = [
  {
    theme: "Company",
    topic: "News",
    subject: "Personnel Announcement - Mr. Askin Leung",
    date: "2022-12-30",
    linktwt: linkedin,
    link: "#",
    src: "img/11.jpg",
  },

  {
    theme: "Company",
    topic: "News",
    subject: "Personnel Announcement - Ms. Selina Sze",
    date: "2022-12-30",
    linktwt: linkedin,
    link: "#",
    src: "img/12.jpg",
  },
];

const data = [
  {
    id: 1,
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "マンスリービューポイント：2023年1月",
    date: "2022-12-30",
    linktwt: linkedin,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7014603178327359488",
    src: "img/13.jpg",
  },
  {
    id: 2,
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "Tapping into December 2022",
    date: "2022-12-08",
    linktwt: linkedin,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7006554952634425344/",
    src: "img/3.png",
  },
  {
    id: 3,
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "2022年12月へ邁進",
    date: "2022-12-08",
    linktwt: linkedin,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7006555101397995520/",
    src: "img/14.jpg",
  },
  {
    id: 4,
    theme: "Strategy",
    topic: "Model Study",
    subject: "Follow up.",
    date: "2022-11-14",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1592066537225351170",
    src: "img/9.png",
  },
  {
    id: 5,
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "Tapping into November 2022",
    date: "2022-10-28",
    linktwt: linkedin,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6991558083294490624",
    src: "img/15.jpg",
  },
  {
    id: 6,
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition, follow up.",
    date: "2022-11-04",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1588461046209335296",
    src: "img/9.png",
  },
  {
    id: 7,
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition",
    date: "2022-10-21",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1583409034027479040",
    src: "img/4.png",
  },
  {
    id: 8,
    theme: "Strategy",
    topic: "Commodity",
    subject: "Gold, follow up.",
    date: "2022-10-05",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1577542391976062976",
    src: "img/5.png",
  },
  {
    id: 9,
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "Tapping into October 2022",
    date: "2022-09-29",
    linktwt: linkedin,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6981275494910492672",
    src: "img/6.png",
  },
  {
    id: 10,
    theme: "Trend",
    topic: "Currency",
    subject: "What if DXY is bullish longer term than you expected?!",
    date: "2022-09-28",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1575051402832797696",
    src: "img/7.png",
  },
  {
    id: 11,
    theme: "Strategy",
    topic: "Commodity",
    subject: "Important Time Upcoming for Gold!",
    date: "2022-09-20",
    linktwt: twitter,
    link: "https://twitter.com/BASE_AssetMgmt/status/1572247010073530369",
    src: "img/8.png",
  },
  {
    id: 12,
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
    id: 13,
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
  const [visible, setVisible] = useState(9);

  const showMore = () => {
    setVisible((prevState) => prevState + 4);
  };
  return (
    <>
      <div className="w-full">
        <ThemeProvider theme={theme}>
          <Header bg={"#4D008C !important"} />
          <div className="bg-[#4D008C] lg:px-[144px] px-[5%]">
            <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
              <div className="self-center">
                <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                  Trends. Views. Observations. <br />
                  And more.
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
                <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7014603113642803200">
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
                        <div className="font-[600]	lg:text-[14px] text-[14px] lg:mt-[20px] mt-[px] leading-[30px] lg:leading-[30px]">
                          Investment / Outlook Brief
                        </div>

                        <div className="font-extrabold mt-[5px]	lg:text-[42px] lg:leading-[56px] text-[24px] leading-[32px] lg:no-underline underline group-hover:underline group-focus:underline">
                          Monthly Viewpoint - January 2023
                        </div>

                        <div className="font-normal ml-[17px] lg:ml-0 mt-[15px] lg:mt-[32px] lg:text-[16px] text-[13px] leading-[21px] lg:leading-[30px]">
                          <ol className="list-disc lg:list-inside ">
                            In this monthly outlook brief, our Chief Investment
                            Officer Chris Leung shared BASE’s view on:
                            <li>
                              The overall market trend remains in line with our
                              house view.
                            </li>
                            <li>
                              The rally since November was not sustainable as
                              investors are more emotional-driven or FOMO; we
                              remain bearish in the medium term.
                            </li>
                            <li>
                              We expect most countries to report
                              worse-than-expected economic or earnings forecasts
                              soon; this would be the beginning stage of the
                              recession-led correction.
                            </li>
                            <li>2023 will be about Recession and Earnings.</li>
                          </ol>
                        </div>

                        <br />
                        <br className="hidden lg:block" />
                        <div className="font-normal	lg:text-[16px] text-[13px] leading-[21px] lg:leading-[28px]"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-full">
                      <div className="flex justify-between">
                        <div>
                          <Link
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
                          </Link>
                        </div>
                        <div className="font-medium text-[12px] pt-[14px] leading-[22px] text-[#000000]">
                          2022-12-30
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="lg:w-[35%] ml-[16px] hidden lg:block border-b-[1px] border-t-[8px] border-[#4D008C]">
                  <Link href="#">
                    <div className="block mt-[13px] cursor-pointer border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                      <Image
                        src={blogone}
                        width={430}
                        height={280}
                        className="cursor-pointer"
                        alt="Base Asset Management"
                      />
                      <div className="">
                        <p className="font-semibold	text-[12px] mt-[16px] leading-[14px]">
                          Company / News
                        </p>

                        <p className="font-extrabold	mt-[5px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                          Personnel Announcement - Mr. Askin Leung
                        </p>
                      </div>
                      <div className="relative flex mt-[120px] justify-between">
                        <div className="absolute bottom-0 left-0">
                          <Link
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
                          </Link>
                        </div>
                        <div className="font-medium	text-[12px] pt-3 absolute bottom-0 right-0 leading-[22px] text-[#000000]">
                          2022-12-30
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="#">
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
                        <p className="font-semibold	text-[12px] mt-[16px] leading-[14px]">
                          Company / News
                        </p>

                        <p className="font-extrabold mt-[5px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                          Personnel Announcement - Ms. Selina Sze
                        </p>
                      </div>
                      <div className="relative flex mt-[120px] justify-between">
                        <div className="absolute bottom-0 left-0">
                          <Link
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
                          </Link>
                        </div>
                        <div className="font-medium	text-[12px] absolute bottom-0 right-0 pt-3 leading-[22px] text-[#000000]">
                          2022-12-30
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="container lg:hidden mt-[38px]">
                <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
                  {data1.map((content, i) => (
                    <Link href={content.link}>
                      <div
                        key={i}
                        className="block cursor-pointer border-t-[4px] pt-[14px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                      >
                        <div>
                          <img
                            src={content.src}
                            className="w-[300px] h-[120px]"
                          />
                        </div>
                        <div className="">
                          <p className="font-[600]	text-[10px] lg:text-[13px]  mt-[5px] leading-[14px]">
                            {content.theme} / {content.topic}
                          </p>

                          <p className="font-[800] h-7 lg:h-16 lg:mt-[10px] mt-[5px] text-[14px] leading-[18px] lg:text-[21px] lg:leading-[28px] group-hover:underline group-focus:underline">
                            {content.subject}
                          </p>
                        </div>
                        <div className="relative flex lg:mt-[60px] mt-[40px] lg:hiddden justify-between">
                          <div className="lg:hidden">
                            <Link
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
                            </Link>
                          </div>

                          <div className="hidden lg:block absolute bottom-0 left-0">
                            <Link
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
                            </Link>
                          </div>

                          <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                            {content.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="container mt-[38px]">
                <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {data.map((content, i) => (
                    <>
                      {content.id < visible && (
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
                              <p className="font-[600]	text-[10px] lg:text-[13px]  mt-[5px] leading-[14px]">
                                {content.theme} / {content.topic}
                              </p>

                              <p className="font-[800] h-7 lg:h-16 lg:mt-[10px] mt-[5px] text-[14px] leading-[18px] lg:text-[21px] lg:leading-[28px] group-hover:underline group-focus:underline">
                                {content.subject}
                              </p>
                            </div>
                            <div className="relative flex lg:mt-[60px] mt-[40px] lg:hiddden justify-between">
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
                                <Link
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
                                </Link>
                              </div>

                              <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                                {content.date}
                              </div>
                            </div>
                          </div>
                        </Link>
                      )}
                    </>
                  ))}
                </div>

                {visible - 1 <= data.length ? (
                  <>
                    <div
                      onClick={showMore}
                      className="cursor-pointer lg:hidden flex justify-center mt-[42px] lg:mt-[150px]"
                    >
                      <Image src={arrow} width={22} height={11} />
                    </div>
                    <div
                      onClick={showMore}
                      className="cursor-pointer hidden lg:flex flex justify-center mt-[42px] lg:mt-[150px]"
                    >
                      <Image src={arrow} width={56} height={29} />
                    </div>

                    <div className="flex mb-[50px] lg:mb-[0px] mt-5 lg:mt-[23px] justify-center">
                      <button
                        onClick={showMore}
                        type="button"
                        className="hover:underline flex flex-col font-bold justify-center text-[18px] leading-[18px] lg:text-[24px] lg:leading-[28px]"
                      >
                        <p>Load more</p>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className=" mt-[42px] lg:mt-[150px]" />
                )}
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
