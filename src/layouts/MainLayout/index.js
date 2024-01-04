import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import TopBar from "./TopBar";

const DashboardLayout = () => {
  const location = useLocation();

  const isAboutRoute = location.pathname === "/about";
  const isProjectsRoute = location.pathname === "/project";
  const isContactRoute = location.pathname === "/contact";

  return (
    <>
      <ToastContainer style={{ padding: "5px" }} limit={1} />
      <TopBar />

      <div
        className={`layout-wrapper ${
          isContactRoute
            ? "contact-layout-wrapper"
            : isAboutRoute
            ? "about-layout-wrapper"
            : isProjectsRoute
            ? "project-layout-wrapper"
            : "home-layout-wrapper"
        }`}
      >
        <div className="body-background">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
