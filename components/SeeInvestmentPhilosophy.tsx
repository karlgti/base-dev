import React from "react";
import Arrow from "../public/img/Arrow.png";
import Image from "next/image";

const SeeInvestmentPhilosophy = () => {
  return (
    <>
      <button className="bg-[#CC9C4A] w-[384px] p-[42px] h-[168px] text-white flex float-right">
        <div className=" font-black text-left text-[30px] leading-[38px]">
          <p>See Investment</p>
          <p>Philosophy</p>
        </div>
        <div className=" my-auto pl-[40px]">
          <Image src={Arrow} />
        </div>
      </button>
    </>
  );
};

export default SeeInvestmentPhilosophy;
