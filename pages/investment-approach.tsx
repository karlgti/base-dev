import React from "react";
import Header from "../components/Header";
import Footer from "components/footer";
import Image from "next/image";
import invest from "../public/img/banner/BAM_Pic2.gif";
import value from "../public/img/Artboard 60@2x 1.png";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import model from "../public/img/Artboard 70@2x.png";
import active from "../public/img/Artboard 71@2x.png";
import Button from "../components/backToTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function investmentApproach() {
  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header bg={"#cc9c4a !important"} />

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

            <div className="self-center lg:hidden py-[27px]">
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
                  Stock markets nowadays are becoming irrational, inefficient,
                  and unpredictable, making the classical theory of efficient
                  markets at risk. As such, over the past few years, many
                  experienced investors are experiencing difficult time to make
                  a sustainable profit/outperformance solely relying on the
                  traditional mainstream investment strategies.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] mt-[26px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  The trigger for such market anomalies can be explained by the
                  rising of the “behavioural factors” in the stock markets. That
                  said, the stock markets nowadays are more driven by the mass
                  psychology factors, such as human emotions of greed and fears.
                </p>

                <div className="border-[3px] p-[16px] lg:p-[29px] border-[#CC9C4A] mt-[36px] lg:mt-[70px] ">
                  <div className="font-[600] italic lg:text-[18px] text-[15px] leading-[25px] font-[600] lg:leading-[28px]  text-[#CC9C4A]">
                    The growing influences of the behavioural factors resulted
                    from the rising of the unpredictable economic, social and
                    political variables, such as:
                  </div>
                  <br />

                  <div className="text-[#CC9C4A] font-[400] text-[18px] tracking-[7%] leading-[28px] pl-[29px]">
                    <ol>
                      <li>
                        geopolitical conflicts between U.S., Europe, China,
                        Russia, and Taiwan
                      </li>
                      <li>virus outbreak</li>
                      <li>trade war</li>
                      <li>low visibility from central banks</li>
                      <li>regulatory risk in China</li>
                      <li>
                        increasing influencing power from social networking
                        platforms like Gameshop event.
                      </li>
                    </ol>
                    <style jsx>{`
                      ol {
                        counter-reset: list;
                        margin: 0;
                      }

                      ol > li {
                        list-style: none;
                        position: relative;
                      }

                      ol > li:before {
                        counter-increment: list;
                        content: "(" counter(list, lower-roman) ")";
                        position: absolute;
                        left: -1.8em;
                      }
                    `}</style>
                  </div>
                </div>
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] mt-[36px] lg:mt-[70px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  The above unanticipated variables have affected and will
                  continue to impact the global financial markets in the
                  forthcoming years. As such, relying purely on the traditional
                  investment approaches, in which the psychological element is
                  missing, might be inefficacious.
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
                  positive absolute return.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[1200px] border-b-[4px] lg:border-b-[6px] border-[#CC9C4A] opacity-[100%] pt-[36px] lg:pt-[71px] pb-[36px] lg:pb-[70px] m-0 m-auto py-20">
            <h1 className="lg:font-extrabold font-[700] lg:text-[52px] lg:leading-[62px] text-[26px] leading-[35px] text-[#CC9C4A]">
              <span className="lg:font-light font-[300]">Why</span> BASE
              Technical Model?
            </h1>

            <div className="lg:flex">
              <div className="lg:w-[65%]">
                <div className="lg:hidden mt-[29px] flex">
                  <div className="mx-auto">
                    <Image
                      src={model}
                      alt="TheDifferentiator"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>

                <p className="lg:font-normal lg:text-[16px] mt-[23px] lg:mt-[46px] lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  In view of rising tide of irrationality, BASE have
                  self-developed a proprietary technical analysis model called
                  Hurricane Model.
                </p>
                <br />
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  BASE’s Hurricane model analyses multiple self-developed
                  technical indicators which can identify the investment
                  opportunities more timely and accurately.
                </p>
                <br />
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Usually speaking, there are two dimensions on a chart, namely
                  X & Y which represent Price and Time. Most technical analysis
                  models only focus on Price without analysing TIME which we
                  believe is the most important factor of all.
                </p>
                <br />
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Our Hurricane model combines 3 main dimensions:
                  <span className="italic text-[21px] leading-[28px] text-[#CC9C4A] font-[600]">
                    {" "}
                    Pattern, Price and Time
                  </span>
                  <br /> altogether to form roadmap of both long term (years or
                  even decade) and short term (hours to days). These 3 main
                  dimensions can also serve as validators across each other to
                  minimize errors.
                </p>
                <br />
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  The whole tracking process of our model is similar to the
                  tracking system used by the observatory to predict the
                  hurricane pathway. That’s why we named our model Hurricane
                  Model.
                </p>
              </div>

              <div className=" w-[35%] hidden lg:block">
                <div className=" flex justify-center">
                  <Image
                    src={model}
                    alt="TheDifferentiator"
                    width={222}
                    height={222}
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex text-[#CC9C4A] border-[3px] lg:px-0 px-[16px] py-[16px] lg:py-[32px] border-[#CC9C4A] mt-[70px] text-[#CC9C4A]">
              <div className="lg:w-[50%] lg:pr-[32px] lg:pl-[32px] lg:pb-0 pb-[19px]">
                <p className="font-[600] italic text-[18px] leading-[28px]">
                  By using different kinds of systems or modules, the objectives
                  of the observatory systems are to track the hurricane’s
                </p>
                <br />
                <div className="pl-[30px] font-[400] text-[18px] leading-[28px] ">
                  <ol>
                    <li>pathway</li>
                    <li>landfall location</li>
                    <li>landfall time</li>
                  </ol>
                  <style jsx>{`
                    ol {
                      counter-reset: list;
                      margin: 0;
                    }

                    ol > li {
                      list-style: none;
                      position: relative;
                    }

                    ol > li:before {
                      counter-increment: list;
                      content: counter(list, lower-roman) ")";
                      position: absolute;
                      left: -1.5em;
                    }
                  `}</style>
                </div>
              </div>
              <div className=" border-t-[3px] lg:border-t-[0px] lg:pt-[0px] pt-[19px] lg:border-l-[3px] border-[#CC9C4A]">
                <div className="lg:pr-[32px] lg:pl-[32px]">
                <p className="font-[600] italic text-[18px] leading-[28px]">
                    while our technical model’s <br /> objectives are to track
                  </p>
                  <br />
                  <br />
                  <div className="pl-[30px] font-[400] text-[18px] leading-[28px]">
                    <ol>
                      <li>the price trend and pattern</li>
                      <li>target price level</li>
                      <li>
                        the time when such target price level will be reached
                      </li>
                    </ol>
                    <style jsx>{`
                      ol {
                        counter-reset: list;
                        margin: 0;
                      }

                      ol > li {
                        list-style: none;
                        position: relative;
                      }

                      ol > li:before {
                        counter-increment: list;
                        content: counter(list, lower-roman) ")";
                        position: absolute;
                        left: -1.5em;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex mt-[36px] lg:mt-[70px]">
              <div className="lg:w-[65%]">
                <div className="lg:hidden mt-[29px] flex">
                  <div className="mx-auto">
                    <Image
                      src={active}
                      alt="TheDifferentiator"
                      width={220}
                      height={220}
                    />
                  </div>
                </div>
                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[22px] lg:mt-[25px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  To increase the accuracy of tracking the above 3 dimensions,
                  the observatory would fine tune their targets constantly after
                  reassessing all the observational data from different systems
                  when the hurricane gets closer and closer. Our Hurricane model
                  does the same. It would fine tune our targets constantly by
                  cross checking all the technical indicators from different
                  technical modules when the asset prices are approaching the
                  targeted time window to minimize the errors and to increase
                  the accuracy of tracking on the 3 dimensions.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[6px] lg:mt-[25px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  With so many indicators & dimensions flying around, monitoring
                  by human can be error prone and introduce personal bias. Our
                  Hurricane model leverages technology and automation to ensure
                  consistency, no-biased and timely decision, and trade plans
                  can be performed across different assets and asset classes.
                  Such automation and consistency is not just utilized on entry,
                  but throughout the entire investment life cycle to monitor
                  risk actively to minimize downside risk.
                </p>

                <p className="lg:font-normal lg:text-[16px] lg:leading-[28px] lg:mt-0 mt-[6px] lg:mt-[25px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  With such a systematic active monitoring process which can
                  capture the investment opportunities more timely and
                  accurately, our Hurricane model is able to increase our
                  overall chance of winning. Remember, trading is all about
                  probability!
                </p>
              </div>
              <div className="w-[35%] hidden lg:block">
                <div className=" flex justify-center">
                  <Image
                    src={active}
                    alt="TheDifferentiator"
                    width={220}
                    height={220}
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
