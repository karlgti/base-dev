import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Dialog from "@mui/material/Dialog";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import mypic from "../public/img/headerLogo.png";
import menuButton from "../public/img/BAM_Website_Testing_Artboard 12@2x 1.png";
import LoginButton from "./loginButton";
import ExpandLess from "../public/img/Arrow3.png";
import ExpandMore from "../public/img/Arrow2.png";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Dis from "components/TnC";

const drawerWidth = 330;

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MainHeader({ bg }) {
  const theme = useTheme();
  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [subOpen, subSetOpen] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    subSetOpen(!subOpen);
  };

  const headerStyle = {
    background: `${bg}`,
    borderColor: "white !important",
    borderBottom: 1,
    "& .MuiToolbar-root ": {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    ["@media (min-width: 600px)"]: {
      "& .MuiToolbar-root ": {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  };

  const radius = {
    ".MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  };

  const box = {
    "header.MuiPaper-root": {
      boxShadow: "none",
    },
  };

  const drawerWidth = {
    flexShrink: 0,
    ".MuiListItemButton-root": {
      paddingTop: 0,
      paddingBottom: 0,
    },
    "& .MuiDrawer-paper": {
      width: 303.5,
      height: 680,
      boxSizing: "border-box",
      marginTop: 11.9,
    },
    "& .MuiListItemText-primary": {
      paddingTop: "25px",
      paddingBottom: "25px",
      fontSize: 30,
      fontWeight: 800,
      color: "black",
    },
    "& .MuiListItemText-secondary": {
      paddingTop: "1px",
      paddingBottom: "1px",
      fontSize: "18px",
      fontWeight: 300,
      color: "black",
    },
    ["@media (max-width:1024px)"]: {
      "& .MuiDrawer-paper": {
        width: "70%",
        marginTop: 0,
      },
      ".MuiListItemText-primary": {
        paddingTop: "12px",
        paddingBottom: "12px",
        fontSize: 20,
        fontWeight: 800,
      },
      "& .MuiListItemText-secondary": {
        fontSize: 12,
      },
    },
  };

  const theme1 = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme1}>
      <Box sx={box}>
        <HideOnScroll>
          <AppBar sx={headerStyle} open={open}>
            <Toolbar>
              <div className="mx-auto mt-1.5 lg:ml-[57px] py-[20px] lg:py-[0px]">
                <a href="/">
                  <Image src={mypic} alt="Base Asset Management" />
                </a>
              </div>
              <div className="lg:border-l-[1px] hidden lg:block absolute lg:relative right-[15px] lg:border-r-[1px] lg:px-[30.5px] lg:pt-[29.5px] lg:pb-[22.5px]">
                {" "}
                <a onClick={handleDrawerOpen}>
                  <Image
                    src={menuButton}
                    className="cursor-pointer"
                    alt="Base Asset Management"
                  />
                </a>
              </div>

              <div className="lg:border-l-[1px] lg:hidden absolute lg:relative right-[15px] lg:border-r-[1px] lg:px-[30.5px] lg:pt-[29.5px] lg:pb-[22.5px]">
                {" "}
                <a onClick={handleDrawerOpen}>
                  <Image
                    src={menuButton}
                    width={15}
                    height={18}
                    className="cursor-pointer"
                    alt="Base Asset Management"
                  />
                </a>
              </div>

              <div className="pl-[31.5px] pr-[43.5px] hidden lg:block">
                <LoginButton text={"common.white"} />
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Drawer
          sx={drawerWidth}
          anchor="right"
          open={open}
          onClose={handleClose}
        >
          <DrawerHeader>
            <div onClick={handleDrawerClose} className="cursor-pointer mr-2">
              <img src="img/Cancel.png" width={25} height={25} />
            </div>
          </DrawerHeader>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <div className="lg:hidden">
              <Divider style={{ background: "#001b71" }} />

              <div
                className="text-[#CC9C4A] px-[12px] py-[8px]"
                onClick={handleClickOpen1}
              >
                <Typography
                  color="#CC9C4A"
                  sx={{ fontSize: "20px", fontWeight: 800 }}
                  className="py-[18px] px-[5px]"
                >
                  Investor login
                </Typography>
              </div>
            </div>

            <Dialog
              sx={{
                "& .MuiDialog-paper": {
                  position: "absolute",
                  top: -33,
                },
              }}
              open={open1}
            >
              <DialogActions
                sx={{
                  position: "relative",
                  borderBottom: 1,
                  borderColor: "#021E7B",
                }}
              >
                <div className="mx-auto my-[15px]">
                  <img src="img/blue_Header_Logo.png" />
                </div>
                <div
                  onClick={handleClose1}
                  className="absolute right-[15px] top-[15px]"
                >
                  <img src="img/Cancel.png" />
                </div>
              </DialogActions>
              <DialogContent
                sx={{
                  width: "100vw",
                }}
              >
                <Box>
                  <FormControl fullWidth={true}>
                    <div className="text-[20px] text-[#CC9C4A] leading-[30px] font-[800] m-auto mb-[18px]">
                      Investor login
                    </div>

                    <TextField
                      fullWidth
                      id="demo-helper-text-aligned"
                      label="Email address"
                    />
                    <br />
                    <TextField
                      fullWidth
                      id="demo-helper-text-aligned-no-helper"
                      label="Password"
                    />
                    <br />

                    <button className="w-full h-[50px] bg-[#021B71] text-white font-[700] text-[14px] leading-[17px]">
                      <div className="justify-around mx-[31.5px]">
                        <div className="self-center">
                          <p>Login</p>
                        </div>
                      </div>
                    </button>
                    <br />
                  </FormControl>
                </Box>
              </DialogContent>
            </Dialog>

            <Divider style={{ background: "#001b71" }} />
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="About" className="" />
              {subOpen ? (
                <Image src={ExpandMore} className="cursor-pointer" />
              ) : (
                <Image src={ExpandLess} className="cursor-pointer" />
              )}
            </ListItemButton>

            <Collapse in={subOpen}>
              <ListItemButton href="/our-philosophy">
                <ListItemText secondary="Our Philosophy" />
              </ListItemButton>
              <ListItemButton href="/investment-approach">
                <ListItemText secondary="Investment Approach" />
              </ListItemButton>
              <ListItemButton href="/the-solutions">
                <ListItemText secondary="The Solutions" />
              </ListItemButton>
              <ListItemButton href="/our-team">
                <ListItemText secondary="Our Team" />
              </ListItemButton>
              <div className="pb-[30px]"></div>
            </Collapse>
            <Divider style={{ background: "#001b71" }} />

            <ListItemButton href="/insights">
              <ListItemText
                sx={{ fontSize: "100px" }}
                primary="Insights"
                className=" "
              />
            </ListItemButton>
            <Divider style={{ background: "#001b71" }} />

            <ListItemButton href="/contact">
              <ListItemText
                sx={{ fontSize: "100px" }}
                primary="Contact Us"
                className=" "
              />
            </ListItemButton>
            <Divider style={{ background: "#001b71" }} />
          </List>
          <div>
            <Dis
              nameprop={"Disclaimers"}
              idx={0}
              css={
                "absolute bottom-[0px] pl-4 lg:pl-[15px] leading-[76px] lg:text-[18px] text-[14px] cursor-pointer font-bold"
              }
              upper={undefined}
              lower={undefined}
            />
          </div>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
