import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import ('./Services.css');

const Services = () => {
 const [services, setServices]= useState([])

    useEffect(()=>{
        fetch('https://frightful-flesh-47379.herokuapp.com/apis')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div>
           <h2>Our Package</h2>
            <div className="servic-dv">                  
            {
                services.map(service =>  <Service
                key={service._id}
                service={service}
                ></Service> )
                
            }           
        </div>
       </div>
    );
};

export default Services;