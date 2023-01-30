import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import circuit from "../public/img/circuit.png";
import error from "../public/img/error.png";
import notfound from "../public/img/notfound.png";
import line from "../public/img/line.png";

const NotFound = () => {
  return (
    <div className="w-full">
      <Header bg={"#001B71 !important"} />
      <div className="flex flex-col lg:flex-row justify-center items-center mt-28 lg:mt-36 mb-6">
        <div className="px-4 lg:px-0">
          <Image src={circuit} alt="pic" width={550} height={700} />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="mt-10 mb-12">
           
              <Image src={error} alt="pic" width={220} height={30} />
     
          </div>
          <div className="mt-1">
            {" "}
            <Image src={notfound} alt="pic" width={280} height={100} />
          </div>
          <div className="mt-1">
            <Image src={line} alt="pic" width={250} height={8} />
          </div>

          <div className="text-4xl text-[#001B71] font-medium mt-8">
            Page not found
          </div>

          <Link href="/" passHref>
            <button className="bg-[#4D008C] text-white text-sm py-4 px-10 mt-14 font-semibold cursor-pointer">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
