import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";

import profileImage from "../extras/img/profile.jpeg";
import bitmojiImage from "../extras/img/bitmoji.jpg";
import Resume from "../extras/MahipalReddy_Resume.docx";
import { connect } from "react-redux";
import * as homeActions from "../actions/home";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlreadyAnimated: false,
    };
  }

  componentWillMount() {
    if (this.props.homeReducer.loadedPageNames.includes("about")) {
      this.setState({ isAlreadyAnimated: true });
    }
  }

  componentDidMount() {
    document.title = "Mahipal Reddy/About";
    if (!this.props.homeReducer.loadedPageNames.includes("about")) {
      this.props.dispatch(homeActions.setPageLoadComplete("about"));
    }
  }

  render() {
    return (
      <div className="page-content">
        <PageControls goto="/skills" spanN="skills" classN="next-page-arrow" />
        <PageControls
          goto="/whatido"
          spanN="what i do"
          classN="prev-page-arrow"
        />
        <Navigation />
        <div className="main-container">
          <Row>
            <Col
              lg="4"
              className={`pb-5 pt-2 animated ${
                this.state.isAlreadyAnimated ? "" : "fadeInLeft"
              }`}
            >
              <Row className="about-img-container">
                <Col>
                  <div
                    className="flip-container"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="flipper">
                      <div className="front">
                        <img
                          className="cartoonImage"
                          src={bitmojiImage}
                          alt="Mahipal Reddy"
                        />
                      </div>
                      <div className="back">
                        <img
                          className="profileImage"
                          src={profileImage}
                          alt="Mahipal Reddy"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 className="mt-3 mb-3">
                    Fast | Efficient | Responsive | Updated
                  </h6>
                </Col>
              </Row>
              <Row>
                <a role="button" href={Resume} download="">
                  <button className="core-btn activatedButton download-btn">
                    <i className="fas fa-download hvr-icon"></i> Download CV
                  </button>
                </a>
              </Row>
            </Col>
            <Col lg="8" className="">
              <div
                className={`about-text-container animated ${
                  this.state.isAlreadyAnimated ? "" : "fadeInRight"
                }`}
              >
                {/* <p>
                  I'm comfortable throughout the stack, but my passion lies in
                  the front end, at the intersection of application and user.
                  <br />
                  <br />I have over 9 years of professional experience in
                  designing, developing, maintaining web applications and
                  building the products from ground up. I have created front-end
                  applications using HTML, CSS, SASS and various JavaScript
                  frameworks, ReactJS being the most recent one. Created
                  RESTful, GraphQL API's following monolithic and microservies
                  architecture and consumed them on the front-end. Lead UI team
                  and successfully deployed the applications to the production.
                  Some of the out-of-box achievements are developing a payment
                  gateway by integrating with stripe vendor for Florida Blue,
                  created business component architecture to reuse in various
                  applications, one of key players in creating multi-tenant apps
                  which is a game changer for the company. I use my experience
                  to be more than just a coder, connecting business requirements
                  with modern technology. I also hold a Masters degree in
                  project management from the Valparaiso University.
                </p>
                <p>
                  I am a good listner. I love to read the articles related to
                  space, matter and universe. I am much intrested in travelling,
                  exploring new places and socializing with new people.
                </p>
                <br /> */}
                <p>
                  Greetings! I'm Mahipal Reddy (I go by Mahi), a seasoned and
                  passionate software engineer with over 9 years of experience
                  in the dynamic world of technology. I thrive on tackling
                  complex challenges across the full stack, and my journey has
                  led me through diverse domains, including Automotive,
                  Technology, Healthcare, E-Commerce, Financial, and Academic.
                </p>
                <p>
                  As a Senior Software Developer at Sibros Technologies, I play
                  a pivotal role in building web applications that handle large
                  fleet data, contributing to the mission of eradicating
                  software-related automotive recalls. My journey started at
                  Tesla, where I honed my skills and facilitated teams to
                  efficiently process, track, and deliver orders.
                </p>
                <p>
                  <b>Technical Excellence: </b>I specialize in JavaScript and
                  its frameworks, including ReactJS, Node.js, Express.js,
                  Angular, Lightning Web Components, and more. My expertise
                  extends to mobile-first development methodologies, API
                  development, database management, cloud-based solutions, and a
                  myriad of development tools and testing frameworks.
                </p>
              </div>
            </Col>
            <Col lg="12" className="pb-5">
              <div
                className={`about-text-container animated ${
                  this.state.isAlreadyAnimated ? "" : "fadeInUp"
                }`}
              >
                <p>
                  <b>Leadership and Collaboration: </b>
                  Throughout my career, I've led high-performing development
                  teams, conducted code reviews, and mentored junior developers.
                  Collaboration is at the heart of my approach, fostering an
                  environment where innovative solutions and ideas flourish.
                </p>
                <p>
                  <b>Innovation and Impact: </b>I take pride in my ability to
                  drive innovation, whether it's optimizing application
                  performance, implementing scalable features, or fostering
                  collaborative leadership. My achievements include a 35%
                  reduction in data query response times through GraphQL
                  implementation and a 40% improvement in user satisfaction
                  through UI enhancements.
                </p>
                <p>
                  <b>Diverse Experience: </b>
                  My journey has taken me through various environments, from
                  startups like Sibros Technologies to industry giants like
                  Tesla. I've worked on projects ranging from energy field
                  reporting services to innovative health platforms and
                  multitenant e-commerce sites.
                </p>
                <p>
                  <b>Continuous Learning: </b>I maintain a keen awareness of new
                  industry developments and the evolution of programming
                  solutions. This awareness translates into proof of concepts,
                  demos, and the integration of innovative approaches into
                  existing infrastructures.
                </p>
                <p>
                  <b>Let's Connect: </b>I am passionate about the intersection
                  of technology and human experience. If you're seeking a
                  dedicated and results-driven software engineer with a knack
                  for innovation and collaboration, I'd love to connect.
                  Throughout my career, I've led high-performing development
                  teams, conducted code reviews, and mentored junior developers.
                  Collaboration is at the heart of my approach, fostering an
                  environment where innovative solutions and ideas flourish.
                </p>
                <p>
                  I am a good listener. I love to read the articles related to
                  space, matter and universe. I am much intrested in travelling,
                  exploring new places and socializing with new people.
                </p>
                <p>
                  Thank you for visiting my portfolio, and I look forward to the
                  opportunity to contribute to exciting projects that make a
                  positive impact.
                </p>
              </div>
              {/* <div className="animated fadeInUp">
                <a role="button" href={Resume} download="">
                  <button className="core-btn activatedButton download-btn">
                    <i className="fas fa-download hvr-icon"></i> Download CV
                  </button>
                </a>
              </div> */}
            </Col>
          </Row>
          {/* <Row><Col className="text-center"><h3>"It's the will, more than the skill"</h3></Col></Row> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    homeReducer: store.HomeReducer,
  };
};

export default connect(mapStateToProps)(About);
