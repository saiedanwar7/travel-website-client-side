import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyBooking.css";

const MyBooking = () => {
  const [mybookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/booking?search=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  console.log(mybookings);

  //-------- Delete package ------

  const handleDeletePackage = (id) => {
    const proceed = window.confirm(
      "Are you sure, You want to Cancel This Booking!"
    );
    if (proceed) {
      const url = `http://localhost:5000/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
         console.log(data);
          if (data.deletedCount > 0) {
            alert("Booking Cancel Successfully");
            const remainingPackage = mybookings.filter((pkg) => pkg._id !== id);
            setBookings(remainingPackage);
          }
        });
    }
  };

  return (
    <div>
      <Container className="content">
        <h2 className="details-title text-center py-1 mt-5 px-3 mb-5">
          My Booking
        </h2>

        {
     !mybookings.length ? <div style={{ marginBottom: "400px" }}></div> :

        <Row className="row p-2">
          {mybookings.map((booking) => (
            <Container key={booking._id}>
              {/* <Col className="col-12 mb-3 px-0 booking"> */}
              <Row className="my-booking mb-4 p-3">
                <Col className="col-4">
                  <img
                    className="booking-img img-fluid mt-2"
                    src={booking?.currentPackage.img}
                    alt=""
                  />
                </Col>

                <Col className="col-5">
                  <h2 className="mb-2 fw-bold">
                    {booking?.currentPackage.package_name}
                  </h2>
                  <h5 className="mb-2">{booking.BookName}</h5>
                  <p>
                    <span>Email: </span> {booking.userEmail}
                  </p>
                  <p>
                    <sapn>Tour Date: </sapn>
                    {booking.tourDate}
                  </p>
                  <p>
                    <span>Address: </span>
                    {booking.userAddress}
                  </p>
                  <p>
                    <span>City: </span>
                    {booking.userCity}
                  </p>
                  <p>
                    <span>Phone: </span> {booking.userPhone}
                  </p>
                </Col>

                <Col className="col-3 text-center mt-5">
                  <h4 className="mt-3">Status: {booking.status}</h4>
                  <button
                    className="btn btn-color w-75 mt-3 fw-bold"
                    onClick={() => handleDeletePackage(booking._id)}
                  >
                    Cancel Booking
                  </button>
                </Col>
              </Row>
            
         
              {/* </Col> */}
            </Container>
          ))}
        </Row>
      }
      </Container>
    </div>
  );
};

export default MyBooking;
