import React from 'react';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Packages from '../Packages/Packages';
import TravelGallery from '../TravelGallery/TravelGallery';
import './Home.css';



const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Packages></Packages>
            <TravelGallery></TravelGallery>
            <Experience></Experience>
          
    
        </div>
    );
};

export default Home;