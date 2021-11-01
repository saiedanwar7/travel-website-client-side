import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import './AddNewPackage.css'

const AddNewPackage = () => {

    const packageNameRef = useRef();
    const packageImgRef = useRef();
    const packageDurationRef = useRef();
    const packagePriceRef = useRef();
    const packageSummaryRef = useRef();


    const handleAddPackage = e => {

                e.preventDefault();
        
                const package_name = packageNameRef.current.value;
                const img = packageImgRef.current.value;
                const package_duration = packageDurationRef.current.value;
                const package_price = packagePriceRef.current.value;
                const package_summary = packageSummaryRef.current.value;
        
                const newPackage = { package_name, img, package_duration, package_price,package_summary }
        
                console.log(newPackage);

                fetch('http://localhost:5000/packages', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newPackage)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert("Succssfully Added This Package")
                            e.target.reset();
                            // console.log(data);
                        }
                    })
    }
    return (
        <div>
              <Container className="mt-5">
                <h2 className="details-title py-1 mt-5 px-3 mb-5 text-center" >Add New Package</h2>
                <Form onSubmit={handleAddPackage}>

                    <Form.Control size="lg" ref={packageNameRef} className="mb-3" required type="text" placeholder="Package name" />
                    <Form.Control size="lg" ref={packageImgRef} className="mb-3" required type="text" placeholder="Package img link" />
                    <Form.Control size="lg" ref={packageDurationRef} className="mb-3" required placeholder="Package days " />
                    <Form.Control size="lg" ref={packagePriceRef} className="mb-3" required  placeholder="Package price" />
                    <Form.Control size="lg" ref={packageSummaryRef} className="mb-3" required as="textarea" placeholder="Package summary" />

                    <Button variant="primary" className="booking-btn btn w-100 fw-bold" type="submit">
                        Add Package
                    </Button>

                </Form>
            </Container>
        </div>
    );
};

export default AddNewPackage;