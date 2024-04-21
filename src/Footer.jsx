import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Facebooklogo from "./Facebooklogo.svg";
//import 'bootstrap/dist/js/bootstrap.bundle';
//import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-6 mx-auto">
            <div className="footerbox">
            <footer className="w-100 bg-light text-center mt-10 h-10">
                <a target="blank" href="https://www.facebook.com/">
                    <img src={Facebooklogo} alt="weblogo" />
                    <div>Facebook</div>
                </a>
            </footer>
            <footer className="w-100 bg-light text-center mt-10 h-10">
                <a target="blank" href="https://www.facebook.com/">
                    <img src={Facebooklogo} alt="weblogo" />
                    <div>Facebook</div>
                </a>
            </footer>
            <footer className="w-100 bg-light text-center mt-10 h-10">
                <a target="blank" href="https://www.facebook.com/">
                    <img src={Facebooklogo} alt="weblogo" />
                    <div>Facebook</div>
                </a>
            </footer>
            <footer className="w-100 bg-light text-center mt-10 h-10">
                <a target="blank" href="https://www.facebook.com/">
                    <img src={Facebooklogo} alt="weblogo" />
                    <div>Facebook</div>
                </a>
            </footer>
        </div>
            </div>
        </div>
</div>

        
        
    );

}

export default Footer;

