import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import star from "../../../../assets/images/star_astrik.png";
import about from "../../../../assets/images/about_img.webp";
import inclusive from "../../../../assets/images/inclusive.png";
import bold from "../../../../assets/images/bold.png";
import agile from "../../../../assets/images/agile.png";
import purposeDriven from "../../../../assets/images/purpose_driven.png";
import customerObsessed from "../../../../assets/images/customer_obsessed.png";
import "./about.scss";
import Footer from "../../UI/footer";

const AboutPage = () => {
  const mainWrapperRef = useRef();

  useEffect(() => {
    // Scroll to the top of the main wrapper when the component mounts
    mainWrapperRef.current.scrollIntoView({ behavior: "smooth" });

    // Optionally, you can add a cleanup function to handle scrolling when the component unmounts
    return () => {
      // Add cleanup logic if needed
    };
  }, []);
  return (
    <>
      <Box className="main-wrapper-about" ref={mainWrapperRef}>
        <Typography className="heading-about-text t-pointer">
          Who are we?
        </Typography>
        <p className="text-font t-pointer">
          We are a dynamic and innovative company, passionate about delivering
          exceptional results for our clients. Driven by our core values of
          integrity, creativity, and excellence, we have a strong track record
          of success in our industry. Our team of highly skilled professionals
          is committed to providing exceptional service and customized solutions
          to meet the unique needs of each client. At our company, we believe in
          building strong, long-lasting partnerships and delivering value that
          exceeds expectations. That's who we are - a company that puts people
          first and delivers results that speak for themselves.
        </p>
        <Box className="main-who-astrik-container t-center t-pointer">
          <Box className="who-astrik-container">
            <img src={star} alt="" />
            <span>
              <p className="who-astrik-title">ASTRIK</p>
            </span>
          </Box>
          <p className="who-astrik-para t-center">
            "Driven by Passion, Delivering Excellence"
          </p>
          <Box className="ellipse-shadow-about-container">
            <img className="abouts-img" src={about} alt="" />
          </Box>
        </Box>
        <Typography className="heading-about-text t-pointer">
          What makes Us Different?
        </Typography>
        <p className="text-font t-pointer">
          Our unique blend of expertise, innovation, and dedication sets us
          apart. We have a deep understanding of our industry and the needs of
          our customers, which enables us to provide customized solutions that
          drive tangible results. We're constantly pushing the boundaries of
          what's possible, leveraging cutting-edge technology and out-of-the-box
          thinking to deliver exceptional value and a competitive edge. Simply
          put, we're a game-changer in our field.
        </p>
        <Box className="abouts-diffrents-main-section">
          <Box className="abouts-diffrents-container t-pointer">
            <Box className="left-diffrents-part">
              <img className="diffrents-imgs" src={inclusive} alt="" />
            </Box>
            <Box className="right-diffrents-part">
              <p className="diffrents-title t-end">Inclusive</p>
              <p className="diffrents-para t-end">
                "We embrace diversity and welcome all with open arms, creating a
                culture of belonging."
              </p>
            </Box>
          </Box>
          <Box className="abouts-diffrents-container t-pointer">
            <Box className="left-diffrents-part">
              <p className="diffrents-title t-start">Purpose-driven</p>
              <p className="diffrents-para t-start">
                "We're driven by a clear sense of purpose and a desire to make a
                positive difference in the world."
              </p>
            </Box>
            <Box className="right-diffrents-part">
              <img className="diffrents-imgs" src={purposeDriven} alt="" />
            </Box>
          </Box>
          <Box className="abouts-diffrents-container t-pointer">
            <Box className="left-diffrents-part">
              <img className="diffrents-imgs" src={agile} alt="" />
            </Box>
            <Box className="right-diffrents-part">
              <p className="diffrents-title t-end">Agile</p>
              <p className="diffrents-para t-end">
                "We're flexible and adaptable, able to pivot quickly and stay
                ahead of the curve."
              </p>
            </Box>
          </Box>
          <Box className="abouts-diffrents-container t-pointer">
            <Box className="left-diffrents-part">
              <p className="diffrents-title t-start">Customer-obsessed</p>
              <p className="diffrents-para t-start">
                "Our customers are our obsession, and we're dedicated to
                exceeding their expectations."
              </p>
            </Box>
            <Box className="right-diffrents-part">
              <img className="diffrents-imgs" src={customerObsessed} alt="" />
            </Box>
          </Box>
          <Box className="abouts-diffrents-container t-pointer">
            <Box className="left-diffrents-part">
              <img className="diffrents-imgs" src={bold} alt="" />
            </Box>
            <Box className="right-diffrents-part">
              <p className="diffrents-title t-end">Bold</p>
              <p className="diffrents-para t-end">
                "We're fearless and unafraid to take risks, constantly pushing
                the boundaries of what's possible."
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;
