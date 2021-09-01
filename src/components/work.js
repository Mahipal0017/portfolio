import React, { Component } from 'react';
import { Row, Col, Media } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";
import WorkItem from './workItem';
import WorkCommentItem from './workCommentItem';

import TeslaLogo from '../extras/img/company-logos/TeslaLogo.png';
import FLBlueLogo from '../extras/img/company-logos/FLBlue.png';
import NSULogo from '../extras/img/company-logos/NSU.png';
import AutoNationLogo from '../extras/img/company-logos/AutoNation.png';
import MedtronicLogo from '../extras/img/company-logos/Medtronic.png';
import FactSetLogo from '../extras/img/company-logos/FactSet.png';
import CTRLPlusRLogo from '../extras/img/company-logos/CTRLPlusR.png';

const workItems = [
  {
    logo: TeslaLogo,
    dates: "Mar'2021 - Present",
    jobTitle: "Software Developer",
    client: "Tesla",
    location: "Salt Lake City, UT",
    projects: "Energy Field Service Reporting, Bolt Automations Form Tool, Grid, Forms API",
    className: "vertical-timeline-element--work"
  },
  {
    logo: FLBlueLogo,
    dates: "Aug'2018 - Mar'2021",
    jobTitle: "Sr.UI Developer",
    client: "Florida Blue",
    location: "Jacksonville, FL",
    projects: "Digital Enrollments, Payment Center, Message Center",
    className: "vertical-timeline-element--work"
  },
  {
    logo: NSULogo,
    dates: "Apr'2018 - Jul'2018",
    jobTitle: "Web Developer",
    client: "Nova South Eastern University",
    location: "Fort Lauderdale, FL",
    projects: "Faculty Roster Database, Spaces, Event Calendar",
    className: "vertical-timeline-element--work"
  },
  {
    logo: AutoNationLogo,
    dates: "Aug'2017 - Mar'2018",
    jobTitle: "UI Developer",
    client: "AutoNation",
    location: "Fort Lauderdale, FL",
    projects: "EMT, SEM Microsites",
    className: "vertical-timeline-element--work"
  },
  {
    logo: MedtronicLogo,
    dates: "Jan'2017 - May'2017",
    jobTitle: "Full Stack Developer",
    client: "Medtronics",
    location: "Arkansas",
    projects: "Digital Enrollments, Payment Center, Message Center",
    className: "vertical-timeline-element--work"
  },
  {
    logo: FactSetLogo,
    dates: "Jun'2015 - Nov'2015",
    jobTitle: "UI/UX Developer I",
    client: "FactSet",
    location: "Hyderabad, India",
    projects: "Digital Enrollments, Payment Center, Message Center",
    className: "vertical-timeline-element--education"
  },
  {
    logo: CTRLPlusRLogo,
    dates: "Jun'2013 - May'2015",
    jobTitle: "Jr.UI/UX Developer",
    client: "CTRL+R Technologies",
    location: "Hyderabad, India",
    projects: "Multiple Projects",
    className: "vertical-timeline-element--education"
  },
]
class Work extends Component {

  componentDidMount() {
    document.title = "Mahipal Reddy/Work"
  }

  render() {
    return (
      <div className="page-content">
        <PageControls goto="/contact" spanN="say hello" classN="next-page-arrow" />
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
          <Row className="be-center w-100 animated5 fadeIn">
            <WorkItem />
            {/* <WorkCommentItem /> */}
          </Row>
          <Row className="pt-5 animated fadeInUp">
            <Col className="text-center"><h3>Work Experience</h3></Col>
            <VerticalTimeline>
              {workItems.map(workItem => {
                return (
                  <VerticalTimelineElement
                    className={workItem.className}
                    iconStyle={{ backgroundImage: `url(${workItem.logo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                    date={workItem.dates}
                  >
                    <h4 className="vertical-timeline-element-subtitle">{workItem.jobTitle}</h4>
                <div><span className="vertical-timeline-element-title">{workItem.client},</span><span> {workItem.location}</span></div>
                <p><strong><emp>Projects:</emp></strong> {workItem.projects}</p>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </Row>
        </div>
      </div>
    );
  };
}

export default Work;