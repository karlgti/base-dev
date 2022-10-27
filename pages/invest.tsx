import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/backToTop";
import invest from "../public/img/banner_phil.png";
import Footer from "components/footer";
import Header from "../components/InvestHeader";
import SeeInvestmentProcess from "components/SeeInvestmentProcess";

function Invest() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const menuItems = [{ title: "Home", url: "#" }];
  return (
    <>
      <Header />
      <section className="bg-[#CC9C4A] pt-14">
        <div className="bg-[#CC9C4A]">
          <div className="flex px-5 lg:items-center py-[11vh] justify-center">
            <div className="lg:mr-[1.5rem] lg:w-1/2 white-txt">
              <h1 className="text-xl lg:text-5xl text-white font-inter">
                Discover the Undiscovered with <br />
                Disciplined Investment Approach
              </h1>
            </div>
            <Image
              className="object-cover lg:w-max lg:mx-6 lg:w-1/2 lg:pl-32 rounded-xl lg:h-96"
              src={invest}
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
              <h1 className="text-[#CC9C4A] font-bold text-md lg:text-2xl mr-1">
                About /
              </h1>
            }
          </Link>
          {
            <h1 className="text-black font-bold text-md lg:text-2xl">
              Investment Philosophy
            </h1>
          }
        </div>
        <div className="lg:max-w-[50%]">
          Our investment philosophy is built on the balance between achieving
          investment returns and managing portfolio risks. By taking a
          disciplined approach to investing, we can deliver consistent results
          over the long term. [xxxx….]
        </div>
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="p-6 bg-white rounded-lg border shadow-md">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">How to quickly deploy a static website</a>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers influence both web
                  designers and developers.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4"></div>

                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                    </svg>
                    Article
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers influence both web
                  designers and developers.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4"></div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <div className="flow-root">
        <div className="hidden lg:block mt-40">
          <Button />
        </div>
        <div className="hidden lg:block mt-14">
          <SeeInvestmentProcess />
        </div>
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </>
  );
}
export default Invest;
