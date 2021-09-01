import React, {Fragment} from 'react';
import { Progress } from 'reactstrap';

const skillItem = (props) => {
    return (
        <div className="justify-content-center flex pb-2">
            <div className="pr-0"><h4 className="skill-item text-center"><span>{props.skillName}</span></h4></div>
            <div className="pl-0 pr-0 progress-container"><Progress animated value={`${props.skillValue}`}></Progress></div>
            <div className="pl-0"><label className="skill-item item-value"><span>{props.skillValue}%</span></label></div>
        </div>
    );
};

export default skillItem;