import React from "react";
import TermOfUse from "components/TermOfUse";

export default function footer() {
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="flex justify-center items-center lg:justify-between border-separate border-spacing-4 border-b-4 border-t border-[#001B71]">
        <div className="lg:mr-12 lg:pl-16 flex font-black text-[#021B71]">
          <span className="cursor-pointer	text-xs lg:text-xl">
            Base Asset Management Limited
          </span>
        </div>
        <div className="flex justify-center lg:border-l-4 border-[#001B71]">
          <div className="lg:pl-6 border-[#001B71] lg:mr-6 text-[#001B71] p-5">
            <a
              href="mailto:info@base-am.com"
              className="font-bold text-[#001B71] text-xs lg:text-base"
            >
              info@base-am.com
            </a>
          </div>

          <a
            href="https://www.linkedin.com/company/base-am/"
            className="hidden lg:block pr-6 pt-6 text-gray-600"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/BASE_AssetMgmt"
            className="hidden lg:block pr-6 pt-6 text-gray-600"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:mx-6 lg:mr-12 lg:py-10 text-center md:text-left">
        <div className="lg:mr-6 lg:grid lg:grid-1 lg:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          <div>
            <h6
              className="
              pl-[2.5rem]
              font-semibold
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
              text-[#001B71]
              cursor-default
              hidden lg:block
            "
            >
              Copyright 2022 © BASE. All rights reserved.
            </h6>
          </div>

          <div className="lg:mr-6 text-sm p-6 lg:p-0 lg:text-xl lg:py-1 flex lg:justify-end ">
            <p className="lg:border-r-2 border-[#001B71] text-[#001B71] cursor-pointer lg:pr-4">
              Privacy Policy
            </p>
            <p className="pl-4 text-[#001B71]"></p>
            <TermOfUse />
          </div>
        </div>
      </div>
    </footer>
  );
}
