import React from "react";
import Header from "../components/InvestHeader";
import Footer from "components/footer";
import Image from "next/image";
import invest from "../public/img/banner/BAM_Pic2.gif";
import value from "../public/img/Artboard 60@2x 1.png";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import model from "../public/img/Artboard 70@2x.png";
import active from "../public/img/Artboard 71@2x.png";
import Button from "../components/backToTop";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function investmentApproach() {
  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header />

        <div className="bg-[#CC9C4A] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                Expect the Unexpected,
              </h1>
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                And Never Be Surprised.
              </h1>
            </div>

            <div className="self-center py-[10px] hidden lg:block">
              <Image
                src={invest}
                alt="TheDifferentiator"
                width={350}
                height={350}
              />
            </div>

            <div className="self-center lg:hidden py-[10px]">
              <Image
                src={invest}
                alt="TheDifferentiator"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="bg-white lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] m-0 m-auto py-[9px] lg:py-[17px]">
            <h1 className="lg:font-bold font-[600] lg:text-[18px] leading-[30px] text-[12px] text-[#CC9C4A]">
              About /
              <span className="lg:font-semibold font-[700] text-black">
                {" "}
                Investment Approach
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] lg:border-b-[2px] border-b-[1px] border-[#CC9C4A] opacity-[100%] pt-[22px] lg:pt-[77px] lg:pb-[90px] pb-[36px] m-0 m-auto py-20">
            <h1 className="lg:font-extrabold lg:text-[52px] lg:leading-[62px] font-[800] leading-[35px] text-[26px] text-[#CC9C4A]">
              <span className=" font-light font-[300]">Why</span> Technical
              Analysis?
            </h1>

            <div className="lg:pt-[58px] pt-[36px] flex lg:flex-row flex-col lg:justify-between">
              <div className="mx-auto lg:w-[40%] lg:mr-[80px]">
                <div className="lg:block hidden">
                  <Image
                    src={value}
                    alt="TheDifferentiator"
                    width={277}
                    height={230}
                  />
                </div>
                <div className="lg:hidden">
                  <Image
                    src={value}
                    alt="TheDifferentiator"
                    width={148}
                    height={122}
                  />
                </div>
              </div>
              <div className="lg:w-[60%]  text-left">
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[26px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  While the stock markets are becoming irrational due to
                  increasing market anomalies, the classical theory of efficient
                  markets is at risk. These abnormalities can be explained by
                  rising psychological and emotional factors in the stock
                  markets, namely behavioural economics. The growing influences
                  from the behavioural factors resulted from the unpredictable
                  economic, social and political variables.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] mt-[26px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  The unanticipated variables have affected and will continue to
                  impact the global financial markets in the forthcoming years.
                  Relying purely on the traditional investment approaches might
                  be inefficacious as no psychological component is involved in
                  the analysis.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] mt-[26px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Undoubtedly, technical analysis is a study of mass psychology
                  by analysing historical data from trading activities. It is an
                  effective tool for better understanding, explaining
                  irrationalities and validating the expected trends in
                  financial markets, irrespective of market conditions.
                </p>
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] mt-[26px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Thus, a structured and systematised technical analysis model
                  with disciplined trading rules and strategies will
                  consistently beat the market in the long run with a higher
                  positive absolute return. Not only it adds value to the
                  fundamental or quantitative approach, but also it can be used
                  as a mainstream investment approach.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[1200px] border-b-[4px] lg:border-b-[6px] border-[#CC9C4A] opacity-[100%] pt-[36px] lg:pt-[71px] pb-[36px] lg:pb-[70px] m-0 m-auto py-20">
            <h1 className="lg:font-extrabold font-[700] lg:text-[52px] lg:leading-[62px] text-[26px] leading-[35px] text-[#CC9C4A]">
              <span className="lg:font-light font-[300]">Why</span> BASE?
            </h1>

            <div className="lg:flex">
              <div className="lg:w-[65%]">
                <div className="flex  lg:font-light lg:text-[28px] lg:leading-[38px] font-[300] text-[18px] leading-[24px] mt-[37px] text-[#CC9C4A]">
                  <div className="lg:hidden">
                    <Image
                      src={model}
                      alt="TheDifferentiator"
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="self-end ml-[16px] pb-4 lg:hidden">
                    BASE Time-Price-Pattern Technical Model
                  </p>
                  <p className="hidden lg:block">
                    BASE Time-Price-Pattern Technical Model
                  </p>
                </div>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[6px] lg:mt-[25px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  BASE employs a proprietary technical analysis model that
                  analyses various self-developed technical indicators. This
                  model combines three main dimensions (Time, Price, Pattern) to
                  form an expected roadmap of both short-term (hours to days)
                  and long-term (months to years) and serve as validators across
                  each other to minimise errors. While models and indicators
                  cannot wholly predict the economy and markets, this model is
                  designed to support the investment decision process and
                  portfolio management for mitigating subjectivity.
                </p>
              </div>
              <div className=" w-[35%] hidden lg:block">
                <div className=" flex justify-center">
                  <Image
                    src={model}
                    alt="TheDifferentiator"
                    width={242}
                    height={222}
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex mt-[36px] lg:mt-[84px]">
              <div className="lg:w-[65%]">
                <div className="flex  lg:font-light lg:text-[28px] lg:leading-[38px] font-[300] text-[18px] leading-[24px] mt-[37px] text-[#CC9C4A]">
                  <div className="lg:hidden">
                    <Image
                      src={active}
                      alt="TheDifferentiator"
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="self-end ml-[16px] pb-4 lg:hidden">
                    Active Monitoring with Automation
                  </p>
                  <p className="hidden lg:block">
                    Active Monitoring with Automation
                  </p>
                </div>
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[6px] lg:mt-[25px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  With many indicators and dimensions to be examined and
                  validated, human monitoring can be error-prone and introduce
                  personal bias. BASE utilises technology and automation heavily
                  for 24-hour monitoring of different asset classes to ensure
                  consistent, unbiased and timely decisions and actions are
                  performed under a constantly changing market environment.{" "}
                </p>
              </div>
              <div className="w-[35%] hidden lg:block">
                <div className=" flex justify-center">
                  <Image
                    src={active}
                    alt="TheDifferentiator"
                    width={242}
                    height={222}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-[80px] pt-[50px] pb-[123px] lg:pb-[175px] bg-[#F0F0F0]">
          <a href="/the-solutions">
            <div className="w-[204px] h-[68px] lg:w-[278px] lg:h-[90px] bg-[#E04403] flex justify-center float-right">
              <div className="self-center">
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  See
                </p>
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  The Solutions
                </p>
              </div>
              <div className="ml-2 lg:ml-[40px] self-center">
                <Image src={Arrow} width={48} height={69} />
              </div>
            </div>
          </a>
        </div>
      </ThemeProvider>
      <Button />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default investmentApproach;
