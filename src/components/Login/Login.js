import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location?.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    //  <>
    //     <Container>
    //         <h1 className="shadow-sm text-dark fw-bold mt-5 p-3 text-center rounded"> Please Login</h1>
    //         <Row className="mt-5">
    //             <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

    //             <Form onSubmit={handleLogin}>
    //                 <Form.Group className="mb-3" controlId="formBasicEmail">
    //                 <Form.Label>Email address</Form.Label>
    //                  <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
    //               </Form.Group>

    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control onBlur={handlePasswordChange}  type="password" placeholder="Password" required/>
    //             </Form.Group>

    //             <p className="text-start text-danger">{error}</p>

    //              <Button className=" btn btn-info fw-bold w-100"  type="submit">
    //                      Login
    //               </Button>

    //            <div className="text-center mt-2">
    //            <Link onClick={handleError}  to="/register">new user ?</Link>
    //             </div>

    //        </Form>
    //          <div className="login-from mx-auto mt-3">
    //             <p className="text-center">OR</p>
    //             <button onClick={handleGoogleLogin} className="btn fw-bold go-btn w-100 ">Continue with google</button>
    //         </div>
    //             </Col>
    //         </Row>
    //     </Container>

    //  </>

    <div className="login-from text-center mx-auto ht-login">
      <h2 className="text-center mt-5">Log In</h2>
      <button
        onClick={handleGoogleLogin}
        className="btn fw-bold mt-5 go-btn w-40 "
      >
        Continue with google
      </button>
    </div>
  );
};

export default Login;
