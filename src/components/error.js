import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Error extends Component {
    render(){
        return (
            <Row className="error">
                <Col sm='12'><h1>Sorry, no page found</h1></Col>
                <Col sm='12' className="pt-4">
                <Link to="/"><button className="core-btn activatedButton">Go to home page</button></Link>
                <Link to="/contact"><button className="core-btn activatedButton">Go to contact page</button></Link>
                </Col>
            </Row>
        );
    };
}


export default Error;