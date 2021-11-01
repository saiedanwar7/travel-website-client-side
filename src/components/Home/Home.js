import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import TravelGallery from '../TravelGallery/TravelGallery';
import './Home.css';



const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Packages></Packages>
            <TravelGallery></TravelGallery>
          
        

        </div>
    );
};

export default Home;