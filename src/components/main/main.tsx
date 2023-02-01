import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './main.scss';

const Main = () => {
  return(
    <div className="main">
      <Header />
        <div className="main-text">
          <p>
            Welcome to my weather application! <br/> 
            Please select on of the option at the top right corner.
          </p>
        </div>
      <Footer />
    </div>
  );
};

export default Main;