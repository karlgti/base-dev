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

        <div className="bg-[#CC9C4A] px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                Expect the Unexpected,
              </h1>
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                And Never Be Surprised.
              </h1>
            </div>

            <div className="self-center py-[10px]">
              <Image
                src={invest}
                alt="TheDifferentiator"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="bg-white px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto py-[17px]">
            <h1 className="font-bold text-[18px] leading-[30px] text-[#CC9C4A]">
              About /
              <span className="font-semibold text-black">
                {" "}
                Investment Approach
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] px-[144px]">
          <div className="max-w-[1200px] border-b-[2px] border-[#CC9C4A] opacity-[100%] pt-[77px] pb-[70px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[52px] leading-[62px] text-[#CC9C4A]">
              <span className="font-light">Why</span> Technical Analysis?
            </h1>

            <div className="pt-[77px] flex justify-between">
              <div className="w-[40%] mr-[80px]">
                <Image
                  src={value}
                  alt="TheDifferentiator"
                  width={280}
                  height={254}
                />
              </div>
              <div className="w-[60%]  text-left">
                <p className="font-normal text-[16px] leading-[28px] text-[#000000]">
                  While the stock markets are becoming irrational due to
                  increasing market anomalies, the classical theory of efficient
                  markets is at risk. These abnormalities can be explained by
                  rising psychological and emotional factors in the stock
                  markets, namely behavioural economics. The growing influences
                  from the behavioural factors resulted from the unpredictable
                  economic, social and political variables.
                </p>

                <p className="font-normal text-[16px] leading-[28px] text-[#000000] mt-5">
                  The unanticipated variables have affected and will continue to
                  impact the global financial markets in the forthcoming years.
                  Relying purely on the traditional investment approaches might
                  be inefficacious as no psychological component is involved in
                  the analysis.
                </p>

                <p className="font-normal text-[16px] leading-[28px] text-[#000000] mt-5">
                  Undoubtedly, technical analysis is a study of mass psychology
                  by analysing historical data from trading activities. It is an
                  effective tool for better understanding, explaining
                  irrationalities and validating the expected trends in
                  financial markets, irrespective of market conditions.
                </p>
                <p className="font-normal text-[16px] leading-[28px] text-[#000000] mt-5">
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
          <div className="max-w-[1200px] border-b-[6px] border-[#CC9C4A] opacity-[100%] pt-[71px] pb-[70px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[52px] leading-[62px] text-[#CC9C4A]">
              <span className="font-light">Why</span> BASE?
            </h1>

            <div className="flex">
              <div className="w-[65%]">
                <h1 className="font-light text-[28px] leading-[38px] mt-[37px] text-[#CC9C4A]">
                  BASE Time-Price-Pattern Technical Model
                </h1>
                <p className="font-normal text-[16px] leading-[28px] mt-[25px]">
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
              <div className="w-[35%] flex justify-center">
                <Image
                  src={model}
                  alt="TheDifferentiator"
                  width={242}
                  height={222}
                />
              </div>
            </div>

            <div className="flex mt-[84px]">
              <div className="w-[65%]">
                <h1 className="font-light text-[28px] leading-[38px] mt-[37px] text-[#CC9C4A]">
                  Active Monitoring with Automation
                </h1>
                <p className="font-normal text-[16px] leading-[28px] mt-[25px]">
                  With many indicators and dimensions to be examined and
                  validated, human monitoring can be error-prone and introduce
                  personal bias. BASE utilises technology and automation heavily
                  for 24-hour monitoring of different asset classes to ensure
                  consistent, unbiased and timely decisions and actions are
                  performed under a constantly changing market environment.{" "}
                </p>
              </div>
              <div className="w-[35%] flex justify-center">
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

        <div className="pt-[80px] pb-[175px] bg-[#F0F0F0]">
          <a href="/the-solutions">
            <div className="w-[278px] h-[90px] bg-[#E04403] flex justify-center float-right">
              <div className="self-center">
                <p className="font-bold text-[22px] leading-[28px] text-white">
                  See
                </p>
                <p className="font-bold text-[22px] leading-[28px] text-white">
                  The Solutions
                </p>
              </div>
              <div className="ml-[40px] self-center">
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
