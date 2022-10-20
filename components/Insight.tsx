import React from "react";
import Image from "next/image";
import blogone from "../public/img/blogone.png";
import blogtwo from "../public/img/blogtwo.png";

function Insight() {
  return (
    <>
      <div className=" bg-[#f2f2f2] overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-5/12 ">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-8">
                  <h2 className="mb-5 text-6xl md:text-7xl font-heading tracking-px-n leading-tight text-[#4D008C] lg:pb-8">
                    Insights
                  </h2>
                  <div className="max-w-sm  text-gray-600 font-medium leading-relaxed">
                    <p>
                      At BASE, we pride ourselves on being open and transparent
                      with our investors. This means not only providing informed
                      decisions about their portfolios but also sharing our
                      views on market trends and investment opportunities.
                    </p>
                    <p className="mt-3">
                      To that end, we publish online articles to highlight both
                      the risks and the rewards of investing, and we welcome
                      feedback and suggestions. Thank you for investing with us.
                    </p>
                  </div>
                </div>
                <a
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
                  href="#"
                >
                  <button className="hidden lg:block mr-2 font-semibold bg-[#4D008C] text-white p-6 pr-16 pl-16">
                    View more
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full md:flex-1">
              <div className="flex">
                <div className="mx-auto pt-2 border-t-4 lg:border-t-8 border-b-2 lg:border-b-4 border-[#4D008C]">
                  <div className="">
                    <Image src={blogone} alt="Base Asset Management" />
                  </div>
                  <p className="mb-4 font-sans max-w-max text-sm text-black-600 font-semibold uppercase rounded-md">
                    Theme / Topic
                  </p>
                  <a
                    className="max-w-[16rem]  mb-2 inline-block hover:text-gray-800 hover:underline"
                    href="#"
                  >
                    <h3 className="lg:text-xl text-sm font-bold font-heading leading-normal">
                      Oil money pumps up luxury property
                    </h3>
                  </a>
                </div>

                <div className="mx-auto ml-5 pt-2 border-t-4 lg:border-t-8 border-b-2 lg:border-b-4 border-[#4D008C]">
                  <div className="">
                    <Image src={blogtwo} alt="Base Asset Management" />
                  </div>
                  <p className="mb-4 font-sans max-w-max text-sm text-black-600 font-semibold uppercase rounded-md">
                    Theme / Topic
                  </p>
                  <a
                    className="max-w-[16rem]  mb-2 inline-block hover:text-gray-800 hover:underline"
                    href="#"
                  >
                    <h3 className="lg:text-xl text-sm font-bold font-heading leading-normal">
                      Oil money pumps up luxury property
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                className="lg:hidden mt-7 inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
                href="#"
              >
                <button className="mr-2 font-semibold bg-[#4D008C] text-white p-2 pr-5 pl-5">
                  View more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insight;

