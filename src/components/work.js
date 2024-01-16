import React, { Component } from "react";
import { Row, Col, Media } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";
import WorkItem from "./workItem";
import WorkCommentItem from "./workCommentItem";

import SibrosLogo from "../extras/img/company-logos/SibrosLogo.png";
import TeslaLogo from "../extras/img/company-logos/TeslaLogo.png";
import FLBlueLogo from "../extras/img/company-logos/FLBlue.png";
import NSULogo from "../extras/img/company-logos/NSU.png";
import AutoNationLogo from "../extras/img/company-logos/AutoNation.png";
import MedtronicLogo from "../extras/img/company-logos/Medtronic.png";
import ValpoLogo from "../extras/img/company-logos/ValpoLogo.png";
import FactSetLogo from "../extras/img/company-logos/FactSet.png";
import CTRLPlusRLogo from "../extras/img/company-logos/CTRLPlusR.png";

import { connect } from "react-redux";
import * as homeActions from "../actions/home";

const workItems = [
  {
    logo: SibrosLogo,
    dates: "Oct'2021 - Present",
    jobTitle: "Senior Software Developer",
    client: "Sibros Technologies",
    location: "Lewisville, TX",
    projects:
      "Web Portal, Deep Logger, Deep Updater, Deep Commander, Support System",
    className: "vertical-timeline-element--work",
  },
  {
    logo: TeslaLogo,
    dates: "Mar'2021 - Sep' 2021",
    jobTitle: "Senior Full Stack Developer",
    client: "Tesla",
    location: "Salt Lake City, UT",
    projects:
      "Energy Field Service Reporting, Bolt Automations Form Tool, Grid, Forms API",
    className: "vertical-timeline-element--work",
  },
  {
    logo: FLBlueLogo,
    dates: "Apr'2018 - Mar'2021",
    jobTitle: "Senior Frontend Developer",
    client: "AR International Enterprises",
    location: "Jacksonville, FL",
    projects:
      "My Health Link, Truli Health, Chatbot, Payment Center, Message Center, Event Calendar, FRD, Spaces",
    className: "vertical-timeline-element--work",
  },
  // {
  //   logo: NSULogo,
  //   dates: "Apr'2018 - Jul'2018",
  //   jobTitle: "Web Developer",
  //   client: "Nova South Eastern University",
  //   location: "Fort Lauderdale, FL",
  //   projects: "Faculty Roster Database, Spaces, Event Calendar",
  //   className: "vertical-timeline-element--work"
  // },
  {
    logo: AutoNationLogo,
    dates: "Aug'2017 - Mar'2018",
    jobTitle: "UI Developer",
    client: "Vibha Inc (AutoNation)",
    location: "Fort Lauderdale, FL",
    projects: "EMT, SEM Microsites",
    className: "vertical-timeline-element--work",
  },
  // {
  //   logo: MedtronicLogo,
  //   dates: "Jan'2017 - May'2017",
  //   jobTitle: "Full Stack Developer",
  //   client: "Medtronics",
  //   location: "Arkansas",
  //   projects: "Digital Enrollments, Payment Center, Message Center",
  //   className: "vertical-timeline-element--work"
  // },
  {
    logo: ValpoLogo,
    dates: "Dec'2015 - May'2015",
    jobTitle: "Masters in Information Technology",
    client: "Valparaiso University",
    location: "Valparaiso, Indiana",
    projects: "Information Technology",
    className: "vertical-timeline-element--education",
  },
  {
    logo: FactSetLogo,
    dates: "Jun'2015 - Nov'2015",
    jobTitle: "Software Associate I",
    client: "FactSet",
    location: "Hyderabad, India",
    projects: "COMA",
    className: "vertical-timeline-element--work",
  },
  {
    logo: CTRLPlusRLogo,
    dates: "Jun'2013 - May'2015",
    jobTitle: "Junior Software Developer",
    client: "CTRL+R Technologies",
    location: "Hyderabad, India",
    projects: "Multiple Projects",
    className: "vertical-timeline-element--work",
  },
];
class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlreadyAnimated: false,
    };
  }

  componentWillMount() {
    if (this.props.homeReducer.loadedPageNames.includes("work")) {
      this.setState({ isAlreadyAnimated: true });
    }
  }

  componentDidMount() {
    document.title = "Mahipal Reddy/Work";
    if (!this.props.homeReducer.loadedPageNames.includes("work")) {
      this.props.dispatch(homeActions.setPageLoadComplete("work"));
    }
  }

  render() {
    return (
      <div className="page-content">
        <PageControls
          goto="/contact"
          spanN="say hello"
          classN="next-page-arrow"
        />
        <PageControls goto="/skills" spanN="skills" classN="prev-page-arrow" />
        <Navigation />
        <div className="main-container">
          {/* <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media> */}
          <Row
            className={`be-center w-100 animated5 ${
              this.state.isAlreadyAnimated ? "" : "fadeIn"
            }`}
          >
            <WorkItem />
            {/* <WorkCommentItem /> */}
          </Row>
          <Row
            className={`pt-5 animated ${
              this.state.isAlreadyAnimated ? "" : "fadeInUp"
            }`}
          >
            <Col className="text-center">
              <h3>Work Experience</h3>
            </Col>
            <VerticalTimeline>
              {workItems.map((workItem) => {
                return (
                  <VerticalTimelineElement
                    className={workItem.className}
                    iconStyle={{
                      backgroundImage: `url(${workItem.logo})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    date={workItem.dates}
                  >
                    <h4 className="vertical-timeline-element-subtitle">
                      {workItem.jobTitle}
                    </h4>
                    <div>
                      <span className="vertical-timeline-element-title">
                        {workItem.client},
                      </span>
                      <div> {workItem.location}</div>
                    </div>
                    <p>
                      <strong>
                        <emp>Projects:</emp>
                      </strong>{" "}
                      {workItem.projects}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </Row>
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

export default connect(mapStateToProps)(Work);
