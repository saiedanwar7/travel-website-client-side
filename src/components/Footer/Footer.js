import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 ft-color text-light pt-5 pb-4">
        <Container>
            <Row>

            <Col className="col-lg-5 col-md-5 d-flex justify-content-center">
                    <div className="text-start">
                      <h1 className="fw-bold title-color">Travele</h1>
                      <p>travele.com is a rapidly-growing global online travel agency, travele.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, travele is here to help you travel the world</p>
                    </div>
                </Col>

            <Col className="col-lg-4 col-md-4  d-flex justify-content-center">
                   <div className="text-start">
                   <h4 className="mb-2 fw-bold title-color">CONTACT INFO</h4>
                      <div>
                      <p> 3146 Koontz, California</p>
                      <p>Mail - Trvele@gmail.com</p>
                       <h5>Call - +1 (977) 2599 12</h5>
                      </div>
                   </div>
                </Col>
        
              
                
                
        
                <Col className="col-lg-3 col-md-3  d-flex justify-content-center">
                   <div className="text-start">
                    <h4 className="mb-2 fw-bold title-color">NAVIGATION</h4>
                    <ul className="list-style">
                        <li>
                           <h6>-<a className="text-decoration-none link-color" href="/home"> Home</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/about"> About</a></h6>
                            <h6>-<a className="text-decoration-none link-color" href="/contact"> Contact</a></h6>
                            
                        </li>
                    </ul>
                   </div>
             
                </Col>
               
                
        
            </Row>
        </Container> 
    </div>
    );
};

export default Footer;
