import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import rightArrow from "../public/img/Arrow1.png";
import { useState } from "react";
import Image from "next/image";

export default function MaxWidthDialog({ text }) {
  const [open, setOpen] = React.useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },

    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#021B71",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });

  const radius = {
    ".MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button onClick={handleClickOpen}>
          <Typography
            color={text}
            sx={{
              fontStyle: "Inter",
              textTransform: "capitalize",
              marginRight: "5px",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Investor Login
          </Typography>
        </Button>
      </ThemeProvider>

      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            right: 0,
            top: 63.5,
            marginRight: 0,
            paddingright: 0,
            borderRadius: 0,
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <div onClick={handleClose} className={"cursor-pointer"}>
            <img src="img/Cancel.png" width={22} height={22} />
          </div>
        </DialogActions>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "255px",
            }}
          >
            <FormControl sx={radius}>
              <TextField
                onClick={() => setIsShown1(false)}
                id="demo-helper-text-aligned"
                label="Email address"
              />
              <br />
              <TextField
                onClick={() => setIsShown1(false)}
                id="demo-helper-text-aligned-no-helper"
                label="Password"
              />
            </FormControl>
            <br />

            <ThemeProvider theme={theme}>
              <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="w-full  bg-[#021B71] text-white font-[700] text-[14px] leading-[17px]"
                onClick={() => setIsShown1(true)}
              >
                {!isShown && (
                  <div className="flex justify-center py-[20px]">
                    <p>Login</p>
                  </div>
                )}
                {isShown && (
                  <div className="flex justify-center py-[15.7px]">
                    <div className="self-center">
                      <p>Login</p>
                    </div>
                    <div className="pt-1 pl-5">
                      <Image src={rightArrow} />
                    </div>
                  </div>
                )}
              </div>

              {!isShown1 && <div className="h-2 mt-[10px]"> </div>}
              {isShown1 && (
                <div className="h-2 font-[400] text-[13px] leading-[17px] mt-[10px] mx-auto text-[#E04403]">
                  Incorrect Email address / Password
                </div>
              )}
            </ThemeProvider>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
