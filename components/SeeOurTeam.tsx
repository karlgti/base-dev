import React from "react";
import Arrow from "../public/img/Arrow.png";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SeeOurTeam = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <a href="/team">
      <button className="bg-[#CBC3BB] w-[268px] h-[110px] p-[32px] lg:w-[384px] lg:p-[42px] lg:h-[168px] text-white flex float-right">
          <div className=" font-black text-left text-[20px] leading-[26px] lg:text-[30px] lg:leading-[38px]">
            <p> See Our Team</p>
          </div>
          <div className=" my-auto pl-[40px]">
            <Image src={Arrow} />
          </div>
        </button>
      </a>
    </ThemeProvider>
  );
};

export default SeeOurTeam;
