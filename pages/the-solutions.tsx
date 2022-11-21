import React from "react";
import Header from "../components/ProcessHeader";
import Footer from "components/footer";
import Image from "next/image";
import invest from "../public/img/banner/BAM_Pic3.gif";
import value from "../public/img/Artboard 72@2x 1.png";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import ProductTypes from "components/productTypes";
import Button from "../components/backToTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function hover(element) {
  element.setAttribute("src", "http://dummyimage.com/100x100/eb00eb/fff");
}

function unhover(element) {
  element.setAttribute("src", "http://dummyimage.com/100x100/000/fff");
}

function theSolutions() {
  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header />

        <div className="bg-[#E04403] px-[144px]">
          <div className="max-w-[1200px] m-0 m-auto pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                Discover the Undiscovered,
              </h1>
              <h1 className="font-light text-[48px] leading-[60px] text-white">
                With a Disciplined Approach.{" "}
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
            <h1 className="font-bold text-[18px] leading-[30px] text-[#E04403]">
              About /
              <span className="font-semibold text-black"> The Solutions</span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] px-[144px]">
          <div className="max-w-[1200px] border-b-[6px] border-[#E04403] opacity-[100%] pt-[77px] pb-[70px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[52px] leading-[62px] text-[#E04403]">
              <span className="font-light">Investment</span> Strategy?
            </h1>

            <div className="pt-[77px] flex justify-between">
              <div className="w-[40%] mr-[80px]">
                <Image
                  src={value}
                  alt="TheDifferentiator"
                  width={300}
                  height={238}
                />
              </div>
              <div className="w-[60%]  text-left">
                <h1 className="font-light text-[28px] leading-[38px] text-[#E04403]">
                  BASE TPP Asset Rotation Strategy
                </h1>

                <p className="font-normal text-[16px] leading-[28px] mt-[25px] text-[#000000]">
                  Deploying the BASE TPP Model and long-short investing, this
                  strategy aims to generate positive absolute returns in the
                  five major asset classes that take advantage of different
                  asset classes experiencing bull and bear markets in different
                  global economic cycles.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] border-b-[6px] border-[#E04403] opacity-[100%] pt-[71px] pb-[60px] m-0 m-auto py-20">
            <h1 className="font-extrabold text-[52px] leading-[62px] text-[#E04403]">
              <span className="font-light">Product</span> Types
            </h1>

            <div className="border-b-[2px] border-[#E04403] pb-[88px]">
              <ProductTypes />
            </div>

            <div className="mt-[52px]">
              <h1 className="font-normal text-[24px] leading-[34px] text-[#E04403]">
                For more details, <br />
                Please contact our professional advisors.
              </h1>
              <button className="mt-[26px] w-[170px] h-[58px] bg-[#E04403] text-white font-bold text-[14px] leading-[17px]">
                Contact us
              </button>
            </div>
          </div>
        </div>

        <div className="pt-[80px] pb-[175px] bg-[#F0F0F0]">
          <a href="/our-team">
            <div className="w-[278px] h-[90px] bg-[#CBC3BB] flex justify-center float-right">
              <div className="self-center">
                <p className="font-bold text-[22px] leading-[28px] text-white">
                  See Our Team
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

export default theSolutions;
