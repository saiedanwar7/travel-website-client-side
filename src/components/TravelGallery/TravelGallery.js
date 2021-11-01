import React from "react";
// import { Col, Row } from 'react-bootstrap';
import "./TravelGallery.css";

const TravelGallery = () => {
  return (
    <div className="gallery-section mt-5">
      {/* <h2 className="mb-4 fw-bold text-center">HEALTH CARE</h2> */}
      <h2 className="dash-style section-title mb-5 mt-5 text-center">
        OUR TOUR GALLERY
      </h2>

      <div className="container">
        <div className="row">
          {/* col - 1 */}
          <div className="col-lg-5 col-md-6 col-12 ">
            {/* d-flex */}
            <div className=" section-heading mb-5">
              {/* <h5 className="dash-style mb-3 text-center">OUR TOUR GALLERY</h5>  */}
              <h2 className=" text-center">
                BEST TRAVELER'S <br />
                SHARED PHOTOS
              </h2>
              <p className="mt-2">
                The Photographic Society of America defines a travel photo as an
                image that expresses the feeling of a time and place, portrays a
                land, its people, or a culture in its natural state, and has no
                geographical limitations. Looking to find great travel deals or enjoy the biggest savings on your next trip? Travele.com has you covered. 
              </p>
            </div>
            <figure className="gallery-img mt-2">
              <img src="https://i.ibb.co/yNLh2gG/T3.jpg" alt="" />
            </figure>
          </div>

          {/* col - 2   */}
          <div className="col-lg-7 col-md-6 col-12">
            <div className="row">
              <div className="col-sm-6">
                <figure className="gallery-img">
                  <img src="https://i.ibb.co/wpZBY07/img13.jpg" alt="" />
                </figure>
              </div>
              <div className="col-sm-6">
                <figure className="gallery-img">
                  <img src="https://i.ibb.co/QmPR1fL/img14.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="row mt-1">
              <figure className="gallery-img">
                <img src="https://i.ibb.co/g9HHSmy/T4.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGallery;
