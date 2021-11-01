import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="mb-5 mt-5 fw-bold text-center about-title">TRAVELE</h1>
      <hr />
      <Container>
        <Row>
          <Col className="col-lg-5 col-md-12 col-12">
            <div className="mt-5 ms-3 me-2">
              <p className="about-text fw-bold ">About Us</p>
              <h1 className="fw-bolder">
                Explore All Corners <br /> of The World With Us
              </h1>
              <p className="text-justify">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <button className="btn btn-about mt-3 mb-3 px-3 py-2">
                Read More
              </button>
            </div>
          </Col>

          <Col className="col-lg-7 col-md-12 col-12 mt-5 d-flex">
            <img
              className="about-img me-4 mt-2"
              src="https://i.ibb.co/mCVSv6W/xabout-1-jpg-pagespeed-ic-Gfzq5i-X5-YJ.webp"
              alt=""
            />
            <img
              className="about-img mt-5"
              src="https://i.ibb.co/cX703gk/xabout-2-jpg-pagespeed-ic-HI2ci4yj-Sl.webp"
              alt=""
            />
          </Col>

          {/* <hr className="hr-color" /> */}
        </Row>
      </Container>
    </div>
  );
};

export default About;
