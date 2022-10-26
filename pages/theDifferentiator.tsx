import React from "react";
import Header from "components/TheDifferentiatorHeader";
import Image from "next/image";
import mypic from "../public/img/Differentiator_icon_1.gif";
import value from "../public/img/value.png";
import vision from "../public/img/vision.png";
import Button from "../components/backToTop";
import SeeInvestmentPhilosophy from "components/SeeInvestmentPhilosophy";
import Footer from "components/footer";
import Link from "next/link";

export default function TheDifferentiator() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  return (
    <div>
      <Header />
      <section className="bg-white">
        <div className="bg-[#00953b]">
          <div className="lg:flex lg:items-center py-[11vh] justify-center">
            <div className="lg:mr-[1.5rem] lg:w-1/2 white-txt">
              <h1 className="text-xl lg:text-5xl text-white font-inter">
                Not to Go Back is to Advance;
                <br />
                Here’s when Old meets New.
              </h1>
            </div>
            <Image
              className="object-cover mx-auto w-max lg:mx-6 lg:w-1/2 lg:pl-32 rounded-xl lg:h-96"
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
              <h1 className="text-[#00953B] font-bold text-md lg:text-2xl mr-1">
                About /
              </h1>
            }
          </Link>
          {
            <h1 className="text-black font-bold text-md lg:text-2xl">
              The Differentiator
            </h1>
          }
        </div>
        <div className="border-t-[6px] border-b-[3px] border-[#00953b] mb-6">
          <div className="lg:flex px-[2%] lg:py-14">
            <div className=" relative lg:w-[50%] lg:py-10 ml-14">
              <h1 className="lg:hidden lg:text-6xl text-[#00953B]">
                Our
                <div className="font-extrabold">Value</div>
              </h1>
              <Image src={vision} alt="TheDifferentiator" />
            </div>
            <h1 className="hidden lg:block absolute lg:text-6xl text-[#00953B]">
              Our
              <div className="font-extrabold">Value</div>
            </h1>
            <div className="lg:w-[50%]">
              <p className="lg:text-4xl text-justify">
                We are passionate about discovering all possible investing
                opportunities that offer the potential risk-adjusted returns in
                an efficient and effective manner.
              </p>
              <div className="flex mt-14 grid grid-cols-2 gap-14">
                <p className="lg:text-xl text-left">
                  We are committed to using the
                  <span className=" mx-2 text-[#00953B] italic lg:text-2xl">
                    latest technology
                  </span>
                  to identify market trends and behaviour and benefit from these
                  anomalies before they become the norm.
                </p>
                <p className="lg:text-xl text-left">
                  We strive to strike an utmost appropriate balance between
                  <span className=" mx-2 text-[#00953B] italic lg:text-2xl">
                    human source intelligence and signal intelligence
                  </span>
                  without sacrificing potential upside.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t-[6px] border-b-[3px] border-[#00953b] mb-6">
          <div className="lg:flex px-[2%] lg:py-14">
            <div className="relative lg:w-[50%] lg:pt-40 ml-14">
              <h1 className=" lg:text-6xl text-[#00953B]">
                Our
                <div className="font-extrabold">Value</div>
              </h1>
              <Image src={value} alt="TheDifferentiator" />
            </div>
            <h1 className="hidden lg:block absolute lg:text-6xl text-[#00953B]">
              Our
              <div className="font-extrabold">Value</div>
            </h1>
            <div className="lg:w-[50%]">
              <p className="lg:text-4xl text-justify">
                We are passionate about discovering all possible investing
                opportunities that offer the potential risk-adjusted returns in
                an efficient and effective manner.
              </p>
              <div className="flex mt-14 grid grid-cols-2 gap-14">
                <p className="lg:text-xl text-left">
                  We are committed to using the
                  <span className=" mx-2 text-[#00953B] italic lg:text-2xl">
                    latest technology
                  </span>
                  to identify market trends and behaviour and benefit from these
                  anomalies before they become the norm.
                </p>
                <p className="lg:text-xl text-left">
                  We strive to strike an utmost appropriate balance between
                  <span className=" mx-2 text-[#00953B] italic lg:text-2xl">
                    human source intelligence and signal intelligence
                  </span>
                  without sacrificing potential upside.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flow-root">
        <div className="hidden lg:block mt-40">
          <Button />
        </div>
        <div className="hidden lg:block mt-14">
          <SeeInvestmentPhilosophy />
        </div>
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}
