import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="mb-5">
      <h2 className="t fw-bold text-center title-color mt-5 mb-5">
        Holiday Tour Package
      </h2>

      {!packages.length ? (
        <div className="text-center mt-5">
          <Spinner
            className="text-center"
            animation="border"
            variant="secondary"
          />
        </div>
      ) : (
        <Container className="mt-2">
          <hr />

          <Row xs={1} md={2} lg={3} className="g-4">
            {packages.map((pkg) => (
              <Col key={pkg.id}>
                <Card className="h-100 course-card">
                  <Card.Img className="card-img" variant="top" src={pkg.img} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center mt-2 mb-3">
                      {pkg.package_name}
                    </Card.Title>
                    <Card.Text>
                      <p>{pkg.package_summary.slice(0, 130)}...</p>
                    </Card.Text>

                    <div className="mt-auto ">
                      <div className="mt-auto ">
                        <Link to={`/package/booking_details/${pkg._id}`}>
                          <button className="btn w-100 booking-btn">
                            Booking Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Packages;
