import React from "react";
import Image from "next/image";
import Link from "next/link";
import mypic from "../public/img/team.png";
import Footer from "../components/footer";
import Button from "../components/backToTop";
import Header from "../components/TeamHeader";
import SeeTheDiff from "components/seeTheDiff";

export default function Team() {
  return (
    <div>
      <Header />

      <section className="bg-white">
        <div className="bg-[#CBC3BB]">
          <div className="lg:flex lg:items-center py-[11vh] justify-center">
            <div className="mr-[1.5rem] lg:w-1/2 white-txt">
              <h1 className="text-5xl text-white font-inter">
                Focused <br />
                Encouraged
                <br />
                Broad-minded.
              </h1>
            </div>
            <Image
              className="object-cover w-max lg:mx-6 lg:w-1/2 pl-32 rounded-xl h-72 lg:h-96"
              src={mypic}
              alt="TheDifferentiator"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>

      <div className="px-[10%]">
        <div className="py-16 flex">
          <Link className="text-slate-100	mr-1" href="/">
            {
              <h1 className="text-[#CBC3BB] font-bold text-2xl mr-1">
                About /
              </h1>
            }
          </Link>
          {<h1 className="text-black font-bold text-2xl">Our Team</h1>}
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="lg:py-24 mx-auto">
            <div className="flex flex-wrap md:flex-nowrap">
              <div className="relative mr-10 border-t-8 border-b-2 border-[#CBC3BB] pb-14 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-[#E04403]">
                  Founder and Managing Partner
                </span>
                <span className="mt-1 text-black text-4xl font-bold">
                  Chris Leung
                </span>
                <span className="absolute bottom-0 text-black text-sm">
                  c.leung@bam.com.hk
                </span>
              </div>

              <div className="relative border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
                <p className="leading-relaxed text-justify">
                  Chris founded BASE and is responsible for the portfolio
                  management and investment strategies since 2012. Chris has
                  over 22 years of investment experience specialised in value
                  investing.
                </p>
                <p className="leading-relaxed text-justify pt-2">
                  Prior to founding BASE, Chris held senior portfolio manager
                  positions at several international investment management firms
                  for over 10 years. During this time, he was involved in the
                  acquisition of asset management business as a senior
                  investment committee member.
                </p>
                <p className="leading-relaxed text-justify pt-2">
                  Chris received a Bachelor of Arts (Honours) in Finance from
                  the Idaho State University.
                </p>
                <span className="absolute italic bottom-0 text-grey text-sm">
                  "XXXX"
                </span>
              </div>
            </div>

            <div className="pt-14 flex flex-wrap md:flex-nowrap">
              <div className="relative mr-10 border-t-8 border-b-2 border-[#CBC3BB] pb-14 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-[#E04403]">
                  Managing Partner
                </span>
                <span className="mt-1 text-black text-4xl font-bold">
                  Askin Leung
                </span>
                <span className="absolute bottom-0 text-black text-sm">
                  askinleung@bam.com.hk
                </span>
              </div>

              <div className="relative border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
                <p className="leading-relaxed text-justify">
                  Askin manages the development of technical models and the
                  research in technology related assets and investing processes
                  at BASE.
                </p>
                <p className="leading-relaxed text-justify pt-2">
                  Prior to joining BASE, Askin spent nearly two decades in the
                  FinTech industry, specialising in asset management business
                  processes and enterprise systems. Askin has held General
                  Manager and Manager Director positions in the last 13 years,
                  directing its APAC business from front to back processes.
                </p>
                <p className="leading-relaxed text-justify pt-2">
                  Askin received a Bachelor of Arts (Honours) in Computing from
                  the Hong Kong Polytechnic University and a Master in Finance
                  (major in Risk Management) from the University of Hong Kong.
                </p>
                <span className="absolute italic bottom-0 text-grey text-sm">
                  "XXXX"
                </span>
              </div>
            </div>

            <div className="pt-14 flex flex-wrap md:flex-nowrap">
              <div className="relative mr-10 border-t-8 border-b-2 border-[#CBC3BB] pb-14 md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-[#E04403]">
                  Managing Partner
                </span>
                <span className="mt-1 text-black text-4xl font-bold">
                  Selina Sze
                </span>
                <span className="absolute bottom-0 text-black text-sm">
                  selinasze@bam.com.hk
                </span>
              </div>

              <div className="relative border-t-8 border-b-2 border-[#CBC3BB] md:flex-grow pb-10">
                <p className="leading-relaxed text-justify">
                  Selina is responsible for BASE’s business operations and the
                  brand strategy development and implementation.
                </p>
                <p className="leading-relaxed  text-justify pt-2">
                  Prior to joining BASE, Selina spent over a decade serving
                  multi-billion dollars global asset advisers and regional
                  start-up fund house as senior operations executive, managing
                  the areas of corporate development, business process
                  optimisation and investment administration.
                </p>
                <p className="leading-relaxed text-justify pt-2">
                  Selina received a Bachelor of Commerce from the University of
                  Melbourne and a Master of Business Administration from the EU
                  Business School.
                </p>
                <span className="absolute italic bottom-0 text-grey text-sm">
                  "Investors pay us to take investment risks, not operational
                  risks.”
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flow-root">
        <div className="hidden lg:block">
          <Button />
        </div>
        <div className="hidden lg:block mt-14">
          <SeeTheDiff />
        </div>
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}
