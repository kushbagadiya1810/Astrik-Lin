import React from "react";
import { Box } from "@mui/material";
import work from "../../../assets/images/work-img.png";
import "./card.scss";

import { Carousel } from "3d-react-carousal";

let slides = [
  <div className="card-content">
    <img className="card-img" src={work} alt="1" />
    <div className="card-detail-sec">
      <p className="card-title">InstaTickets</p>
      <p className="card-para">
        Say goodbye to long queues and hello to hassle-free ticket booking for
        movies, operas, concerts, and more. With a delightful and user-friendly
        interface, InstaTickets brings joy and excitement to your fingertips.
        Get ready to dive into a world of entertainment with just a few taps.
        From blockbuster movies to show-stopping performances, InstaTickets is
        your go-to companion for all things fun and fabulous!
      </p>
    </div>
  </div>,
  <div className="card-content">
    <img className="card-img" src={work} alt="2" />
    <div className="card-detail-sec">
      <p className="card-title">InstaTickets</p>
      <p className="card-para">
        Say goodbye to long queues and hello to hassle-free ticket booking for
        movies, operas, concerts, and more. With a delightful and user-friendly
        interface, InstaTickets brings joy and excitement to your fingertips.
        Get ready to dive into a world of entertainment with just a few taps.
        From blockbuster movies to show-stopping performances, InstaTickets is
        your go-to companion for all things fun and fabulous!
      </p>
    </div>
  </div>,
  <div className="card-content">
    <img className="card-img" src={work} alt="3" />
    <div className="card-detail-sec">
      <p className="card-title">InstaTickets</p>
      <p className="card-para">
        Say goodbye to long queues and hello to hassle-free ticket booking for
        movies, operas, concerts, and more. With a delightful and user-friendly
        interface, InstaTickets brings joy and excitement to your fingertips.
        Get ready to dive into a world of entertainment with just a few taps.
        From blockbuster movies to show-stopping performances, InstaTickets is
        your go-to companion for all things fun and fabulous!
      </p>
    </div>
  </div>,
];

const CustomCard = () => {
  return (
    <>
      <Box className="work-card-box">
        <Carousel slides={slides} autoplay={false} interval={2000} />
      </Box>
    </>
  );
};

export default CustomCard;
