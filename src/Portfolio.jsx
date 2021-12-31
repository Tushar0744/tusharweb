import React from "react";
// import { NavLink } from 'react-router-dom';
// import Common from './Common';
// import Web from "./homeimg.png";
import SData from "./SData";
import SData2 from "./SData2";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Works</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SData.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link} text={val.text} />;
              })}
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-center">My Certifications</h1>
        </div>

        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {SData2.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link} text={val.text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
