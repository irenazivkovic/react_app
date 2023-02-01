import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

import github from '../../assets/svg/github-logo.svg';
import linekedin from '../../assets/svg/linkedin-logo.svg';
import gmail from '../../assets/svg/gmail-logo.svg';

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
          <a href="https://github.com/irenazivkovic" id='github' target='_blank'><img src={github} /></a>
          <a href="https://www.linkedin.com/in/irena-živković-46593422a/" id='linkedin' target='_blank'><img src={linekedin} /></a>
        </div>
      </div>
     <Footer />
    </div>
  );
}
  
export default About;