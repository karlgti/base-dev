import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import menuButton from "../public/img/icons8-collapse-arrow-64.png";

const backToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="flex opacity-25 w-[144px] h-[50px] flex-end mr-0 mx-auto back-to-top text-white bg-[#505758] p-2"
          >
            <Image
              src={menuButton}
              width={30}
              height={30}
              className="cursor-pointer"
              alt="Base Asset Management"
            />

            <p className="font-bold	text-[15px] my-auto"> Back to top</p>
          </button>
        )}
      </ThemeProvider>
    </div>
  );
};

export default backToTop;
