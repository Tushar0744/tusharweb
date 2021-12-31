import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Web from "./homeimg.png";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>{" "}
                  <strong className="brand-name">
                    {" "}
                     Front-end Web Developer
                  </strong>
                  <h2 className="my-3">
                    I want to make things that make a difference
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>

        <div id="footer" className=" align-items-center">
          <p>Copyright &copy; 2021 Tushar Sharma</p>
      </div>
        </div>

      </section>

      
      
    </>
  );
}

export default Common;
