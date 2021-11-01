import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './BookAndDetails.css';

const BookAndDetails = () => {
    const [pkg, setPackage] = useState({})
    const {package_id} = useParams();

    const { user } = useAuth();
    
    console.log(pkg);

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${package_id}`)
            .then(res => res.json())
            .then(data => setPackage(data))
    }, []);

// package_id

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const phoneRef =  useRef();
    const dateRef = useRef(); 

    const handleBooking = (e) =>{
        e.preventDefault();
        const userName = nameRef.current.value;
        const userAddress = addressRef.current.value;
        const userCity = cityRef.current.value;
        const userPhone = phoneRef.current.value;
        const tourDate = dateRef.current.value;



        const newBooking = {
            BookName: userName,
            userAddress: userAddress,
            userCity: userCity,
            tourDate: tourDate,
            userPhone: userPhone,
            userEmail: user.email,
            status: "Pending",
            currentPackage: pkg
        }
        // console.log(newBooking);
       
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Successfully Added This Package")
                e.target.reset()
            }
        })
    }

    return (
        <div>
             <div className="mt-5 mb-5">
             <Container>
                <Row className="g-4" xs={1} md={2}>
                    <Col className="p-3 col-md-7">
                        <h2 className="details-title text-center py-1 px-2">{pkg.package_name}</h2>
                        <div className="text-center mb-4">
                            <img className="package-img" src={pkg.img} alt="" />
                        </div>
                        <div className="text-align">
                            <p >{pkg.package_summary}</p>
                        </div>
                    </Col>
                   <Col className="p-3 col-md-5">
                         <h2 className="mb-4 details-title py-1 px-2">Booking Information</h2>
               
                        <Form onSubmit={handleBooking}>

                            <Form.Control size="lg" ref={nameRef} className="mb-3" type="text" placeholder="Enter your full Name" required/>
                            <Form.Control size="lg" className="mb-3" type="email" value={user.email} placeholder="Enter email" readOnly />
                            <Form.Control size="lg" ref={addressRef} className="mb-3" type="text" placeholder="Address"  required/>
                            <Form.Control size="lg" ref={cityRef} className="mb-3" type="text" placeholder="City"  required/>
                            <Form.Control size="lg" ref={dateRef}  className="mb-3" type="date"  required/>
                            <Form.Control size="lg" ref={phoneRef} className="mb-3" placeholder="Phone number"  required/> 
                            <Button variant="primary" className="booking-btn btn w-100 fw-bold" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
            </div>
        </div>
    );
};

export default BookAndDetails;