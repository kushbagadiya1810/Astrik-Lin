import React from "react";
import { Navigate } from "react-router-dom";

// LAYOUT
import MainLayout from "../src/layouts/MainLayout";

import HomeView from "./views/pages/application/Home";
import ProjectsView from "./views/pages/application/Projects";
import AboutView from "./views/pages/application/About";
import ContactUsView from "./views/pages/application/ContactUs";

// USER ROUTES
export const adminRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/project",
        element: <ProjectsView />,
      },
      {
        path: "/about",
        element: <AboutView />,
      },
      {
        path: "/contact",
        element: <ContactUsView />,
      },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
