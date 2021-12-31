import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Web from "./homeimg.png";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>
            <Common 
      name="Hello, I'm Tushar Sharma" 
      visit="/about" 
      btname="Getting Started"
      imgsrc={Web}
      />
        </>
    );
}

export default Home;
