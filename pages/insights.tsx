import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic4.gif";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/BlogHeader";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import linkedin from "../public/img/icons8-linkedin.svg";
import twitter from "../public/img/twitter-square-icon.svg";

const data = [
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition, follow up.",
    date: "2022-04-11",
    linktwt: twitter,
  },
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject: "Pattern Recognition",
    date: "2022-21-10",
    linktwt: twitter,
  },
  {
    theme: "Strategy",
    topic: "Commodity",
    subject: "Gold, follow up.",
    date: "2022-05-10",
    linktwt: twitter,
  },
  {
    theme: "Investment",
    topic: "Outlook Brief",
    subject: "Tapping into October 2022",
    date: "2022-29-09",
    linktwt: linkedin,
  },
  {
    theme: "Trend",
    topic: "Currency",
    subject: "What if DXY is bullish longer term than you expected?!",
    date: "2022-28-09",
    linktwt: twitter,
  },
  {
    theme: "Strategy",
    topic: "Commodity",
    subject: "Important Time Upcoming for Gold!",
    date: "2022-20-09",
    linktwt: twitter,
  },
  {
    theme: "Strategy",
    topic: "U.S. Market",
    subject:
      "Are we about to repeat the 2008 crisis? Or more reference points?",
    date: "2022-20-09",
    linktwt: twitter,
  },
  {
    theme: "Trend",
    topic: "Cryptocurrency",
    subject: "Crypto Bottomed? Not yet, but soon!?!",
    date: "2022-19-09",
    linktwt: twitter,
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
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header />
        <div className="bg-[#4D008C] px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                Trends. Views. Observations. <br />
                And more.
              </h1>
            </div>

            <div className="self-center py-[10px]">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F0F0F0] px-[144px]">
          <div className="max-w-[1200px] pt-[76px] pb-[90px] m-0 m-auto">
            <div className="">
              {
                <h1 className="text-black font-semibold	lg:text-[26px] text-[20px] leading-[30px]">
                  Featured Insight
                </h1>
              }
            </div>
            <div className="lg:flex mt-[16px]">
              <div className="relative lg:w-[65%] lg:mr-[16px] lg:border-t-[8px] border-t-[4px] border-b-[1px] border-[#4D008C]">
                <div className="mt-[13px] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                  <img src="https://source.unsplash.com/random/760x434" />
                  <div className="">
                    <p className="font-semibold	lg:text-[18px] text-[16px] mt-1 leading-[30px]">
                      Strategy / Model Study
                    </p>

                    <p className="font-extrabold	lg:text-[45px] lg:leading-[56px] text-[22px] leading-[32px] group-hover:underline group-focus:underline">
                      Follow up.
                    </p>

                    <p className="font-normal mt-[20px]	lg:text-[18px] text-[16px] leading-[24px] lg:leading-[28px]">
                      • We were similar to the previous pattern {"->"} choppy
                      then meaningful down leg - Checked! ✅
                    </p>
                    <br />
                    <p className="font-normal	hidden lg:block text-[18px] leading-[28px]">
                      • Bottom around end-Oct/early-Nov - Checked! ✅ Other
                      markets (Dow/HSI/Crypto) behaved similarly but on
                      different amplitude as expected too.
                    </p>
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
                          width={32}
                          height={32}
                          className="cursor-pointer"
                          alt="Base Asset Management"
                        />
                      </a>
                    </div>
                    <div className="font-medium text-[12px] pt-[14px] leading-[22px] text-[#000000]">
                      2022-10-17
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[35%] ml-[16px] hidden lg:block border-b-[1px] border-t-[8px] border-[#4D008C]">
                <div className="block mt-[13px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                  <img src="https://source.unsplash.com/random/430x280" />
                  <div className="">
                    <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                      Investment / Outlook Brief
                    </p>

                    <p className="font-extrabold	mt-[10px] text-[25px] leading-[30px] group-hover:underline group-focus:underline">
                      Tapping into November 2022
                    </p>
                  </div>
                  <div className="relative flex mt-[55px] justify-between">
                    <div className="absolute bottom-0 left-0">
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
                    <div className="font-medium	text-[12px] pt-3 absolute bottom-0 right-0 leading-[22px] text-[#000000]">
                      2022-10-28
                    </div>
                  </div>
                </div>
                <div className="block mt-[27px] border-t-[8px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                  <img
                    src="https://source.unsplash.com/random/430x280"
                    className="mt-[13px]"
                  />
                  <div className="">
                    <p className="font-semibold	text-[14px] mt-[16px] leading-[14px]">
                      Strategy / U.S. Market
                    </p>

                    <p className="font-extrabold mt-[10px] text-[25px] leading-[30px] group-hover:underline group-focus:underline">
                      Pattern Recognition, follow up.
                    </p>
                  </div>
                  <div className="relative flex mt-[55px] justify-between">
                    <div className="absolute bottom-0 left-0">
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
                    <div className="font-medium	text-[12px] absolute bottom-0 right-0 pt-3 leading-[22px] text-[#000000]">
                      2022-11-04
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-[38px]">
              <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.map((content, i) => (
                  <div
                    key={i}
                    className="block border-t-[4px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                  >
                    <img
                      src="https://source.unsplash.com/random/300x200"
                      className="mt-[13px]"
                    />
                    <div className="">
                      <p className="font-semibold	text-[11px] lg:text-[14px] mt-[14px] leading-[14px]">
                        {content.theme} / {content.topic}
                      </p>

                      <p className="font-extrabold mt-[10px] text-[14px] leading-[15px] lg:text-[20px] lg:leading-[28px] group-hover:underline group-focus:underline">
                        {content.subject}
                      </p>
                    </div>
                    <div className="relative flex mt-[44px] lg:hiddden justify-between">
                      <div className="lg:hidden">
                        <a
                          href="https://www.linkedin.com/company/base-am/"
                          className="text-gray-600"
                        >
                          <Image
                            src={content.linktwt}
                            width={21}
                            height={21}
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
                            width={32}
                            height={32}
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
  );
}
