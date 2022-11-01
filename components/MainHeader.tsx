import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import mypic from "../public/img/headerLogo.png";
import menuButton from "../public/img/icons8-menu-32.png";
import LoginButton from "../components/loginButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
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

export default function MainHeader() {
  const theme = useTheme();
  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [subOpen, subSetOpen] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
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
    background: "#011c6f !important",
    borderColor: "white !important",
    borderBottom: 1,
    width: "100%",
    "& .css-hyum1k-MuiToolbar-root": {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  };
  const box = {
    width: "100%",
    "header.MuiPaper-root": {
      boxShadow: "none",
    },
  };

  const drawerWidth = {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 308,
      height: 750,
      boxSizing: "border-box",
      marginTop: 11.8,
    },
    "& .MuiListItemText-primary": {
      paddingTop: "21px",
      paddingBottom: "21px",
      fontSize: 30,
      fontWeight: 800,
    },
    "& .MuiListItemText-secondary": {
      fontSize: 17,
    },
    ["@media (max-width:780px)"]: {
      "& .MuiDrawer-paper": {
        width: "70%",
        marginTop: 0,
      },
    },
  };

  const loginBox = {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    ["@media (max-width:780px)"]: {
      width: "100vw",
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
        <CssBaseline />
        <HideOnScroll>
          <AppBar sx={headerStyle} open={open}>
            <Toolbar>
              <div className="mx-auto lg:ml-[57px]">
                <a href="/">
                  <Image src={mypic} alt="Base Asset Management" />
                </a>
              </div>
              <div className="lg:border-l-[1px] lg:border-r-[1px] lg:p-[2rem]">
                <a onClick={handleDrawerOpen}>
                  <Image
                    src={menuButton}
                    className="cursor-pointer"
                    alt="Base Asset Management"
                  />
                </a>
              </div>
              <div className="px-10 hidden lg:block">
                <LoginButton />
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

        <Drawer sx={drawerWidth} anchor="right" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? <CloseIcon /> : <CloseIcon />}
            </IconButton>
          </DrawerHeader>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Divider />
            {/*<Button
              className="text-[#CC9C4A]"
              onClick={handleClickOpen1}
            >
              <Typography
                color="#CC9C4A"
                sx={{ fontSize: "25px", fontWeight: 700 }}
                className="py-3 px-[1rem] "
              >
                Investor login
              </Typography>
            </Button>*/}
            <Dialog
              sx={{
                "& .MuiDialog-paper": {
                  position: "absolute",
                  right: 0,
                  top: -30,
                  marginRight: 0,
                  paddingright: 0,
                  borderRadius: 0,
                },
              }}
              open={open1}
              onClose={handleClose1}
            >
              <DialogActions>
                <p
                  onClick={handleClose1}
                  className={"cursor-pointer p-3 text-4xl font-extralight"}
                >
                  x
                </p>
              </DialogActions>
              <DialogContent>
                <Box noValidate component="form" sx={loginBox}>
                  <FormControl sx={{ paddingLeft: 6 }}>
                    <TextField
                      id="demo-helper-text-aligned"
                      label="Email address"
                    />
                    <br />
                    <TextField
                      id="demo-helper-text-aligned-no-helper"
                      label="Password"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      className="mt-10 bg-[#CC9C4A]"
                    >
                      login
                    </Button>
                    <DialogContentText className=" p-6 text-[#CC9C4A] font-bold text-center">
                      Forget passoword
                    </DialogContentText>
                  </FormControl>
                </Box>
              </DialogContent>
            </Dialog>

            <Divider />
            <ListItemButton onClick={handleClick}>
              <ListItemText
                sx={{ fontSize: "100px" }}
                primary="About"
                className=""
              />
              {subOpen ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            <Collapse in={subOpen} timeout="auto" unmountOnExit className=" ">
              <List component="div" disablePadding>
                <ListItemButton href="/theDifferentiator">
                  <ListItemText secondary="The Differentiator" />
                </ListItemButton>
                <ListItemButton href="/invest">
                  <ListItemText secondary="Investment Philosophy" />
                </ListItemButton>
                <ListItemButton href="/process">
                  <ListItemText secondary="Investment Process" />
                </ListItemButton>
                <ListItemButton href="/team">
                  <ListItemText secondary="Our Team" />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
            <ListItemButton href="/blog">
              <ListItemText
                sx={{ fontSize: "100px" }}
                primary="Insight"
                className=" "
              />
            </ListItemButton>
            <Divider />
            <ListItemButton href="/contactUs">
              <ListItemText
                sx={{ fontSize: "100px" }}
                primary="Contacts"
                className=" "
              />
            </ListItemButton>
            <Divider />
          </List>
          <ThemeProvider theme={theme1}>
            <div className="absolute bottom-0 px-[1rem] text-xl cursor-pointer pb-[2rem] font-bold">
              <p>Disclaimers</p>
            </div>
          </ThemeProvider>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </ThemeProvider>
  );
}
