import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import WebIcon from "@material-ui/icons/Web";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Service() {
  return (
    <>
      <div className="skills section-bg" id="skills">
        <div className="container">
          <div className="skills-title">
            <h1 className="text-center">Skills</h1>
            {/* <p>
              The Indian women would look to double the nation's joy when they
              face Great Britain in their bronze medal hockey match{" "}
            </p> */}
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div class="progress">
                <span className="skill">
                  Java<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Spring Boot<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  React.js<i className="val">80%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  MySQL<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Javascript<i className="val">80%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Amazon Web Service<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div class="progress">
                <span className="skill">
                  C++<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Typescript<i className="val">80%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Amazon Dynamo DB<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Python<i className="val">80%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Kubernetes<i className="val">80%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
              <div class="progress">
                <span className="skill">
                  Azure<i className="val">100%</i>
                </span>

                <div
                  class="progress-bar-wrap"
                  role="progressbar"
                  style={{ width: " 100%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5 col-10">
        <div className="row">
          {/*Educatin Starts */}

          <div className=" col-12 col-lg-4 mx-auto gy-3">
            <div className="row gy-4 ">
              <h1 className="container text-center">Education</h1>

              {/* <div>
                <div className="educ">
                  <p>
                    <CastForEducationIcon /> B.Tech
                  </p>
                  <p>Electronics and Communication Engineering</p>
                  <p>
                    Birla Institute of Technology & Science,Pilani, K K Birla
                    Goa Campus
                  </p>
                  <p>2019-2024</p>
                </div>
                <div className="educ">
                  <p>
                    <CastForEducationIcon />M Sc. Chemistry
                  </p>
                  <p>Electronics and Communication Engineering</p>
                  <p>
                    Birla Institute of Technology & Science,Pilani, K K Birla
                    Goa Campus
                  </p>
                  <p>2019-2024</p>
                </div>
              </div> */}

              <div
                class="card text-dark bg-light mb-3"
                style={{ maxWidth: "100%" }}
              >
                <div class="card-header">
                  <CastForEducationIcon /> B.Tech
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    Electronics and Communication Engineering
                  </h5>
                  <p class="card-text">
                    Birla Institute of Technology & Science,Pilani, K K Birla
                    Goa Campus
                  </p>
                  <p>2019-2024</p>
                </div>
                <div class="card-header">
                  {" "}
                  <CastForEducationIcon /> Master of Science (Hons.)
                </div>
                <div class="card-body">
                  <h5 class="card-title">Chemistry</h5>
                  <p class="card-text">
                    Birla Institute of Technology & Science,Pilani, K K Birla
                    Goa Campus
                  </p>
                  <p>2019-2024</p>
                </div>
              </div>

              {/* <div className="education1  jumbotron bg-cover text-white rounded-3 ">
                <h4 class=" text-center">
                  B.E. Electronics and Communication Engineering
                </h4>
                <h4 class=" text-center">
                  Birla Institute of Technology & Science,Pilani
                </h4>
                <h5 class=" text-center">K K Birla Goa Campus( 2019-2024) </h5>
                <hr class="my-4" />
                <h4 class=" text-center">M.Sc. Chemistry</h4>
                <h4 class=" text-center">
                  Birla Institute of Technology & Science,Pilani
                </h4>
                <h5 class=" text-center">K K Birla Goa Campus( 2019-2024) </h5>
              </div> */}

              {/* <div className="education ">
                <div
                  class="card shadow-lg text-white bg-dark mb-3 mx-auto text-center"
                  style={{ maxWidth: "100%" }}
                >
                  <div class="card-header">
                    B.Tech ( Electronics and Communication Engineering )
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">2019-2024</h5>
                    <p class="card-text">
                      There are four different syntaxes you can use with this
                      property: the keyword syntax ("auto", "cover" and
                      "contain"), the one-value syntax (sets the width of the
                      image (height becomes "auto"), the two-value syntax (first
                      value: width of the image, second value: height), and the
                      multiple background syntax (separated with comma)
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/*Educatin Ends */}

          {/* Experience start */}

          <div className="col-12 col-lg-8 mx-auto gy-3 ">
            <div className="row temp-wrap gy-4 ">
              <h1 className="container text-center">Experience</h1>

              <div className="education">
                <div
                  class="card shadow-lg text-dark bg-light mb-3 mx-auto"
                  style={{ maxWidth: "100%" }}
                >
                  {/* <img
                    className="education-bg"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    alt=""
                  /> */}

                  <div class="card-body">
                    <div>
                      <h5>
                        <WebIcon /> Software Development Intern
                      </h5>
                    </div>
                    <h5 class="card-title">
                      {" "}
                      <LocationOnIcon /> Rivigo, Gurugaon India
                    </h5>
                    <h5 class="card-title">Jan,2024-Present</h5>
                    <hr />
                    <p class="card-text">
                      <ul>
                        <li>
                          Developed a graph visualization system to track
                          city-to-city tonnage data for all consignments across
                          India, facilitating logistical analysis and strategic
                          decision-making for Mahindra Logistics.
                        </li>
                        <li>
                          Worked on the development of the PACE Dashboard along
                          with team, a tool for ticket creation, resolver group
                          management, and event notifications across Mahindra
                          Logistics, enhancing operational efficiency and issue
                          resolution.
                        </li>
                        <li>
                          Worked on end to end design of PACE, focusing on
                          system, database, and infrastructure elements,
                          ensuring integration and effective performance within
                          the company's operations.
                        </li>
                        <li>
                          Reduced annual logistics management costs by
                          ₹3,000,000 through the development and implementation
                          of PACE that replaced Mahindra Logistics' dependence
                          on iPrism.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                {/* <div class="card bg-dark text-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    class="card-img"
                    alt="..."
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">Last updated 3 mins ago</p>
                  </div>
                </div> */}
              </div>

              <div className="education">
                <div
                  class="card shadow-lg text-dark bg-light mb-3 mx-auto"
                  style={{ maxWidth: "100%" }}
                >
                  {/* <img
                    className="education-bg"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    alt=""
                  /> */}

                  <div class="card-body">
                    <div>
                      <h5>
                        <WebIcon /> Software Development Intern
                      </h5>
                    </div>
                    <h5 class="card-title">
                      {" "}
                      <LocationOnIcon /> Amazon, Hyderabad India
                    </h5>
                    <h5 class="card-title">July,2023-Dec,2023</h5>
                    <hr />
                    <p class="card-text">
                      <ul>
                        <li>
                        <strong>AWS CloudWatch Alarms:</strong> Established AWS  alarms and dashboards for SQS, SNS, DDB, ECS Cluster, API, SWF, and Error Logs by writing code using the CDK Package in TypeScript. Automated the alarm creation process and ensured that threshold adjustments and future version upgrades would be handled seamlessly.
                        </li>
                        <li>
                        <strong>Integration Test for  Government Invoice Compliance Service:</strong> Successfully developed an integration test infrastructure and composed comprehensive integration tests for all APIs and their use cases within a newly launched service which interfacing with government entities for the validation and registration of invoices on the Amazon platform

                        </li>
                        <li>
                        <strong>Improved Team Service with Custom Metric Publisher:</strong> I added a special tool to our team's service that makes it easy to send important metrics to CloudWatch.
                        </li>
                        <li>
                        <strong>Resolved Service Rate Limiter:</strong> Recognized and resolved a significant Rate Limiter issue within the team Service that had been causing us to exceed the allowable limit when interacting with downstream services. Fixed the Rate Limiter problem and ensured precise alignment of  values with our existing traffic, effectively resolving a persistent  issue.

                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                {/* <div class="card bg-dark text-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    class="card-img"
                    alt="..."
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">Last updated 3 mins ago</p>
                  </div>
                </div> */}
              </div>

              <div className="education">
                <div
                  class="card shadow-lg text-dark bg-light mb-3 mx-auto"
                  style={{ maxWidth: "100%" }}
                >
                  {/* <img
                    className="education-bg"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    alt=""
                  /> */}

                  <div class="card-body">
                    <div>
                      <h5>
                        <WebIcon /> Software Development Intern
                      </h5>
                    </div>
                    <h5 class="card-title">
                      {" "}
                      <LocationOnIcon /> Swecha, Hyderabad India
                    </h5>
                    <h5 class="card-title">May,2021-July,2021</h5>
                    <hr />
                    <p class="card-text">
                      <ul>
                        <li>
                        Led a 15-member team for Telugu speech corpus collection, demonstrating strong leadership and Agile coordination skills.
                        </li>
                        <li>
                        Enhanced the Swecha Voice Corpus Collecting website's user interface using React JS and Bootstrap.
                        </li>
                        <li>
                        Integrated Swecha's social media links into the website footer, boosting user engagement.
                        </li>
                        <li>
                        Introduced a user-friendly data capture form for voice recordings..

                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

                {/* <div class="card bg-dark text-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
                    class="card-img"
                    alt="..."
                  />
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">Last updated 3 mins ago</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Experience start */}
        </div>
      </div>
    </>
  );
}

export default Service;

{
  /* <div className="my-5">
        <h1 className="text-center">Our Sirvices</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              {
                SData.map((val,ind)=>{
                  return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
                })
              }

            </div>
          </div>
        </div>
      </div> */
}

{
  /* <p className="lead text-center">
                I am pursuing the  B.E. Electronics and Communication Engineering and M.Sc. Chemistry under Dual Degree programme of studies.
                </p>
                 <hr class="my-4" /> 
                <p className="lead text-center">
                  It uses utility classes for typography and spacing to space
                  content out within the larger container.
                </p> */
}
