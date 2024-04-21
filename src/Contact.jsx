import React from "react";
import { useState } from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const formsubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}. Here is what U want to say ${data.msg}`
    );
  };

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_87324jb", "template_3dvap0e", e.target, "user_ynfemjaR6QCPFMQPcgfEL")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      //e.target.reset()
  }

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  

  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-4 col-10 mx-auto mb-3">
            <h2 className="py-2" > <MailOutlineIcon fontSize="large"/> <a href="https://www.google.com/gmail/" target="_blank"> Email </a> </h2>
            
            <h2 className="py-2"> <LinkedInIcon fontSize="large"/> <a href="https://www.linkedin.com/in/tushar-sharma-24aab4209/" target="_blank"> LinkedIn </a></h2>
            
            <h2 className="py-2" > <GitHubIcon fontSize="large"/><a href="https://github.com/Tushar0744" target="_blank"> GitHub </a></h2>
            
            {/* <h2 className="py-2"> <LanguageIcon fontSize="large"/><a href="http://localhost:3000/contact" target="_blank"> Portfolio </a></h2> */}
          </div>

          
          
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={formsubmit} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  name="fullname"
                  value={data.name}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
