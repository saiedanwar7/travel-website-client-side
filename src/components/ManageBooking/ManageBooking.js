import React from 'react';
import  { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './ManageBooking.css'

const ManageBooking = () => {
    const [manageBooking, setManageBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings`)
            .then(res => res.json())
            .then(data => setManageBooking(data))
    }, []);

    console.log(manageBooking);

    const handleDeletePackage = id => {

        const proceed = window.confirm("Are you sure, you want to cancel booking !!!")
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert("booking cancel Successfully")
                        const remainingPackage = manageBooking.filter(pkg => pkg._id !== id);
                        setManageBooking(remainingPackage)
                    }
                })
        }
    }

//----------- Approved ----------
const approved = { status: "Approved" }

const handleApprovedBooking = id => {
    const url = `http://localhost:5000/bookings/${id}`
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(approved)

    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.modifiedCount > 0) {
                alert("Approved Succesfully")

                window.location.reload();


            }

        })

}


    return (
        <div>
        
        <Container className="content">
        <h2 className="details-title text-center py-1 mt-5 px-3 mb-5">
          Manage All Bookings
        </h2>

        {
       !manageBooking.length ? <div style={{ marginBottom: "400px" }}></div> :

        <Row className="row p-2">
          {manageBooking.map((booking) => (
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
                    className="btn btn-success w-75 mt-3 fw-bold"
                    onClick={() => handleApprovedBooking(booking._id)}
                  >
                    Approved
                  </button>

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

export default ManageBooking;