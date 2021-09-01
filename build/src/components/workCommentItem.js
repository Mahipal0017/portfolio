import React from 'react';
import { UncontrolledCarousel, Media } from 'reactstrap';


import planeBackground from '../extras/img//planeBackground.png';
// import img2 from '../extras/img/portfolio-items/2nova.png';
// // import img2 from '../extras/img/portfolio-items/2nova1.png';
// import img3 from '../extras/img/portfolio-items/3autonation.png';
// import img4 from '../extras/img/portfolio-items/4medtronics.png';
// import img5 from '../extras/img/portfolio-items/5factset.png';
// import img6 from '../extras/img/portfolio-items/6ctrlplusr.png';

const item1 = (
    <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
)

const items = [
  {
    src: planeBackground,
    altText: 'Florida Blue',
    caption: item1,
  },
  {
    src: planeBackground,
    altText: 'Nova Southeastern University',

  }
];

const workCommentItem = () => {
    return (
        <div>
            <UncontrolledCarousel items={items} indicators={false} controls={false}/>
        </div>
    );
};

export default workCommentItem;