import React from 'react';
import { Col } from 'reactstrap';

const SkillToolItem = (props) => {
    return (
        <Col md="3" className="skillToolCol"><img src={props.srcName} className="skillTool"/><h6>{props.toolName}</h6></Col>
    );
};

export default SkillToolItem;