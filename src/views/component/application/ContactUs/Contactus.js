import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../../UI/footer";
import logo from "../../../../assets/images/contact_logo.svg";
import light from "../../../../assets/images/light-img.png";
import "./contact.scss";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [discussionSubject, setDiscussionSubject] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    discussionSubject: "",
  });

  const handleEnterPress = () => {
    // Perform validation
    const errors = {};
    if (!name) {
      errors.name = "Name is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required!";
    } else if (!/^\d+$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone Number must contain only digits!";
    } else if (phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone Number must be 10 digits long!";
    }
    if (!discussionSubject) {
      errors.discussionSubject = "Subject of Discussion is required!";
    }

    // If there are errors, set the state and return
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // If validation passes, clear the errors and perform other actions
    setFieldErrors({});

    // Perform any action you want on pressing enter
    // For example, you can clear the TextField
    setName("");
    setEmail("");
    setPhoneNumber("");
    setDiscussionSubject("");
  };

  return (
    <>
      <Box className="main-wrapper-contact">
        <Box className="logo-main-container t-pointer">
          <Box className="ellipse-shadow-contact-container">
            <img className="contact-img" src={logo} alt="" />
          </Box>
          <Typography variant="h6" className="logo-content-title">
            Got an Idea?
            <br /> <span>Let's Make it Happen!</span>
          </Typography>
          <Typography className="logo-content-para">
            Our team of experts is here to turn your vision into reality. Let's
            work together to bring your idea to life.
          </Typography>
        </Box>
        <Box className="t-right">
          <img className="light-img t-pointer" src={light} alt="" />
        </Box>
        <Box className="make-it-happen-container t-pointer">
          <Typography className="make-it-happen-title">
            Let's make it happen!
          </Typography>
          <Typography className="make-it-happen-para">
            "Connect with our team to discuss your project or idea. Simply fill
            out this form, and we'll be in touch soon to explore how we can
            bring your idea to life!"
          </Typography>
          <Divider className="mb-35" style={{ backgroundColor: "#F0F0DC" }} />
          <Box className="make-it-happen-info">
            <Box className="make-it-happen-details">
              <Typography className="field-title-text">Name</Typography>
              <TextField
                className="field-label-text mb-35"
                placeholder="Enter your Name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEnterPress();
                }}
                onChange={(e) => {
                  setName(e.target.value);
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    name: "", // Clear error when user starts typing
                  }));
                }}
              />
              {fieldErrors.name && (
                <Typography className="error-message mb-35">
                  {fieldErrors.name}
                </Typography>
              )}

              <Typography className="field-title-text">Email ID</Typography>
              <TextField
                className="field-label-text mb-35"
                placeholder="Enter your Email ID"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    email: "", // Clear error when user starts typing
                  }));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEnterPress();
                }}
              />
              {fieldErrors.email && (
                <Typography className="error-message mb-35">
                  {fieldErrors.email}
                </Typography>
              )}
              <Typography className="field-title-text">Phone Number</Typography>
              <TextField
                className="field-label-text"
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  // Validate and update phone number
                  if (/^\d+$/.test(inputValue) || inputValue === "") {
                    setPhoneNumber(inputValue);
                    setFieldErrors((prevErrors) => ({
                      ...prevErrors,
                      phoneNumber: "", // Clear error when valid input
                    }));
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEnterPress();
                }}
              />
              {fieldErrors.phoneNumber && (
                <Typography className="error-message mt-35">
                  {fieldErrors.phoneNumber}
                </Typography>
              )}
            </Box>
            <Box className="make-it-subject-dicussion">
              <Typography className="subject-discussion-text">
                Subject of Discussion
              </Typography>
              <TextField
                multiline
                className="field-label-text"
                // inputProps={{
                //   style: {
                //     height: "314px",
                //   },
                // }}
                // maxRows={5}
                rows={13}
                placeholder="Tell us about your idea in a nutshell - just a few sentences to get us excited! What are you hoping to achieve, and how can we help make it happen?"
                value={discussionSubject}
                // onChange={(e) => setDiscussionSubject(e.target.value)}
                onChange={(e) => {
                  setDiscussionSubject(e.target.value);
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    discussionSubject: "", // Clear error when user starts typing
                  }));
                }}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") handleEnterPress();
                // }}
              />
              {fieldErrors.discussionSubject && (
                <Typography className="error-message mt-35">
                  {fieldErrors.discussionSubject}
                </Typography>
              )}
            </Box>
          </Box>
          <Box className="make-it-happen-box" onClick={handleEnterPress}>
            <Box className="make-it-happen">Make it Happen!</Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUsPage;
