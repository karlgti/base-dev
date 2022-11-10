import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/backToTop";
import invest from "../public/img/banner/BAM_Pic2.gif";
import Footer from "components/footer";
import Header from "../components/InvestHeader";
import SeeInvestmentProcess from "components/SeeInvestmentProcess";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Invest() {
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
  const menuItems = [{ title: "Home", url: "#" }];
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#CC9C4A] w-full flex flex-col  items-center">
        <div className="lg:max-w-[1440px] lg:px-[144px]">
          <Header />
          <div className="pt-[8rem] lg:pb-9">
            <div className="flex flex-col lg:flex-row items-center">
              <h1 className="font-light hidden lg:block	text-[43px] leading-[60px] text-white">
                Discover the Undiscovered with <br />
                Disciplined Investment Approach
              </h1>
              <div className="lg:ml-[200px]">
                <Image
                  src={invest}
                  alt="TheDifferentiator"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="font-light pb-[15px] lg:hidden text-[24px] leading-[36px] text-white">
                Discover the Undiscovered with <br />
                Disciplined Investment Approach
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="hidden lg:block pr-[890px] max-w-[1440px] ">
          <div className="py-[17px] flex ">
            <h1 className="text-[#CC9C4A] font-semibold	text-[18px] leading-[30px] mr-1">
              About /
              <span className="text-black ml-1 font-semibold	text-[18px] leading-[30px]">
                Investment Philosophy
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center ">
        <div className="lg:px-[144px] px-[7%] max-w-[1440px] ">
          <div className="pb-[65px]"></div>

          <div className="lg:max-w-[70%] font-normal	text-[18px] leading-[28px]">
            Our investment philosophy is built on the balance between achieving
            investment returns and managing portfolio risks. By taking a
            disciplined approach to investing, we can deliver consistent results
            over the long term.
          </div>

          <section className="">
            <div className="pt-[63px] mx-auto max-w-screen-xl">
              <div className="lg:flex">
                <div className="lg:mr-[24px]">
                  <p className="text-[#CC9C4A] font-normal	text-[30px] leading-[40px]">
                    Capturing Upside Return
                  </p>
                  <p className="text-black font-normal mt-[20px]	text-[18px] leading-[28px]">
                    brief explanation
                  </p>

                  <article className="p-6  rounded-lg mt-[40px] border shadow-md">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg
                          className="mr-1 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                        Tutorial
                      </span>
                      <span className="text-sm">14 days ago</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">How to quickly deploy a static website</a>
                    </h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                      Static websites are now used to bootstrap lots of websites
                      and are becoming the basis for a variety of tools that
                      even influence both web designers and developers influence
                      both web designers and developers.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4"></div>

                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </article>
                </div>

                <div className="lg:ml-[24px] lg:mt-0 mt-10">
                  <p className="text-[#CC9C4A] font-normal	text-[30px] leading-[40px]">
                    Capturing Upside Return
                  </p>
                  <p className="text-black font-normal mt-[20px] text-[18px] leading-[28px]">
                    brief explanation
                  </p>

                  <article className="p-6  rounded-lg mt-[40px] border border-gray-200 shadow-md">
                    <div className="flex justify-between items-center mb-5 text-gray-500">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg
                          className="mr-1 w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                            clipRule="evenodd"
                          ></path>
                          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                        </svg>
                        Article
                      </span>
                      <span className="text-sm">14 days ago</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Our first project with React</a>
                    </h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                      Static websites are now used to bootstrap lots of websites
                      and are becoming the basis for a variety of tools that
                      even influence both web designers and developers influence
                      both web designers and developers.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4"></div>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#F5F5F5] flow-root pb-[68px]">
        <div className="hidden lg:block mt-[153px]">
          <Button />
        </div>
        <div className="mt-[53px]">
          <SeeInvestmentProcess />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
export default Invest;
