import Image from "next/image";
import React from "react";
import Arrowup from "../public/img/Artboard 69@2x 1 copy.png";

const backToTop = () => {
  // The back-to-top button is hidden at the beginning

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      <div
        onClick={scrollToTop}
        className="fixed cursor-pointer z-50 transition delay-300 duration-300 ease-in-out w-[72px] opacity-20 hover:opacity-100 h-[72px] top-auto bottom-0 right-0 bg-black flex"
      >
        <div className="flex items-center">
          <Image src={Arrowup} />
        </div>
      </div>
    </div>
  );
};

export default backToTop;
