import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './about.scss';

const About= () => {
  return(
    <div className="about">
      <Header />
      <div className="about-text">
        <p>
          This small React application is a assigment I did for one of my school projects. <br />
          The application uses the Weather Forecast API in order to get the current weather forcast for the Belgrade Area. <br />
          If you would like to reach out to me, please do so why any of the following link.
        </p>
        <div className="contact">
          
        </div>
      </div>
     <Footer />
    </div>
  );
}
  
export default About;