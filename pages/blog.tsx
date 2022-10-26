import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/blog_img.png";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/BlogHeader";

export default function Blog() {
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
  return (
    <>
      <Header />

      <section className="bg-white">
        <div className="bg-[#4D008C]">
          <div className="lg:flex lg:items-center py-[11vh] justify-center">
            <div className="mr-[1.5rem] lg:w-1/2 white-txt">
              <h1 className="text-4xl text-white font-inter">
                Trends. Views. Observations. <br />
                And more.
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

      <section className="bg-white-800 hidden lg:block text-black-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <h1 className="text-black-100 font-bold text-2xl">
            Featured Insight
          </h1>
          <div className="flex">
            <div className="relative w-[72%] mr-14 border-b-2 border-[#4D008C]">
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="block sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
              >
                <img
                  src="https://source.unsplash.com/random/480x360"
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-white-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    Noster tincidunt reprimique ad pro
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    February 19, 2021
                  </span>
                  <p>
                    Ei delenit sensibus liberavisse pri. Quod suscipit no nam.
                    Est in graece fuisset, eos affert putent doctus id.
                  </p>
                </div>
              </a>
            </div>
            <div className="relative w-[28%]">
              <div className="border-b-2 border-[#4D008C]">
                <div className=" border-b-4 border-[#4D008C] mb-3"></div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/480x360?1"
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      January 21, 2021
                    </span>
                  </div>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/480x360?1"
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      January 21, 2021
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?1"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 21, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>
            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?2"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 22, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?3"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 23, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?4"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 24, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?5"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>

            <div>
              <div className=" border-b-4 border-[#4D008C] mb-3"></div>

              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?6"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 26, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-white-900 text-black-400 font-bold"
            >
              Load more
            </button>
          </div>
        </div>
      </section>
      <div className="mb-14">
        <Button />
      </div>

      <Footer />
    </>
  );
}
