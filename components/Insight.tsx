import React from "react";
import Image from "next/image";
import blogone from "../public/img/blogone.png";
import blogtwo from "../public/img/blogtwo.png";

function Insight() {
  return (
    <>
      <div className="overflow-hidden" >
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

                  <div className="flex justify-between">
                    <div>
                      <a
                        href="https://www.linkedin.com/company/base-am/"
                        className="text-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="linkedin-in"
                          className="w-5 lg:w-7"
                          role="img"
                          xmlns="http://ww6.w3.org/2000/svg"
                          viewBox="0 0 600 600"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="text-xs lg:text-xl">2022-10-17</div>
                  </div>
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
                  <div className="flex justify-between">
                    <div>
                      <a
                        href="https://twitter.com/BASE_AssetMgmt"
                        className="text-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="twitter"
                          className="w-5 lg:w-7"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 600 600"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="text-xs lg:text-xl">2022-10-17</div>
                  </div>
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
