import React from "react";
import Arrow from "../public/img/Arrow.png";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SeeTheDiff = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <a href="/theDifferentiator">
        <button className="bg-[#00953B] w-[384px] p-[42px] h-[168px] text-white flex float-right">
          <div className=" font-black text-left text-[30px] leading-[38px]">
            <p> See The</p>
            <p>Differentiator</p>
          </div>
          <div className=" my-auto pl-[40px]">
            <Image src={Arrow} />
          </div>
        </button>
      </a>
    </ThemeProvider>
  );
};

export default SeeTheDiff;
