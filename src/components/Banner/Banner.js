import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/DffqTCt/banner3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>TRAVELLING AROUND THE WORLD</h1>
            <p>A Journey Of A Thousand Miles Begins With A Single</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Ycc45mN/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>TRAVELLING AROUND THE WORLD</h1>
            <p>A Journey Of A Thousand Miles Begins With A Single</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
};

export default Banner;
