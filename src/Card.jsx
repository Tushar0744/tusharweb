import React from 'react';
import { NavLink } from "react-router-dom";
//import SData from './SData';


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    return (
        <>
            <div className="col-md-5 col-10 mx-auto ">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="props.img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
