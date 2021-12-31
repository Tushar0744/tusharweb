import React from 'react';
//import Common from './Common';
import { NavLink } from "react-router-dom";
import myphoto from "./myphoto1.jpg";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutData from './AboutData';

function About() {
  return (
    <div>
      {/* <Common 
      name="Hello Welcome to About Page " 
      visit="/contact" 
      btname="Contact Now"
      imgsrc={myphoto}
      /> */}

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                  <AboutData />
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started">Contact Me</NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  {/* <img src={myphoto} className="img-fluid animated img-rounded" alt="home img" /> */}
                  <img src={myphoto} className="img-fluid rounded-circle" alt="home img" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default About;
