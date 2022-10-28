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
import LoginButton from "../components/loginButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const drawerWidth = 330;
const drawerHeight = 900;

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
    background: "#001772 !important",
    borderColor: "white !important",
    borderBottom: 3,
    position: "absolute",
    width: "100%",
  };

  const borderStyle = {
    borderColor: "white !important",
    border: 8,
    p: 12,
  };

  const drawerWidth = {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 330,
      height: 650,
      boxSizing: "border-box",
      marginTop: 13.2,
    },
    "& .MuiListItemText-primary": {
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
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <CssBaseline />
      <AppBar sx={headerStyle} open={open}>
        <Toolbar>
          <div className="mx-auto pl-6 lg:pr-0 lg:ml-6 py-[1.8rem] lg:py-0">
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              <a href="/">
                <Image src={mypic} alt="Base Asset Management" />
              </a>
            </Typography>
          </div>
          <div className="border-l-4 border-r-4 p-[2rem]">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && {}), borderStyle }}
            >
              <MenuIcon
                sx={{
                  color: "white !important",
                }}
              />
            </IconButton>
          </div>
          <div className="p-4 hidden lg:block">
            <LoginButton />
          </div>
        </Toolbar>
      </AppBar>
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
          <Button
            className="lg:hidden text-[#CC9C4A]"
            onClick={handleClickOpen1}
          >
            <Typography
              color="#CC9C4A"
              sx={{ fontSize: "25px", fontWeight: 700 }}
              className="py-3 px-[3.5rem]"
            >
              Login
            </Typography>
          </Button>
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
                    Login
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
              className="px-[3rem]"
            />
            {subOpen ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
          <Collapse
            in={subOpen}
            timeout="auto"
            unmountOnExit
            className="px-[3rem]"
          >
            <List component="div" disablePadding>
              <ListItemButton href="/theDifferentiator">
                <ListItemText secondary="The Differentiator" />
              </ListItemButton>
              <br />
              <ListItemButton href="/invest">
                <ListItemText secondary="Investment Philosophy" />
              </ListItemButton>
              <br />

              <ListItemButton href="/process">
                <ListItemText secondary="Investment Process" />
              </ListItemButton>
              <br />

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
              className="px-[3rem]"
            />
          </ListItemButton>
          <Divider />
          <ListItemButton href="/contactUs">
            <ListItemText
              sx={{ fontSize: "100px" }}
              primary="Contacts"
              className="px-[3rem]"
            />
          </ListItemButton>
          <Divider />
        </List>

        <div className="px-[3rem] justify-center text-2xl cursor-pointer items-center pb-[2rem] font-bold pt-44 lg:pt-60">
          <p>Disclaimers</p>
        </div>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
