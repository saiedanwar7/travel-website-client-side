import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Menubar.css'



const Menubar = () => {
  const{user, logOut} = useAuth();
    return (
        <div>
            <Navbar className="p-2 nav-bg" collapseOnSelect expand="lg"  variant="dark" sticky="top">
         <Container>
           <Navbar.Brand className="title text-color fw-bold" as={Link} to="/home">Travele</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
                {/* <Nav.Link className="text-color mx-2 fw-bold" as={Link} to="/doctors">Doctors</Nav.Link> */}

                <Nav.Link className="text-color  mx-2 fw-bold" as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link className="text-color  mx-2 fw-bold" as={Link} to="/About">About us</Nav.Link>
                 <Nav.Link className="text-color  mx-2 fw-bold" as={Link} to="/contact">Contact us</Nav.Link>

                 
          </Nav>

            <Nav>
                   {
                           
                    user.email ? <div className="d-flex align-items-center">

                      <Nav.Link  className="text-decoration-none text-color fw-bold nav-link" as={Link} to="/mybooking">My Booking</Nav.Link >

                      <Nav.Link  className="text-decoration-none text-color fw-bold nav-link px-3" as={Link} to="/managebooking">Manage Booking</Nav.Link >

                      <Nav.Link  className="text-decoration-none text-color fw-bold nav-link px-3" as={Link} to="/addnewpackage">Add New Package</Nav.Link >

                      <span className="me-3 text-decoration-none text-color fw-bold">{user.displayName}</span>

                      <Nav.Link  className="text-decoration-none text-color fw-bold me-4 nav-link" onClick={logOut}><button className="btn log-and-out-btn fw-bold px-3">Logout</button></Nav.Link >
                      
                    

                </div>

                        :
                   
                       <Link className="text-decoration-none text-color fw-bold me-4 text-color fw-bold nav-link " to="/login"> <button className="btn log-and-out-btn fw-bold px-3">Login</button></Link>
                    
                 }
            </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Menubar;
