import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import ContactForm from "../Components/ContactForm";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import Banner from "../assets/img/banner_img.png";

class Home extends React.Component {
  render() {
    return (
      <>
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{ paddingTop: 50, paddingBottom: 50 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-5 mt-lg-0 order-2 order-lg-1">
                <h1>Dream of studying abroad?</h1>
                <h2 style={{ color: "white" }}>
                  IELTS | PTE | Spoken English | Study Visa | Tourist Visa |
                  Tour Package
                </h2>
                <a href="#about" className="btn-get-started scrollto">
                  Start Coaching Today
                </a>
              </div>
              <div className="col-lg-6 order-lg-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services mt-5">
          <div className="container my-4">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 style={{ padding: 20, fontSize: 35 }}>COACHING PROVIDED </h1>
              <h4>
                Studying abroad is one of the most transformative and
                life-changing experiences.{" "}
              </h4>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a className="box-coaching-home" href="/coaching/GRE">
                <div
                  className="icon-box-home-coaching"
                  style={{backgroundColor:"#f1f1f1", width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    GRE
                    <br/>
                    <p style={{fontSize: 20}}>(Graduate Record Examination)</p>
                  </h2>
                  <p className="description"></p>
                </div>
                </a>
               
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                                <a className="box-coaching-home" href="/coaching/IELTS">

                <div
                  className="icon-box-home-coaching"
                  style={{ backgroundColor:"#f1f1f1",width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    IELTS
                    <p style={{fontSize: 20}}>(International English Language Testing System)</p>

                  </h2>
                  <p className="description"></p>
                </div>
                </a>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                                <a className="box-coaching-home" href="/coaching/GMAT">

                <div
                  className="icon-box-home-coaching"
                  style={{ backgroundColor:"#f1f1f1",width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    GMAT
                    <p style={{fontSize: 20}}>(Graduate Management Admission Test)</p>

                  </h2>
                  <p className="description"></p>
                </div>
                </a>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                                <a className="box-coaching-home" href="/coaching/SAT">

                <div
                  className="icon-box-home-coaching"
                  style={{ backgroundColor:"#f1f1f1",width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    SAT
                    <p style={{fontSize: 20}}>(Scholastic Assessment Test)</p>

                  </h2>
                  <p className="description"></p>
                </div>
                </a>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                                <a className="box-coaching-home" href="/coaching/PTE">

                <div
                  className="icon-box-home-coaching"
                  style={{ backgroundColor:"#f1f1f1",width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    PTE
                    <p style={{fontSize: 20}}>(Pearson Tests of English)</p>

                  </h2>
                </div>
                </a>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                                <a className="box-coaching-home" href="/coaching/TOEFL">

                <div
                  className="icon-box-home-coaching"
                  style={{backgroundColor:"#f1f1f1", width: 360, height: 200 }}
                >
                  <h2
                    className="title-home-coaching"
                    style={{ textAlign: "left" }}
                  >
                    TOEFL
                    <p style={{fontSize: 20}}>(Test of English as a Foreign Language)</p>

                  </h2>
                  <p className="description"></p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 style={{ padding: 20, fontSize: 35 }}>
                Immigration - Choose your country!
              </h1>
              <h4>Countries We Provide Immigration and Visa Services</h4>
            </div>

            <div className="row justify-content-around">
              <div
                className="col-md-6 col-lg-4 d-flex justify-content-around aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box-home">
                  <h4 className="title">
                    <a href="">United Kingdom</a>
                  </h4>
                  <p className="description">
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Visitor Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Student Visa & Admission
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} /> Work
                        Visa – FSTP
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Business Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} /> PR
                        Visa – Express Entry
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} /> PR
                        Visa – PNP
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 d-flex justify-content-around aos-init aos-animate pointer"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box-home">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Australia</a>
                  </h4>
                  <p className="description">
                    <ul style={{ textAlign: "left" }}>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Visitor Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Student Visa & Admission
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Graduate Work Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} /> TSS
                        Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                        Business Visa
                      </li>
                      <li>
                        <LabelImportantIcon style={{ color: "#a8d3da" }} /> PR
                        Visa – Skill Migration
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-4 d-flex justify-content-around aos-init aos-animate pointer"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <a style={{ width: "100%" }} href="/country/canada">
                  <div className="icon-box-home">
                    <div className="icon">
                      <i className="bx bx-tachometer"></i>
                    </div>
                    <h4 className="title">
                      <a>Canada</a>
                    </h4>
                    <p className="description">
                      <ul style={{ textAlign: "left" }}>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          Visitor Visa
                        </li>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          Student Visa & Admission
                        </li>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          Graduate Work Visa
                        </li>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          Work Visa – H1B
                        </li>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          TSS Visa
                        </li>
                        <li>
                          <LabelImportantIcon style={{ color: "#a8d3da" }} />{" "}
                          Business Visa
                        </li>
                      </ul>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about-2" class="wide-60 about-section division section-bg">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-4">
                <div class="about-img text-center my-3">
                  <img
                    width="350"
                    class="img-fluid"
                    src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    style={{
                      boxShadow: "14px 18px 41px -22px rgba(0,0,0,0.82)",
                      borderRadius: 5
                    }}
                    alt="about-image"
                  />
                </div>
              </div>

              <div class="col-md-8">
                <div class="about-2-txt pc-20 mb-40">
                  <h2 class="section-id id-color">About Us</h2>

                  <span class="span-lg darkblue-color">
                    Consultations for prospective immigrants
                  </span>
                  <br />
                  <br />
                  <div class="box-list">
                    <div class="box-list-icon">
                      <i class="fas fa-genderless"></i>
                    </div>
                    <p>
                      Abroad ways is one of the India’s Overseas Career
                      Consultant and presumably the world’s largest B2C
                      immigration firm. Our 40+ company owned and managed
                      offices across India, Dubai, Sharjah, Melbourne, Sydney
                      and 1100+ employees served over m any customers.
                    </p>
                  </div>

                  <div class="box-list">
                    <div class="box-list-icon">
                      <i class="fas fa-genderless"></i>
                    </div>
                    <p>
                      {" "}
                      We are Licensed Recruitment Agents in India and IATA
                      travel agents. As part of our services, we provide
                      personal one-on-one counseling to about 40,000+ individual
                      inquiries every month for migrating, study and work visas.
                      Over 50% of our customers are through word-of-mouth. No
                      other company understands overseas careers like we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container my-4">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 style={{ padding: 20, fontSize: 35 }}>Visa Categories</h1>
              <h4>
                Applying for a visa can be a stressful prospect. With an endless
                train of paperwork and documentation, it can quickly become
                overwhelming.
              </h4>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">JOB SEEKER VISAS</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">MIGRATE OR TRAVEL VISAS</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">BUSINESS VISAS</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">STUDENT VISAS</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1536607961765-592e80bcc19e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">TOURIST & VISITOR VISAS</a>
                  </h4>
                </div>
              </div>{" "}
              <div
                className="col-md-6 col-lg-4 d-flex align-items-stretch aos-init aos-animate pointer "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                
                
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    backgroundSize: "cover",
                    width: 360,
                    height: 200
                  }}
                >
                  <h4 className="title-custom" style={{ textAlign: "left" }}>
                    <a href="">WORKING HOLIDAY VISAS</a>
                  </h4>
                  <p className="description"></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row p-5">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Latest News</h2>
                  <p>
                    We Are A Creative Digital Agency. Focused on Growing Brands
                    Online
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div
                  className="single-blog-area wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: 0.5,
                    animationName: "fadeInUp"
                  }}
                >
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
                    alt=""
                  />
                  <div className="blog-content my-3">
                    <h5>
                      <a href="static-page.html">We Create Experiences</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div
                  className="single-blog-area wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1529180184525-78f99adb8e98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <div className="blog-content my-3">
                    <h5>
                      <a href="static-page.html">Simple, Fast And Fun</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div
                  className="single-blog-area wow fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
                  <div className="blog-content my-3">
                    <h5>
                      <a href="static-page.html">Device Friendly</a>
                    </h5>
                    <p>
                      The Fancy that recognize the talent and effort of the best
                      web designers, developers and agencies in the world.
                    </p>
                    <a href="static-page.html">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Home;
