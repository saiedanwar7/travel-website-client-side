import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/experiences")
            .then(res => res.json())
            .then(data => setExperience(data))
    }, []);

    console.log(experience)

    return (
        <div>

<Container className="mt-5">

 <div>
 <h2 className="text-center mb-3">Experience Once In Your Life Time</h2>

 <p className="text-center">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of <br /> the Semantics, a large language ocean..</p>
 </div>

 <Row xs={1} md={3} className="g-4 mt-5">
    {
        experience.map(exp => <Col key={exp._id} >
            <Card className="img-container text-center border-0">
                <img className="exp-img mx-auto" src={exp.img} alt="" />
                <h2 className="">{exp.exp_name}</h2>
                <p>{exp.exp_summary}</p>
            </Card>
        </Col>)
    }
</Row> 
</Container>
            
        </div>
    );
};

export default Experience;