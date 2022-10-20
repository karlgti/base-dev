import React from "react";
import Image from "next/image";
import logo from "../public/img/banner/diff.png";
import invest from "../public/img/banner/invest.png";
import process from "../public/img/banner/process.png";

function banners() {
  return (
    <>
      <div className="pricing-table-2 relative top-[-6rem] lg:top-[-15rem] md:py-0">
        <div className="container mx-auto pricing-plans lg:flex md:mt-0">
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="flex lg:block bg-[#00953b] pricing-plan border-white text-left max-w-[80%] mx-auto hover:border-white-600 transition-colors duration-300">
              <div className="p-6 lg:py-8">
                <h4 className="text-2xl lg:text-4xl font-medium leading-tight text-white lg:mb-2">
                  The <br />
                  Differentiator
                </h4>
              </div>
              <div className="pricing-amount my-auto pt-4 pr-4 pb-4 lg:p-6 transition-colors duration-300 lg:mt-6 lg:py-4 lg:ml-14">
                <button className="text-xl text-white lg:py-2 lg:px-6 rounded hover:bg-white-700 transition-colors duration-300">
                  <a href="/theDifferentiator">
                    <Image src={logo} alt="Base Asset Management" />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="flex lg:block bg-[#CC9C4A] pricing-plan border-white text-left max-w-[80%] mx-auto hover:border-white-600 transition-colors duration-300">
              <div className="p-6 lg:py-8">
                <h4 className="text-2xl lg:text-4xl font-medium leading-tight text-white lg:mb-2">
                  Investment <br />
                  Philosophy
                </h4>
              </div>
              <div className="pricing-amount my-auto p-3 lg:p-6 transition-colors duration-300 lg:mt-6 lg:py-4 lg:ml-14">
                <button className="text-xl text-white lg:py-2 lg:px-6 rounded hover:bg-white-700 transition-colors duration-300">
                  <a href="/theDifferentiator">
                    <Image src={invest} alt="Base Asset Management" />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="flex lg:block bg-[#E04403] pricing-plan border-white text-left max-w-[80%] mx-auto hover:border-white-600 transition-colors duration-300">
              <div className="p-6 lg:py-8">
                <h4 className="text-2xl lg:text-4xl font-medium leading-tight text-white lg:mb-2">
                  Investment <br />
                  Process
                </h4>
              </div>
              <div className="pricing-amount my-auto p-3 lg:p-6 transition-colors duration-300 lg:mt-6 lg:py-4 lg:ml-14">
                <button className="text-xl text-white lg:py-2 lg:px-6 rounded hover:bg-white-700 transition-colors duration-300">
                  <a href="/theDifferentiator">
                    <Image src={process} alt="Base Asset Management" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default banners;

