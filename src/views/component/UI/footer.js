import React, { useState } from "react";
import { Box, Divider, TextField } from "@mui/material";
import twitter from "../../../assets/images/uil_twitter.svg";
import linkdin from "../../../assets/images/uil_linkedin.svg";
import dot from "../../../assets/images/dot.svg";
import github from "../../../assets/images/uil_github.svg";
import star from "../../../assets/images/star.svg";
import "./footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isHomeRoute =
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname === "/home";
  const isAboutRoute = location.pathname === "/about";
  const isProjectsRoute = location.pathname === "/project";
  const isContactRoute = location.pathname === "/contact";

  const [email, setEmail] = useState("");
  const [showEmailContent, setShowEmailContent] = useState(false);
  const [showContactContent, setShowContactContent] = useState(false);
  const defaultEmailText = "Email";
  const dynamicEmailText = "Astrik@123gmail.com";
  const defaultContactText = "Contact";
  const dynamicContactText = "8787878787";

  const handlePressEnter = () => {
    // Perform any action you want on pressing enter
    // For example, you can clear the TextField
    setEmail("");
  };

  const handleChange = (event) => {
    // Update the email state as the user types
    setEmail(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Check if the Enter key is pressed (key code 13)
    if (event.key === "Enter") {
      handlePressEnter();
    }
  };

  const handleEmailClick = () => {
    setShowContactContent(false); // Hide contact information
    setShowEmailContent(!showEmailContent);
  };

  const handleContactClick = () => {
    setShowEmailContent(false); // Hide email information
    setShowContactContent(!showContactContent);
  };

  return (
    <>
      <Box className="t-pointer">
        <Box
          className={` ${
            isContactRoute
              ? "footer-main-container"
              : isAboutRoute
              ? "footer-main-container"
              : isProjectsRoute
              ? "footer-main-container"
              : "footer-main-container-blur"
          }`}
        >
          <Box className="footer-first-sec">
            <Box className="footer-first-sub-part">
              <Box>
                <img className="astrik-img" src={star} alt="" />
                <span className="astrik-title-text">Astrik</span>
              </Box>
              <p className="astrik-add-text">
                No. 2, Park St. Avenue, New York, USA
              </p>
              <p className="astrik-email-text">astrik1234@gmail.com</p>
            </Box>
            <Box className="footer-first-sub-sec">
              <Box>
                <p className="footer-head-text">Main</p>
                <p
                  className="footer-para-text t-pointer"
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  Home
                </p>
                <p
                  className="footer-para-text t-pointer"
                  onClick={() => {
                    window.location.href = "/about";
                  }}
                >
                  About Us
                </p>
                <p
                  className="footer-para-text t-pointer"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Support
                </p>
              </Box>
              <Box>
                <p className="footer-head-text">Contact Us</p>
                <p
                  className="footer-para-text t-pointer"
                  onClick={handleEmailClick}
                >
                  {showEmailContent ? dynamicEmailText : defaultEmailText}
                </p>
                <p
                  className="footer-para-text t-pointer"
                  onClick={handleContactClick}
                >
                  {showContactContent ? dynamicContactText : defaultContactText}
                </p>
              </Box>
            </Box>
            <Box>
              <p className="footer-para-text" onClick={handleContactClick}>
                Subscribe to our newsletter!
              </p>
              <TextField
                className="field-label-text mb-35"
                placeholder="Enter your Email ID"
                value={email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <p className="press-enter-text" onClick={handlePressEnter}>
                Press <span className="enter-underline-text">ENTER</span>
              </p>
            </Box>
          </Box>
          <Divider className="divider" style={{ backgroundColor: "cream" }} />
          <Box className="footer-second-sec">
            <Box>
              <p className="astrik-copy-right-text">© Astrik 2023</p>
            </Box>
            <Box className="astrik-policy-sec">
              <p className="astrik-policy-text">
                Privacy Policy
                <span style={{ padding: "0px 15px 0px 15px" }}>
                  <img src={dot} alt="" />
                </span>
              </p>
              <p className="astrik-policy-text">
                Terms of Service{" "}
                <span style={{ padding: "0px 15px 0px 15px" }}>
                  <img src={dot} alt="" />
                </span>
              </p>
              <p className="astrik-policy-text">Security</p>
            </Box>
            <Box className="social-media-icons">
              <img style={{ paddingRight: "15px" }} src={twitter} alt="" />
              <img style={{ paddingRight: "15px" }} src={linkdin} alt="" />
              <img src={github} alt="" />
            </Box>
          </Box>

          <p className="footer-illustrations-text t-center ">
            Illustrations by Icons 8 from{" "}
            <span style={{ textDecoration: "underline" }}>Ouch!</span>
          </p>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
