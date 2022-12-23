import React from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic5.gif";
import linkedin from "../public/img/SocialMedia_Icon_07.png";
import Footer from "../components/footer";
import Button from "../components/backToTop";
import Header from "../components/Header";
import Arrow from "../public/img/Artboard 69@2x 1.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Team() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <div className="w-full">
      <ThemeProvider theme={theme}>
        <Header bg={"#cbc3bb !important"} />

        <div className="bg-[#CBC3BB] lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
            <div className="self-center">
              <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                Focused. <br />
                Encouraged.
                <br />
                Broad-minded.{" "}
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

            <div className="self-center lg:hidden py-[22px]">
              <Image
                src={mypic}
                alt="TheDifferentiator"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        <div className="bg-white lg:px-[144px] px-[5%]">
          <div className="lg:max-w-[1200px] m-0 m-auto py-[9px] lg:py-[17px]">
            <h1 className="lg:font-bold font-[600] lg:text-[18px] leading-[30px] text-[12px] text-[#CBC3BB]">
              About /
              <span className="lg:font-semibold font-[700] text-black">
                {" "}
                Our Team
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-[#F0F0F0] lg:px-[144px] px-[5%]">
          <div className="max-w-[1200px] pt-[34px] lg:pt-[81px] m-0 m-auto">
            <div className="lg:flex">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Founder and Managing Partner
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Chris Leung
                </span>
                <div className="absolute bottom-[23px] hidden lg:block font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/chris-leung-base/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>

                <div className="absolute top-[50px] lg:hidden right-0 font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/chris-leung-base/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-[#CBC3BB] md:flex-grow pb-10">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Chris has been responsible for portfolio management and
                  investment strategies since BASE’s inception in 2012. Chris
                  has over 27 years of investment experience specialising in
                  value investing.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Prior to founding BASE, Chris held senior portfolio manager
                  positions at several international investment management firms
                  for over 14 years.
                </p>
                <p className="font-normal	font-[400] text-[15px] mt-[16px] leading-[25px] lg:text-[16px] mb-20 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Chris received a Bachelor of Arts (Honours) in Finance from
                  the Idaho State University.
                </p>
                <span className="absolute font-[200] text-[20px] leading-[25px] italic bottom-[23px] lg:text-grey lg:text-sm">
                  <p className="font-extralight	lg:text-[24px] lg:leading-[28px] lg:text-left">
                    "Managing the potential downside always comes first, then
                    the calculated upside.”
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex mt-[51px]">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Managing Partner
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Askin Leung
                </span>
                <div className="absolute bottom-[23px] hidden lg:block font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/askin-leung-63705629/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>

                <div className="absolute top-[50px] lg:hidden right-0 font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/askin-leung-63705629/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-[#CBC3BB] md:flex-grow pb-10">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Askin manages the development of technical models and the
                  research in digital assets and investing processes at BASE.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Askin spent nearly two decades in the FinTech industry,
                  specialising in asset management business processes and
                  enterprise systems. Askin held General Manager and Manager
                  Director positions in the last 13 years, directing its APAC
                  business from front to back processes.
                </p>
                <p className="font-normal	font-[400] text-[15px] mt-[16px] leading-[25px] lg:text-[16px] mb-20 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Askin received a Bachelor of Arts (Honours) in Computing from
                  the Hong Kong Polytechnic University and a Master in Finance
                  (major in Risk Management) from the University of Hong Kong.
                </p>
                <span className="absolute font-[200] text-[20px] leading-[25px] italic bottom-[23px] lg:text-grey lg:text-sm">
                  <p className="font-extralight	lg:text-[24px] lg:leading-[28px] lg:text-left">
                    "Once you know the starting point, the rest becomes much
                    more trivial.”
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex mt-[51px]">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Managing Partner
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Selina Sze
                </span>
                <div className="absolute bottom-[23px] hidden lg:block font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/selina-sze/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>

                <div className="absolute top-[50px] lg:hidden right-0 font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/selina-sze/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-[#CBC3BB] md:flex-grow pb-10">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Selina is responsible for BASE’s business operations, brand
                  strategy development and overall implementation.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Selina spent over a decade serving multi-billion dollar global
                  asset advisers and regional start-up fund houses as a senior
                  operation executive, managing the areas of corporate
                  development, business process optimisation and investment
                  administration.
                </p>
                <p className="font-normal	font-[400] text-[15px] mt-[16px] leading-[25px] lg:text-[16px] mb-20 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Selina received a Bachelor of Commerce from the University of
                  Melbourne and a Master of Business Administration from the EU
                  Business School.
                </p>
                <span className="absolute font-[200] text-[20px] leading-[25px] italic bottom-[23px] lg:text-grey lg:text-sm">
                  <p className="font-extralight	lg:text-[24px] lg:leading-[28px] lg:text-left">
                    "Investors pay us to take investment risks, not operational
                    risks.”
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex mt-[51px]">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Partner, Head of Risk Management
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Pavina Pavivan
                </span>
                <div className="absolute bottom-[23px] hidden lg:block font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/pavina-pavivan-38902230/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>

                <div className="absolute top-[50px] lg:hidden right-0 font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/pavina-pavivan-38902230/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-[#CBC3BB] md:flex-grow pb-10">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Pavina leads the risk monitoring and performance analysis
                  functions at BASE.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Pavina held portfolio management and investment research
                  positions, including portfolio manager, investment strategist
                  and performance analyst at multiple global investment firms,
                  specialising in investment strategy and quantitative analysis
                  in the last 22 years.
                </p>
                <p className="font-normal	font-[400] text-[15px] mt-[16px] leading-[25px] lg:text-[16px] mb-20 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Pavina received a Bachelor of Arts in Applied Mathematics
                  (major in Physics) and a Master of Science in Applied
                  Mathematics and Engineering Sciences from the Northwestern
                  University.
                </p>
                <span className="absolute font-[200] text-[20px] leading-[25px] italic bottom-[23px] lg:text-grey lg:text-sm">
                  <p className="font-extralight	lg:text-[24px] lg:leading-[28px] lg:text-left">
                    “Peak or trough, opportunities are always there.”
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex mt-[51px]">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Head of Sales and Distributions
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Joe Law
                </span>
                <div className="absolute bottom-[23px] hidden lg:block font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/joelawhp20200630/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>

                <div className="absolute top-[50px] lg:hidden right-0 font-light lg:text-[20px] lg:leading-[30px]">
                  <a href="https://www.linkedin.com/in/joelawhp20200630/">
                    <Image
                      src={linkedin}
                      alt="TheDifferentiator"
                      width={34}
                      height={34}
                    />
                  </a>
                </div>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-[#CBC3BB] md:flex-grow pb-10">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Joe leads the sales development and client relations processes
                  at BASE.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Joe has covered diverse functions, including bonds and
                  equities issuance, secondary market business development and
                  institutional sales in Asia, in the last 30 years. Joe also
                  provided property investment advisory and financial planning
                  services for professional and individual clients.
                </p>
                <p className="font-normal	font-[400] text-[15px] mt-[16px] leading-[25px] lg:text-[16px] mb-20 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Joe received a Bachelor of Commerce and Management (major in
                  Macroeconomics) from the Hitotsubashi University, Tokyo.
                </p>
                <span className="absolute font-[200] text-[20px] leading-[25px] italic bottom-[23px] lg:text-grey lg:text-sm">
                  <p className="font-extralight	lg:text-[24px] lg:leading-[28px] lg:text-left">
                    “I would hasten my escape from the windy storm and tempest.”
                  </p>
                </span>
              </div>
            </div>

            <div className="lg:flex mt-[51px]">
              <div className="relative lg:mr-10 pt-[20px] lg:pt-[25px] lg:border-t-[6px] border-t-[4px] border-b-[1px] border-[#CBC3BB] flex-shrink-0 lg:w-[329px] flex flex-col">
                <span className="font-semibold lg:text-[20px] text-[14px] leading-[30px] lg:leading-[30px] text-[#E04403]">
                  Senior Adviser{" "}
                </span>
                <span className="mt-1 lg:font-extrabold pb-[20px] lg:pb-20 font-[700] text-[26px] leading-[35px] lg:text-[40px] lg:leading-[56px]">
                  Hill Chan
                </span>
              </div>

              <div className="relative pt-[25px] lg:border-t-[6px] lg:border-b-[1px] border-b-[4px] border-[#CBC3BB] md:flex-grow lg:pb-[22px]">
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px]  lg:leading-[28px] lg:text-left">
                  Hill acts as an adviser to BASE with his broad investment
                  industry experience spans across research, portfolio
                  management and trade operations in the last 20 years.
                </p>
                <p className="font-normal font-[400] text-[15px] leading-[25px]	lg:text-[16px] mt-[16px] lg:leading-[28px] lg:text-left">
                  Hill co-founded BASE in 2011 and was the Head of Fundamental
                  Research and co-fund manager of value investing portfolios
                  since 2011. Hill was previously a senior research analyst at a
                  billion-dollar hedge fund and a research analyst at an
                  international investment firm.
                </p>
                <p className="font-normal	font-[400] text-[15px] leading-[25px] lg:text-[16px] mt-[16px] mb-[36px] lg:mb-0 lg:mt-[20px] lg:leading-[28px] lg:text-left">
                  Hill received a Bachelor of Arts in Economics and Finance from
                  the University of Hong Kong and a Master of Arts in Economics
                  with distinction from the Hong Kong University of Science and
                  Technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-[80px] pt-[50px] pb-[123px] lg:pb-[175px] bg-[#F0F0F0]">
          <a href="/our-philosophy">
            <div className="w-[204px] h-[68px] lg:w-[278px] lg:h-[90px] bg-[#00953B] flex justify-center float-right">
              <div className="self-center pl-4">
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  See
                </p>
                <p className="lg:font-bold lg:text-[22px] lg:leading-[28px] font-[700] text-[16px] leading-[20px] text-white">
                  Our Philosophy
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
