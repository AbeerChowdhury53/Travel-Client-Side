import React from 'react';
import banner from '../image/aboutus.png';
import './Aboutus.css'
// import banner2 from '../image/aboutus2.jpg';
// import ban '../image/aboutus.jpg'

const AboutUs = () => {
    return (
        <div className='cover-img'>
      
            <div className='we-are'>
                <div>
                    <h2>About us</h2>
                    <p>Founded in 1992, DCA is a leading Travel Agency, with eight locations in Palm Beach County, Florida. Partnered with Boca Radiology Group, one of the largest and prestigious radiology groups in South Florida, DCA offers patients a full array of imaging services in a comfortable outpatient setting. DCA has earned a national reputation for quality and compassionate patient care</p>
                </div>
                <div>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide our Gest, our physicians, and our community with the highest-quality imaging available. We care about our students very much. We have more than 1000 satisfied student. DCA has earned a national reputation for quality and compassionate patient care</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;