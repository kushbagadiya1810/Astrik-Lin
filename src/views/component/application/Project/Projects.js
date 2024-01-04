import React, { useEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Project1 from "../../../../assets/images/project1.png";
import Project2 from "../../../../assets/images/project2.png";
import Project3 from "../../../../assets/images/project3.png";
import Project4 from "../../../../assets/images/project4.png";
import Vector from "../../../../assets/images/Vector.png";
import "./projects.scss";
import Footer from "../../UI/footer";
import CustomPagination from "../../UI/pagination";

const ProjectsPage = () => {
  const mainWrapperRef = useRef();

  useEffect(() => {
    // Scroll to the top of the main wrapper when the component mounts
    mainWrapperRef.current.scrollIntoView({
      behavior: "smooth",
    });

    // Optionally, you can add a cleanup function to handle scrolling when the component unmounts
    return () => {
      // Add cleanup logic if needed
    };
  }, []);

  return (
    <>
      <Box className="main-wrapper-projects" ref={mainWrapperRef}>
        <Box className="all-projects-container t-pointer">
          <Typography className="heading-projects-text">
            All Projects
          </Typography>
          <p className="text-font">
            Our portfolio showcases a range of stunning, innovative projects
            that exemplify our creativity, expertise, and attention to detail.
            Each project is a unique blend of thoughtful design, cutting-edge
            technology, and flawless execution, and every one is a testament to
            our passion for delivering exceptional results. Come see for
            yourself what makes our work truly stand out.
          </p>
          <Divider style={{ backgroundColor: "white" }} />
        </Box>
        <Box className="projects-info-container">
          <Box className="projects-detail-sec">
            <Box className="project-content-sec t-pointer">
              <p className="heading-text">Instatickets</p>
              <p className="title-text">WEB APP & MOBILE APP</p>
              <p className="info-text">
                Say goodbye to long queues and hello to hassle-free ticket
                booking for movies, operas, concerts, and more. With a
                delightful and user-friendly interface, InstaTickets brings joy
                and excitement to your fingertips. Get ready to dive into a
                world of entertainment with just a few taps. Fro..
              </p>
              <p className="info-text" style={{ paddingTop: "84.7px" }}>
                View complete Presentation
                <span>
                  <img
                    className="projects-img t-pointer"
                    style={{ marginLeft: "12.09px" }}
                    src={Vector}
                    alt=""
                  />
                </span>
              </p>
            </Box>
            <Box>
              <img className="projects-img t-pointer" src={Project1} alt="" />
            </Box>
          </Box>
        </Box>
        <Box className="projects-info-container">
          <Box className="projects-detail-sec">
            <Box className="project-content-sec t-pointer">
              <p className="heading-text">Instatickets</p>
              <p className="title-text">WEB APP & MOBILE APP</p>
              <p className="info-text">
                Say goodbye to long queues and hello to hassle-free ticket
                booking for movies, operas, concerts, and more. With a
                delightful and user-friendly interface, InstaTickets brings joy
                and excitement to your fingertips. Get ready to dive into a
                world of entertainment with just a few taps. Fro..
              </p>
              <p className="info-text" style={{ paddingTop: "84.7px" }}>
                View complete Presentation
                <span>
                  <img
                    className="projects-img t-pointer"
                    style={{ marginLeft: "12.09px" }}
                    src={Vector}
                    alt=""
                  />
                </span>
              </p>
            </Box>
            <Box>
              <img className="projects-img t-pointer" src={Project2} alt="" />
            </Box>
          </Box>
        </Box>
        <Box className="projects-info-container">
          <Box className="projects-detail-sec">
            <Box className="project-content-sec t-pointer">
              <p className="heading-text">Instatickets</p>
              <p className="title-text">WEB APP & MOBILE APP</p>
              <p className="info-text">
                Say goodbye to long queues and hello to hassle-free ticket
                booking for movies, operas, concerts, and more. With a
                delightful and user-friendly interface, InstaTickets brings joy
                and excitement to your fingertips. Get ready to dive into a
                world of entertainment with just a few taps. Fro..
              </p>
              <p className="info-text" style={{ paddingTop: "84.7px" }}>
                View complete Presentation
                <span>
                  <img
                    className="projects-img t-pointer"
                    style={{ marginLeft: "12.09px" }}
                    src={Vector}
                    alt=""
                  />
                </span>
              </p>
            </Box>
            <Box>
              <img className="projects-img t-pointer" src={Project3} alt="" />
            </Box>
          </Box>
        </Box>
        <Box className="projects-info-container">
          <Box className="projects-detail-sec">
            <Box className="project-content-sec t-pointer">
              <p className="heading-text">Instatickets</p>
              <p className="title-text">WEB APP & MOBILE APP</p>
              <p className="info-text">
                Say goodbye to long queues and hello to hassle-free ticket
                booking for movies, operas, concerts, and more. With a
                delightful and user-friendly interface, InstaTickets brings joy
                and excitement to your fingertips. Get ready to dive into a
                world of entertainment with just a few taps. Fro..
              </p>
              <p className="info-text" style={{ paddingTop: "84.7px" }}>
                View complete Presentation
                <span>
                  <img
                    className="projects-img t-pointer"
                    style={{ marginLeft: "12.09px" }}
                    src={Vector}
                    alt=""
                  />
                </span>
              </p>
            </Box>
            <Box>
              <img className="projects-img t-pointer" src={Project4} alt="" />
            </Box>
          </Box>
        </Box>
        <CustomPagination />
        <Box className="lets-work-together-box">
          <Box className="lets-work-togethe t-pointer">Lets Work Together!</Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProjectsPage;
