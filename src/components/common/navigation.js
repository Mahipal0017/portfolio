import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';
import { Row, Col, Button } from 'reactstrap';


class Navigation extends Component {
    state = {
        isHidden: true,
        addClass1: false,
        addClass2: false,
        isHovered: false,
        headingElement: null
    }
    componentDidMount() {
        const currentRoute = this.props.location.pathname;

        switch (true) {
            case currentRoute.includes("whatido"):
                this.setState(state => {
                    return ({
                        headingElement: 
                        <div className="page-heading animated fadeInDown">
                            <h2 className="main-heading">What I do</h2>
                            <h5 className="main-subheading">Things I'm skilled at and passionate about.</h5>
                        </div>,
                        isWhatIDoSelected: "selected",
                        isAboutSelected: "",
                        isSkillsSelected: "",
                        isWorkSelected: "",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("about"):
                this.setState(state => {
                    return ({
                        headingElement: <div className="page-heading animated fadeInDown">
                            <h2 className="main-heading">About Mahi</h2>
                            <h5 className="main-subheading">I'm a passionate software developer based in Lewisville, TX.</h5>
                        </div>,
                        isWhatIDoSelected: "",
                        isAboutSelected: "selected",
                        isSkillsSelected: "",
                        isWorkSelected: "",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("skills"):
                this.setState(state => {
                    return ({
                        headingElement: <div className="page-heading animated fadeInDown">
                            <h2 className="main-heading">Core Skills</h2>
                            <h5 className="main-subheading">Some of my technology stack</h5>
                        </div>,
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected: "selected",
                        isWorkSelected: "",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("work"):
                this.setState(state => {
                    return ({
                        headingElement: <div className="page-heading animated fadeInDown">
                            <h2 className="main-heading">Recent Work</h2>
                            <h5 className="main-subheading">Portfolio</h5>
                        </div>,
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected: "",
                        isWorkSelected: "selected",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("contact"):
                this.setState(state => {
                    return ({
                        headingElement: <div className="page-heading animated fadeInDown">
                            <h2 className="main-heading">Say Hello</h2>
                            <h5 className="main-subheading">Have a question or want to work together?</h5>
                        </div>,
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected: "",
                        isWorkSelected: "",
                        isContactSelected: "selected",
                    })
                })
                break;
            default:
                this.setState(state => {
                    return ({
                        headingElement: <div className="ribbon animated rubberBand">
                            <Link to="/contact" className="">MAHIPAL REDDY</Link>
                        </div>,
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected: "",
                        isWorkSelected: "",
                        isContactSelected: "",
                    });
                })
        }
    }

    toggleClass = () => {
        this.setState(state => {
            return { isHidden: !state.isHidden }
        });
    }

    addClassNames = () => {
        this.setState(state => {
            return { addClass1: !state.addClass1 }
        });
        setTimeout(() => {
            this.setState(state => {
                return { addClass2: !state.addClass2 }
            });
        }, 500);
        this.toggleClass();
    }

    handleHover = () => {
        this.setState(state => {
            return { isHovered: !state.isHovered }
        });
    }

    render() {
        const {
            addClass1,
            addClass2,
            isHovered,
            isHidden,
            headingElement,
            isWhatIDoSelected,
            isAboutSelected,
            isSkillsSelected,
            isWorkSelected,
            isContactSelected
        } = this.state;
        const burgerClasses = addClass1 ? (addClass2 ? 'burger state-1 state-2' : 'burger state-1') : 'burger';
        const hoverClass = isHovered ? `${burgerClasses} hover` : burgerClasses;

        const burgerIcon =
            (<div onClick={this.addClassNames}
                className={hoverClass}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            >
                <i></i>
                <i></i>
                <i></i>
            </div>)

        const homeLink = <MediaQuery minDeviceWidth={700}>
            {matches => {
                if (matches) {
                    return "MR";
                } else {
                    return <i className="fas fa-user-tie core-2"></i>;
                }
            }}
        </MediaQuery>

        return (
            <>
                <header id="page-header" className={isHidden ? 'hidden' : ''} data-title="Full Stack Web Developer">
                    <Link className="name-link" to='/'>{homeLink}</Link>
                    {/* <div className="ribbon animated rubberBand">
                        <Link to="/contact" className="">MAHIPAL REDDY</Link>
                    </div>
                    <div className="page-heading">
                        <h2 className="main-heading">About Mahi</h2>
                        <h5 className="main-subheading">I'm a software developer based in Dallas, Texas.</h5>
                    </div> */}
                    {headingElement}
                    {burgerIcon}
                    <nav>
                        <Link to="/whatido" className={isWhatIDoSelected}><span>What I Do</span></Link>
                        <Link to="/about" className={isAboutSelected}><span>About</span></Link>
                        <Link to="/skills" className={isSkillsSelected}><span>Skills</span></Link>
                        <Link to="/work" className={isWorkSelected}><span>Work</span></Link>
                        <Link to="/contact" className={isContactSelected}><span>Say Hello</span></Link>
                    </nav>
                </header>
            </>
        );
    }
};

Navigation.defaultProps = {
    isScrolled: false,
}

export default withRouter(Navigation);