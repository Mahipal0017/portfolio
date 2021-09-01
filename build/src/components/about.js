import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";

import profileImage from '../extras/img/profile.jpeg';
import bitmojiImage from '../extras/img/bitmoji.jpg';
import Resume from '../extras/Mahipal-Resume.docx';

class About extends Component {

    componentDidMount(){
        document.title = "Mahipal Reddy/About"
    }

    render(){
        return (
            <div className="page-content">
                <PageControls goto="/skills" spanN="skills" classN="next-page-arrow" />
                <PageControls goto="/whatido" spanN="what i do" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col lg="4" className="pb-5 animated fadeInLeft">
                            <Row className="about-img-container" >
                            <Col>
                                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	                                <div className="flipper">
	                            	    <div className="front"><img className="cartoonImage" src={bitmojiImage} alt="Mahipal Reddy" /></div>
	                            	    <div className="back"><img className="profileImage" src={profileImage} alt="Mahipal Reddy" /></div>
	                                </div>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 className="mt-3">Fast | Efficient | Responsive | Updated</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="8" className="pb-5">
                            <div className="about-text-container animated fadeInRight">
                                <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of application and user.
                                <br/><br/>I have over 7 years of professional experience in designing, developing, maintaining web applications and building the products from ground up.
                                I have created front-end applications using HTML, CSS, SASS and various JavaScript frameworks, ReactJS being the most recent one. Created RESTful, GraphQL API's following monolithic and microservies architecture and consumed them on the front-end.
                                Lead UI team and successfully deployed the applications to the production. Some of the out-of-box achievements are developing a payment gateway by integrating with stripe vendor for Florida Blue, created business component architecture to reuse in various applications, one of key players in creating multi-tenant apps which is a game changer for the company.
                                I use my experience to be more than just a coder, connecting business requirements with modern technology.
                                I also hold a Masters degree in project management from the Valparaiso University.</p>
                                <p>I am a good listner. I love to read the articles related to space, matter and universe.
                                I am much intrested in travelling, exploring new places and socializing with new people.</p>
                                <br/>
                            </div>
                            <div className="animated fadeInUp">
                            <a role="button" href={Resume} download="">
                                <button className="core-btn activatedButton download-btn"><i className="fas fa-download hvr-icon"></i> Download CV</button>
                            </a>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row><Col className="text-center"><h3>"It's the will, more than the skill"</h3></Col></Row> */}
                </div>
            </div>
        );
    }
};

export default About;