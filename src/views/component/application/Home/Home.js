import React, { useState } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import logo from "../../../../assets/images/logo.svg";
// import mobileCubeLogo from "../../../../assets/images/mobile_cube_logo.svg";
import mobileCubeLogo from "../../../../assets/images/logo.png";
import webDev from "../../../../assets/images/web_dev.png";
import appDev from "../../../../assets/images/app_dev.png";
import cloudServiceLogo from "../../../../assets/images/cloud_service_logo.png";
import aiMlProduct from "../../../../assets/images/ai_ml_product.png";
import webDevService from "../../../../assets/images/web_dev_service.svg";
import cloudService from "../../../../assets/images/cloud_service.svg";
import aiMiService from "../../../../assets/images/ai_ml_service.svg";
import lisaDp from "../../../../assets/images/lisa_dp.svg";
import adithDp from "../../../../assets/images/adith_dp.svg";
import michaelhDp from "../../../../assets/images/michael_dp.svg";
import sarahhDp from "../../../../assets/images/sarah_dp.svg";
// import workBack from "../../../../assets/images/work-back-img.png";
// import work from "../../../../assets/images/work-img.png";
import AnimationBox from "../../../component/UI/animationBox";
// import Xarrow from "react-xarrows";
import "./home.scss";
import Footer from "../../UI/footer";
import CustomCard from "../../UI/card";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(true);
  const [hoveredId, setHoveredId] = useState(1);
  const whatToDoList = [
    {
      id: 1,
      image: webDev,
      subText: `Unleashing the magic of code to shape immersive digital experiences, one pixel at a time.`,
      title: "Web Development",
      icon: webDevService,
      gridColumn: "span 4",
    },
    {
      id: 2,
      image: appDev,
      subText: `Architecting innovative app solutions that redefine user experiences and drive business success.`,
      title: "App Development",
      icon: webDevService,
      gridColumn: "span 4",
    },
    {
      id: 3,
      image: webDev,
      subText: `Unleashing the magic of code to shape immersive digital experiences, one pixel at a time.`,
      title: "Web Development",
      icon: webDevService,
      gridColumn: "span 4",
    },
    {
      id: 7,
      gridColumn: "span 2",
    },
    {
      id: 4,
      image: aiMlProduct,
      subText: `Architecting innovative app solutions that redefine user experiences and drive business success.`,
      title: "AI/ML Products",
      icon: aiMiService,
      gridColumn: "span 4",
    },
    {
      id: 5,
      image: cloudServiceLogo,
      subText: `Unlocking the digital sky's power to securely store, scale, and elevate your business to new horizons.`,
      title: "Cloud Services",
      icon: cloudService,
      gridColumn: "span 4",
    },
    {
      id: 6,
      gridColumn: "span 2",
    },
  ];

  const ourProcess = [
    {
      id: 1,
      title: "Explore & Understand",
    },
    {
      id: 2,
      title: "Create & Develop",
    },
    {
      id: 3,
      title: "Refine & Reflect",
    },
    {
      id: 4,
      title: "Launch & Support",
    },
    {
      id: 5,
      title: "Thrive & Adapt",
    },
  ];

  const peopleThinkData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      username: "@SarahMarketer",
      dp: sarahhDp,
      dec: "My experience working with XYZ company was top-notch! 5 stars all the way. ⭐️⭐️⭐️⭐️⭐️",
    },
    {
      id: 2,
      name: "Adith Narein T",
      role: "CEO of Awesome Inc",
      username: "@an1305",
      dp: adithDp,
      dec: "The team at XYZ was super responsive and delivered a high-quality product that exceeded my expectations. Highly recommend!",
    },
    {
      id: 3,
      name: "Michael Davis",
      role: "Sales Representative",
      username: "@MikeSales",
      dp: michaelhDp,
      dec: "Working with XYZ has been a game-changer for our business. Their expertise and professionalism were unmatched.",
    },
    {
      id: 4,
      name: "Lisa Anderson",
      role: "Product Manager",
      username: "@LisaProd",
      dp: lisaDp,
      dec: "XYZ helped us take our product to the next level.",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Product Manager",
      username: "@LisaProd",
      dp: lisaDp,
      dec: "XYZ helped us take our product to the next level.",
    },
    {
      id: 6,
      name: "Michael Davis",
      role: "Sales Representative",
      username: "@MikeSales",
      dp: lisaDp,
      dec: "Working with XYZ has been a game-changer for our business. Their expertise and professionalism were unmatched.",
    },
    {
      id: 7,
      name: "Michael Davis",
      role: "Sales Representative",
      username: "@MikeSales",
      dp: lisaDp,
      dec: "Working with XYZ has been a game-changer for our business. Their expertise and professionalism were unmatched.",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Product Manager",
      username: "@LisaProd",
      dp: lisaDp,
      dec: "XYZ helped us take our product to the next level.",
    },
  ];

  const handleToggleView = (id) => {
    setHoveredId(id);
    setIsHovered(true);
  };

  return (
    <>
      <Box className="main-wrapper-home">
        <Box className="home-img-container">
          <Box className="logo-content t-pointer">
            <Typography variant="h6" className="logo-content-text">
              Welcome to
            </Typography>
            <Typography variant="h2" className="logo-content-text-astrik">
              ASTRIK
            </Typography>
          </Box>

          <Box className="logo-main-conainer">
            <Typography variant="h6" className="logo-content-subtext t-pointer">
              We define
            </Typography>
            <Box className="Ellipse-shadow-container t-pointer">
              <img className="home-img" src={ logo } alt="" />
            </Box>
            <Typography variant="h6" className="logo-content-subtext t-pointer">
              the future.
            </Typography>
          </Box>
          <Box className="responsive-logo-main-conainer">
            <Box className="responsive-ellipse-shadow-container  t-pointer">
              <img className="home-img" src={ mobileCubeLogo } alt="" />
            </Box>

            <Typography
              variant="h6"
              className="logo-content-subtext  t-pointer"
            >
              We define the future.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box className="info-main-container">
            <Box className="info-container">
              <p className="text-font-public t-pointer">
                We build software solutions that empower businesses to thrive.
                Our customer-centric approach and proven technology expertise
                help us deliver high-performance, scalable applications that
                drive results for our clients.
              </p>
            </Box>
            <Box className="content-center t-pointer">
              <p className="text-font-sans t-center">Got an Idea? Jump in!</p>
              <div
                style={ {
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                } }
              >
                <Box
                  className="create-something"
                  onClick={ () => {
                    window.location.href = "/contact";
                  } }
                >
                  Let’s Create Something Cool!
                </Box>
                <div className="test-border"></div>
              </div>
            </Box>
          </Box>
        </Box>
        <Box
          className="our-process-container "
          style={ { position: "relative" } }
        >
          <div className="test-1-border"></div>
          <Typography className="heading-our-text t-center t-pointer">
            Our Process
          </Typography>
          <Box className="process-container">
            <p className="text-font t-pointer">
              At <span className="text-font-astrik">ASTRIK</span>, we have
              fine-tuned our approach to deliver exceptional results for our
              clients. Our methodology centers around a deep understanding of
              our clients' needs, paired with a continuous drive to innovate.
              From the initial consultation to deployment, we prioritize
              collaboration, agility, and quality to deliver tailored solutions
              that exceed expectations.
            </p>
          </Box>

          <Box className="our-process-box-container">
            <div className="test-2-border"></div>
            { ourProcess?.map((item) => {
              return (
                <>
                  <Box className="process-box t-pointer">
                    <p className="box-text">{ item?.id }</p>
                    <p className="box-para box-text">{ item?.title }</p>
                  </Box>
                </>
              );
            }) }
          </Box>
          <div className="test-border111"></div>
        </Box>
        <Box className="what-do-container t-pointer">
          <div className="line"></div>
          <div className="line-sub1"></div>
          <div className="line-sub2"></div>
          <div className="line3"></div>
          <Box className="what-do-title-container">
            <Typography className="what-do-text t-pointer">
              What do we do?
            </Typography>
            <Typography className="learn-text t-pointer">
              Learn <span className="more-text t-pointer">more.</span>
            </Typography>
          </Box>
          <p className="text-font t-pointer" style={ { paddingBottom: "60px" } }>
            "We deliver innovative, impactful solutions for your business needs,
            from tech to design to consulting. Let's collaborate and create
            something incredible together!"
          </p>
        </Box>
        <Box className="what-do-boxs">
          <div className="line2"></div>
          <div className="line6"></div>
          <div className="line7"></div>
          <Box className="faq-grid t-pointer">
            { whatToDoList?.map((item) => {
              return (
                <Box gridColumn={ item?.gridColumn }>
                  { item?.title && (
                    <AnimationBox>
                      <Box
                        className={ `faq-content-box` }
                        style={ {
                          height:
                            isHovered && item?.id === hoveredId ? "auto" : "",
                        } }
                        onClick={ () => handleToggleView(item?.id) }
                      >
                        <Box className="box-logo-container">
                          <img
                            className={ `box-logo` }
                            style={ {
                              display:
                                isHovered && item?.id === hoveredId
                                  ? "block"
                                  : "",
                            } }
                            src={ item?.image }
                            alt=""
                          />
                        </Box>
                        <p className="box-text">{ item?.subText }</p>
                      </Box>
                      <Box
                        className="web-title-box"
                        onClick={ () => handleToggleView(item?.id) }
                      >
                        <p className="box-title">{ item?.title }</p>
                        <span>
                          <img
                            className="service-logo"
                            src={ item?.icon }
                            alt=""
                          />
                        </span>
                      </Box>
                    </AnimationBox>
                  ) }
                </Box>
              );
            }) }
          </Box>

          <Box className="our-work-container " style={ { position: "relative" } }>
            <div className="test-3-border"></div>
            <Typography className="heading-work-text t-center t-pointer">
              Our Work
            </Typography>
            <p className="text-font t-center t-pointer">
              A few handpicked projects for your pleasure
            </p>
            <Box>
              <CustomCard className="t-pointer" />
            </Box>
            <Box
              className="lets-work-together"
              style={ { position: "relative" } }
              onClick={ () => {
                window.location.href = "/contact";
              } }
            >
              <div className="test-4-border"></div>
              Let’s work Together
            </Box>
            <div className="line4"></div>
            <div className="line5"></div>
            <Box
              className="people-think-main-container"
              style={ { position: "relative" } }
            >
              <div className="test-5-border"></div>
              <Box className="people-think-container content-center t-pointer">
                <Typography className="people-think-title">
                  What people think about us?
                </Typography>
                <Grid container spacing={ 2 }>
                  { peopleThinkData.map((item) => (
                    <Grid item lg={ 6 } md={ 6 } sm={ 12 } xs={ 12 }>
                      <Box className="people-think-main-sec">
                        <Box className="people-user-profile-sec">
                          <Box className="people-profile-img-sec">
                            <Box className="people-profile-img">
                              <Avatar src={ item?.dp } alt="" />
                            </Box>
                            <Box className="people-profile-name">
                              <Typography className="profile-name-text">
                                { item?.name }
                              </Typography>
                              <Typography className="profile-role-text">
                                { item?.role }
                              </Typography>
                            </Box>
                          </Box>
                          <Box className="people-profile-info">
                            <Typography className="profile-mail-text">
                              { item?.username }
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="people-profile-dec">
                          <Typography className="profile-dec-text">
                            { item?.dec }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )) }
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
