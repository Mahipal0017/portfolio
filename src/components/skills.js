import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress, Button, Fade } from 'reactstrap';

import Navigation from './common/navigation';
import PageControls from "./common/pageControls";

import SkillItem from './skillItem';
import SkillToolItem from './skillToolItem';

import firebaseImg from '../extras/img/tools-items/firebase.png';
import gitImg from '../extras/img/tools-items/git.png';
import gitlabImg from '../extras/img/tools-items/gitlab.png';
import babelImg from '../extras/img/tools-items/babel.png';
import postmanImg from '../extras/img/tools-items/postman.png';
import stripeImg from '../extras/img/tools-items/stripe.png';
import vscodeImg from '../extras/img/tools-items/vscode.png';
import webpackImg from '../extras/img/tools-items/webpack.png';

const skillsList = [
    { s: "JavaScript", v: "80" },
    { s: "ReactJS", v: "85" },
    { s: "Redux", v: "90" },
    { s: "NodeJS", v: "75" },
    { s: "ExpressJS", v: "80" },
    { s: "Angular2", v: "75" },
    { s: "LWC", v: "85" },
    { s: "ImmuatbelJS", v: "70" },
    { s: "Bootstrap", v: "90" },
    { s: "SCSS", v: "85" },
    { s: "CSS3", v: "85" },
    { s: "HTML5", v: "90" },
    { s: "AngularJS", v: "80" }
]

const toolsList = [
    { s: vscodeImg, t: "VS Code" },
    { s: gitImg, t: "Git" },
    { s: gitlabImg, t: "GitLab" },
    { s: postmanImg, t: "Postman" },
    { s: webpackImg, t: "Webpack" },
    { s: babelImg, t: "Babel" },
    { s: stripeImg, t: "Stripe" },
    { s: firebaseImg, t: "Firebase" }
]

class Skills extends Component {
    state = {
        fadeIn: false
    }

    componentDidMount() {
        document.title = "Mahipal Reddy/Skills"
    }

    toggle = () => {
        this.setState(state => {
            return {
                fadeIn: !state.fadeIn
            }
        })
    }

    render() {
        return (
            <div className="page-content">
                <PageControls goto="/work" spanN="my work" classN="next-page-arrow" />
                <PageControls goto="/about" spanN="about" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col className="progress-bars-container animated fadeInRight">
                            {skillsList.map(item => <SkillItem skillName={item.s} skillValue={item.v} />)}
                        </Col>
                    </Row>
                    <Row className="mb-2 mt-5 ml-2 mr-2 animated fadeInLeft be-center">
                        <Col>
                            <button className="core-btn activatedButton" onClick={this.toggle}>TOOLS I USE</button>
                        </Col>
                    </Row>
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                        <Row className="tools pt-3 pb-3 mr-5 ml-5">
                            {toolsList.map(item => <SkillToolItem srcName={item.s} toolName={item.t} />)}
                        </Row>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Skills;