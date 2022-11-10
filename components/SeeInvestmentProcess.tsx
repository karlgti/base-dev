import React from "react";
import Arrow from "../public/img/Arrow.png";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SeeInvestmentProcess = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <a href="/process">
        <button className="bg-[#E04403] w-[268px] h-[110px] p-[24.6px] lg:w-[384px] lg:p-[42px] lg:h-[168px] text-white flex float-right">
          <div className=" font-black text-left text-[20px] leading-[26px] lg:text-[30px] lg:leading-[38px]">
            <p> See Investment</p>
            <p>Process</p>
          </div>
          <div className=" my-auto pl-[40px]">
            <Image src={Arrow} />
          </div>
        </button>
      </a>
    </ThemeProvider>
  );
};

export default SeeInvestmentProcess;
