import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Login from "./login"

class Initial extends Component {
    render(){
        return (
            <Row className="questionPage">
               <Col md='6' className="left-container" style={{ left: "100px", opacity: "1", width: "420px"}}>
                    <div className="inner-container-wrapper">
                        <div className="inner-container">
                            <div className="inner inner-left">
                                <h5><i>Create Account</i></h5>
                                <h2>Register Here</h2>
                                {/* <Login /> */}
                            </div>
                        </div>
                    </div>
               </Col>
               <Col md='6' className="right-container" style={{ right: "100px", opacity: "1", width: "420px"}}>
                    <div className="inner-container-wrapper">
                        <div className="inner-container">
                            <div className="inner inner-right">
                                <h5><i>Guest Login</i></h5>
                                <h2>Enter Here</h2>
                            </div>
                        </div>
                    </div>
               </Col>
            </Row>
        );
    };
}


export default Initial;