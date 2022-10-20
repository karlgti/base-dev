import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
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

export default function BlogHeader() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subOpen, subSetOpen] = React.useState(false);

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
    background: "#4D008C",
    borderBottom: 3,
    position: "absolute",
    width: "100%",
  };

  const borderStyle = {
    borderColor: "white",
    border: 8,
    p: 12,
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
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, pl: 6 }}
            component="div"
          >
            <a href="/">
              <Image src={mypic} alt="Base Asset Management" />
            </a>
          </Typography>
          <div className="border-l-4 border-r-4 p-[2rem]">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }), borderStyle }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="p-4">
            <LoginButton />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: drawerHeight,
            boxSizing: "border-box",
          },
          "& .MuiListItemText-primary": {
            fontSize: 30,
            fontWeight: 800,
          },
          "& .MuiListItemText-secondary": {
            fontSize: 17,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
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
              <ListItemButton sx={{ pl: 4 }} href="/theDifferentiator">
                <ListItemText secondary="The Differentiator" />
              </ListItemButton>
              <br />
              <ListItemButton sx={{ pl: 4 }} href="/invest">
                <ListItemText secondary="Investment Philosophy" />
              </ListItemButton>
              <br />

              <ListItemButton sx={{ pl: 4 }} href="/process">
                <ListItemText secondary="Investment Process" />
              </ListItemButton>
              <br />

              <ListItemButton sx={{ pl: 4 }} href="/team">
                <ListItemText secondary="Our Team" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <div className="px-[3rem]">
            <ListItemButton href="/blog">
              <ListItemText primary="Insight" />
            </ListItemButton>
          </div>
          <Divider />

          <div className="px-[3rem]">
            <ListItemButton href="/contactUs">
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </div>
        </List>

        <Divider />

        <div className="fixed bottom-16 flex justify-center items-center pb-[2rem] font-bold px-[3rem]">
          {["Disclaimers"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
