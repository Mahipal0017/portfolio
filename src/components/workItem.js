import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img7 from '../extras/img/portfolio-items/7sibros.png';
import img6 from '../extras/img/portfolio-items/6tesla.png';
import img5 from '../extras/img/portfolio-items/5flblue.png';
import img4 from '../extras/img/portfolio-items/4nova.png';
// import img2 from '../extras/img/portfolio-items/2nova1.png';
import img3 from '../extras/img/portfolio-items/3autonation.png';
import img2 from '../extras/img/portfolio-items/2medtronics.png';
import img1 from '../extras/img/portfolio-items/1factset.png';
import img0 from '../extras/img/portfolio-items/0ctrlplusr.png';

const items = [
  {
    src: img6,
    altText: 'Tesla'
  },
  {
    src: img5,
    altText: 'Florida Blue',
  },
  {
    src: img4,
    altText: 'Nova Southeastern University',
  },
  {
    src: img3,
    altText: 'Autonation',
  },
  {
    src: img2,
    altText: 'Medtronics',
  },
  {
    src: img1,
    altText: 'FactSet',
  },
  {
    src: img0,
    altText: 'CTRL+R Technologies',
  },
  {
    src: img7,
    altText: 'Sibros Technologies'
  },
];

const workItem = () => {
    return (
        <div>
            <UncontrolledCarousel items={items} indicators={false} />
        </div>
    );
};

export default workItem;