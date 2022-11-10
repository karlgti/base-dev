import React from "react";
import Image from "next/image";
import Link from "next/link";
import mypic from "../public/img/banner/BAM_Pic5.gif";
import Footer from "../components/footer";
import Button from "../components/backToTop";
import Header from "../components/TeamHeader";
import SeeTheDiff from "components/seeTheDiff";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Team() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#CBC3BB] w-full flex flex-col  items-center">
        <div className="lg:max-w-[1440px] lg:px-[144px]">
          <Header />
          <div className="pt-[8rem] lg:pb-9">
            <div className="flex flex-col lg:flex-row items-center">
              <h1 className="font-light hidden lg:block	lg:text-[48px] lg:leading-[60px] lg:text-white">
                Focused <br />
                Encouraged
                <br />
                Broad-minded.
              </h1>
              <div className="lg:ml-[600px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="font-light pb-[15px] lg:hidden text-[33px] leading-[36px] text-white">
                Focused <br />
                Encouraged
                <br />
                Broad-minded.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center ">
        <div className="pr-[1000px] hidden lg:block max-w-[1440px] ">
          <div className="py-[17px] flex ">
            <Link className="lg:text-slate-100	mr-1" href="/">
              {
                <h1 className="lg:text-[#CBC3BB] font-semibold	lg:text-[18px] lg:leading-[30px] mr-1">
                  About /
                </h1>
              }
            </Link>
            {
              <h1 className="lg:text-black font-semibold	lg:text-[18px] lg:leading-[30px]">
                Our Team
              </h1>
            }
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center ">
        <div className="lg:px-[144px] px-[7%] lg:max-w-[1440px] ">
          <div className="pb-[65px]"></div>
          <div className="lg:flex">
            <div className="relative lg:mr-10 pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
              <span className="font-semibold	lg:text-[22px] lg:leading-[30px] lg:text-[#E04403]">
                Founder and Managing Partner
              </span>
              <span className="mt-1 font-extrabold pb-20 lg:text-[45px] lg:leading-[56px]">
                Chris Leung
              </span>
              <span className="absolute bottom-[23px] font-light lg:text-[20px] lg:leading-[30px]">
                c.leung@bam.com.hk
              </span>
            </div>

            <div className="relative pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
              <p className="font-normal	lg:text-[18px]  lg:leading-[28px] lg:text-justify">
                Chris founded BASE and is responsible for the portfolio
                management and investment strategies since 2012. Chris has over
                22 years of investment experience specialised in value
                investing.
              </p>
              <p className="font-normal	lg:text-[18px] mt-2 lg:leading-[28px] lg:text-justify">
                Prior to founding BASE, Chris held senior portfolio manager
                positions at several international investment management firms
                for over 10 years. During this time, he was involved in the
                acquisition of asset management business as a senior investment
                committee member.
              </p>
              <p className="font-normal	lg:text-[18px] mb-14 mt-2 lg:leading-[28px] lg:text-justify">
                Chris received a Bachelor of Arts (Honours) in Finance from the
                Idaho State University.
              </p>
              <span className="absolute italic bottom-[23px] lg:text-grey lg:text-sm">
                <p className="font-extralight	lg:text-[18px] lg:leading-[28px] lg:text-justify">
                  "XXXX"
                </p>
              </span>
            </div>
          </div>

          <div className="lg:flex mt-[50px]">
            <div className="relative lg:mr-10 pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
              <span className="font-semibold	lg:text-[22px] lg:leading-[30px] lg:text-[#E04403]">
                Managing Partner
              </span>
              <span className="mt-1 font-extrabold pb-20 lg:text-[45px] lg:leading-[56px]">
                Askin Leung
              </span>
              <span className="absolute bottom-[23px] font-light lg:text-[20px] lg:leading-[30px]">
                askinleung@bam.com.hk
              </span>
            </div>

            <div className="relative pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
              <p className="font-normal	lg:text-[18px]  lg:leading-[28px] lg:text-justify">
                Askin manages the development of technical models and the
                research in technology related assets and investing processes at
                BASE.
              </p>
              <p className="font-normal	lg:text-[18px] mt-2 lg:leading-[28px] lg:text-justify">
                Prior to joining BASE, Askin spent nearly two decades in the
                FinTech industry, specialising in asset management business
                processes and enterprise systems. Askin has held General Manager
                and Manager Director positions in the last 13 years, directing
                its APAC business from front to back processes.
              </p>
              <p className="font-normal	lg:text-[18px] mb-14 mt-2 lg:leading-[28px] lg:text-justify">
                Askin received a Bachelor of Arts (Honours) in Computing from
                the Hong Kong Polytechnic University and a Master in Finance
                (major in Risk Management) from the University of Hong Kong.
              </p>
              <span className="absolute italic bottom-[23px] lg:text-grey lg:text-sm">
                <p className="font-extralight	lg:text-[18px] lg:leading-[28px] lg:text-justify">
                  "XXX"
                </p>
              </span>
            </div>
          </div>

          <div className="lg:flex mt-[50px]">
            <div className="relative lg:mr-10 pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
              <span className="font-semibold	lg:text-[22px] lg:leading-[30px] lg:text-[#E04403]">
                Managing Partner
              </span>
              <span className="mt-1 font-extrabold pb-20 lg:text-[45px] lg:leading-[56px]">
                Selina Sze
              </span>
              <span className="absolute bottom-[23px] font-light lg:text-[20px] lg:leading-[30px]">
                selinasze@bam.com.hk
              </span>
            </div>

            <div className="relative pt-[25px] border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
              <p className="font-normal	lg:text-[18px]  lg:leading-[28px] lg:text-justify">
                Selina is responsible for BASE’s business operations and the
                brand strategy development and implementation.
              </p>
              <p className="font-normal	lg:text-[18px] mt-2 lg:leading-[28px] lg:text-justify">
                Prior to joining BASE, Selina spent over a decade serving
                multi-billion dollars global asset advisers and regional
                start-up fund house as senior operations executive, managing the
                areas of corporate development, business process optimisation
                and investment administration.
              </p>
              <p className="font-normal	lg:text-[18px] mb-14 mt-2 lg:leading-[28px] lg:text-justify">
                Selina received a Bachelor of Commerce from the University of
                Melbourne and a Master of Business Administration from the EU
                Business School.
              </p>
              <span className="absolute italic bottom-[23px] lg:text-grey lg:text-sm">
                <p className="font-extralight	lg:text-[18px] lg:leading-[28px] lg:text-justify">
                  "Investors pay us to take investment risks, not operational
                  risks."
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] flow-root pb-[68px]">
        <div className="hidden lg:block mt-[153px]">
          <Button />
        </div>
        <div className="mt-[53px]">
          <SeeTheDiff />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
