import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

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

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button onClick={handleClickOpen}>
          <Typography
            color="common.white"
            sx={{
              fontStyle: "Inter",
              textTransform: "capitalize",
              marginRight: "5px",
            }}
          >
            Investor
          </Typography>
          <Typography
            color="common.white"
            sx={{ fontStyle: "Inter", textTransform: "lowercase" }}
          >
            login
          </Typography>
        </Button>
      </ThemeProvider>

      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            right: 0,
            top: 63,
            marginRight: 0,
            paddingright: 0,
            borderRadius: 0,
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <p
            onClick={handleClose}
            className={"cursor-pointer text-4xl font-extralight"}
          >
            x
          </p>
        </DialogActions>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "267px",
            }}
          >
            <FormControl sx={{mb: 6}}>
              <TextField id="demo-helper-text-aligned" label="Email address" />
              <br />
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label="Password"
              />
            </FormControl>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className="bg-[#021B71]"
              >
                Login
              </Button>
            </ThemeProvider>
          </Box>
        </DialogContent>
        <DialogContentText className="p-6 text-black font-bold text-center">
          Forget passoword
        </DialogContentText>
      </Dialog>
    </React.Fragment>
  );
}
