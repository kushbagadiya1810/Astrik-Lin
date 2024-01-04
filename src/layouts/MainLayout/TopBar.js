import React, { useState } from "react";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, useLocation } from "react-router-dom";
import star from "../../assets/images/star.svg";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import ProjectIcon from "@mui/icons-material/Science";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { ListItemIcon } from "@mui/material";

const TopBar = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  const isHomeRoute =
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/home";
  const isAboutRoute = location.pathname === "/about";
  const isProjectsRoute = location.pathname === "/project";
  const isContactRoute = location.pathname === "/contact";

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Hidden smDown>
        <Box
          className={`main-header-container header-font ${
            isContactRoute
              ? "contact-header-container"
              : isAboutRoute
              ? "about-header-container"
              : isProjectsRoute
              ? "project-header-container"
              : ""
          }`}
        >
          <Box className="main-header-row">
            <Box
              className="header-logo heading-public-text t-pointer"
              onClick={() => {
                window.location.href = "/home";
              }}
            >
              ASTRIK
            </Box>
            <Box className="header-center-container">
              <NavLink to={"/home"} activeClassName="active-link">
                <Box
                  className={`heading-sans-text ${
                    isHomeRoute ? "active-link" : ""
                  }`}
                >
                  HOME
                </Box>
              </NavLink>
              <NavLink to={"/project"} activeClassName="active-link">
                <Box
                  className={`heading-sans-text ${
                    isProjectsRoute ? "active-link" : ""
                  }`}
                >
                  PROJECTS
                </Box>
              </NavLink>
              <NavLink to={"/about"} activeClassName="active-link">
                <Box
                  className={`heading-sans-text ${
                    isAboutRoute ? "active-link" : ""
                  }`}
                >
                  ABOUT US
                </Box>
              </NavLink>
            </Box>
            <Box
              className="header-right-container"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get in Touch !
            </Box>
          </Box>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box
          className={`main-header-container responsive-header ${
            isContactRoute
              ? "contact-header-container"
              : isAboutRoute
              ? "about-header-container"
              : isProjectsRoute
              ? "project-header-container"
              : ""
          }`}
        >
          <Box className={`header-logo ${drawerOpen ? "drawer-open" : ""}`}>
            <img className="home-img" src={star} alt="" />
          </Box>
          <Box
            className="header-logo t-pointer"
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            ASTRIK
          </Box>
          {drawerOpen ? (
            <IconButton id="account-menu-list" onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton id="account-menu-list" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          )}

          <Drawer
            className="drawer-main-sec"
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
          >
            <List>
              <ListItem>
                <ListItemIcon className="drawer-icon">
                  <img className="drawer-icon" src={star} alt="" />
                </ListItemIcon>
                <ListItemText primary="ASTRIK" />
                <IconButton className="close-icon" onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </ListItem>

              <NavLink to={"/home"} activeClassName="active-link">
                <ListItem
                  onClick={handleDrawerClose}
                  className={`heading-sans-text ${
                    isHomeRoute ? "active-bg-color" : ""
                  }`}
                >
                  <ListItemIcon className="drawer-icon">
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={`heading-sans-text ${
                      isHomeRoute ? "active-link" : ""
                    }`}
                    primary="HOME"
                  />
                </ListItem>
              </NavLink>
              <NavLink to={"/project"} activeClassName="active-link">
                <ListItem
                  onClick={handleDrawerClose}
                  className={`heading-sans-text ${
                    isProjectsRoute ? "active-bg-color" : ""
                  }`}
                >
                  <ListItemIcon className="drawer-icon">
                    <ProjectIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={`heading-sans-text ${
                      isProjectsRoute ? "active-link" : ""
                    }`}
                    primary="PROJECTS"
                  />
                </ListItem>
              </NavLink>
              <NavLink to={"/about"} activeClassName="active-link">
                <ListItem
                  onClick={handleDrawerClose}
                  className={`heading-sans-text ${
                    isAboutRoute ? "active-bg-color" : ""
                  }`}
                >
                  <ListItemIcon className="drawer-icon">
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={`heading-sans-text ${
                      isAboutRoute ? "active-link" : ""
                    }`}
                    primary="ABOUT US"
                  />
                </ListItem>
              </NavLink>
              <NavLink to={"/contact"} activeClassName="active-link">
                <ListItem
                  onClick={handleDrawerClose}
                  className={`heading-sans-text ${
                    isContactRoute ? "active-bg-color" : ""
                  }`}
                >
                  <ListItemIcon className="drawer-icon">
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={`heading-sans-text ${
                      isContactRoute ? "active-link" : ""
                    }`}
                    primary="CONTACT US"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Drawer>
        </Box>
      </Hidden>
    </>
  );
};

export default TopBar;
