import React from 'react';
import { Link } from 'react-router-dom';

const PageControls = (props) => {
    //location name
    //next-page-arrow or prev-page-arrow
    //text that to be displayed when hovered
    const { goto, classN, spanN } = props;
    return (
        <div className="page-control animated10 fadeIn">
            <Link to={goto} className={classN}>
                <span>{spanN}</span>
                <em></em>
            </Link>
        </div>
    );
};

export default PageControls;