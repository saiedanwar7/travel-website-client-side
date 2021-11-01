import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from"react-router-dom";
import Home from './components/Home/Home';
// import Register from './components/Register/Register';
import NotFound  from './components/NotFound/NotFound';
import Menubar from './components/Menubar/Menubar';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
// import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import MyBooking from './components/MyBooking/MyBooking';
import ManageBooking from './components/ManageBooking/ManageBooking';
import BookAndDetails from './components/BookAndDetails/BookAndDetails';
import Contact from './components/Contact/Contact';
import AddNewPackage from './components/AddNewPackage/AddNewPackage';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Menubar></Menubar>
        

        <Switch>

        <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>
{/* 
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute> */}

          <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PrivateRoute>

          <PrivateRoute path="/managebooking">
            <ManageBooking></ManageBooking>
          </PrivateRoute>

          <PrivateRoute path="/addnewpackage">
            <AddNewPackage></AddNewPackage>
          </PrivateRoute>

          <PrivateRoute path="/package/booking_details/:package_id">
            <BookAndDetails></BookAndDetails>
            </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>


          {/* <Route path="/register">
            <Register></Register>
          </Route>
             */}
          
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>


        <Footer></Footer>
     </Router>

    

      </AuthProvider>
      
    </div>
  );
}

export default App;
