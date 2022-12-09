import React, { useState } from "react";
import Header from "../components/ProcessHeader";
import Footer from "components/footer";
import Image from "next/image";
import invest from "../public/img/banner/BAM_Pic3.gif";
import value from "../public/img/Artboard 72@2x 1.png";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import bull from "../public/img/Market info.png";
import bear from "../public/img/Market info 3.png";
import rightArrow from "../public/img/Arrow1.png";
import ProductTypes from "components/productTypes";
import Button from "../components/backToTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductTypesMobile from "components/ProductTypesMobile";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function theSolutions() {
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header />

        <div className="bg-[#E04403] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                Discover the Undiscovered,
              </h1>
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                With a Disciplined Approach.
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
            <h1 className="lg:font-bold font-[600] lg:text-[18px] leading-[30px] text-[12px] text-[#E04403]">
              About /
              <span className="lg:font-semibold font-[700] text-black">
                {" "}
                The Solutions
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] lg:border-b-[6px] border-b-[1px] border-[#E04403] opacity-[100%] pt-[22px] lg:pt-[77px] pb-[70px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[26px] leading-[35px] lg:text-[52px] lg:leading-[62px] text-[#E04403]">
              <span className="font-light">Investment</span> Strategy?
            </h1>

            <div className=" pt-[34px] lg:pt-[77px] flex lg:flex-row flex-col justify-between">
              <div className="hidden lg:block lg:w-[40%] mr-[80px]">
                <Image
                  src={value}
                  alt="TheDifferentiator"
                  width={300}
                  height={238}
                />
              </div>
              <div className="lg:hidden flex">
                <div className="mx-auto">
                  <Image
                    src={value}
                    alt="TheDifferentiator"
                    width={150}
                    height={122}
                  />
                </div>
              </div>
              <div className="lg:w-[60%] pt-[38px] lg:pt-0 text-left">
                <h1 className="font-light text-[18px] leading-[24px]  lg:text-[28px] lg:leading-[38px] text-[#E04403]">
                  BASE Hurricane Asset Rotation Strategy
                </h1>

                <p className="lg:font-normal lg:text-[16px] pt-[12.2px] lg:pt-0 lg:leading-[28px] text-[#000000] text-[15px] leading-[25px] font-[400]">
                  Deploying the BASE Technical Model and long-short investing,
                  this strategy aims to generate positive absolute returns in
                  the five major asset classes that take advantage of different
                  asset classes experiencing bull and bear markets in different
                  global economic cycles.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[39px] lg:mt-[48px] mx-auto">
                <div className="">
                  {isShown1 && (
                    <Image
                      src={bull}
                      width={"550px"}
                      height={"567px"}
                      onMouseEnter={() => setIsShown1(true)}
                      onMouseLeave={() => setIsShown1(false)}
                    />
                  )}
                </div>

                <div className="">
                  {!isShown1 && (
                    <Image
                      src={bear}
                      width={"550px"}
                      height={"567px"}
                      onMouseEnter={() => setIsShown1(true)}
                      onMouseLeave={() => setIsShown1(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:max-w-[1200px] border-b-[6px] border-[#E04403] opacity-[100%] pt-[36px] lg:pt-[71px] pb-[60px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[26px] leading-[35px] lg:text-[52px] lg:leading-[62px] text-[#E04403]">
              <span className="font-light">Product</span> Types
            </h1>

            <div className="border-b-[2px] hidden lg:block border-[#E04403] pb-[88px]">
              <ProductTypes />
            </div>

            <div className="border-b-[1px] lg:hidden border-[#E04403] pb-[36px]">
              <ProductTypesMobile />
            </div>

            <div className="mt-[52px]">
              <h1 className="lg:font-normal font-[300] text-[18px] leading-[24px] lg:text-[24px] lg:leading-[34px] text-[#E04403]">
                For more details, <br />
                Please contact our professional advisors.
              </h1>
              <a href="/contact">
                <button
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                  className="mt-[26px] w-[170px] h-[58px] bg-[#E04403] text-white font-bold text-[14px] leading-[17px]"
                >
                  {!isShown && <p>Contact us</p>}
                  {isShown && (
                    <div className="flex justify-between mx-[31.5px]">
                      <div className="self-center">
                        <p>Contact us</p>
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
        </div>

        <div className="lg:pt-[80px] pt-[50px] pb-[123px] lg:pb-[175px] bg-[#F0F0F0]">
          <a href="/our-team">
            <div className="w-[204px] h-[68px] lg:w-[278px] lg:h-[90px] bg-[#CBC3BB] flex justify-center float-right">
              <div className="self-center">
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                See Our Team
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

export default theSolutions;
