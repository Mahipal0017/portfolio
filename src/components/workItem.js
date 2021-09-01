import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img0 from '../extras/img/portfolio-items/0tesla.png';
import img1 from '../extras/img/portfolio-items/1flblue.png';
import img2 from '../extras/img/portfolio-items/2nova.png';
// import img2 from '../extras/img/portfolio-items/2nova1.png';
import img3 from '../extras/img/portfolio-items/3autonation.png';
import img4 from '../extras/img/portfolio-items/4medtronics.png';
import img5 from '../extras/img/portfolio-items/5factset.png';
import img6 from '../extras/img/portfolio-items/6ctrlplusr.png';

const items = [
  {
    src: img0,
    altText: 'Tesla'
  },
  {
    src: img1,
    altText: 'Florida Blue',
  },
  {
    src: img2,
    altText: 'Nova Southeastern University',
  },
  {
    src: img3,
    altText: 'Autonation',
  },
  {
    src: img4,
    altText: 'Medtronics',
  },
  {
    src: img5,
    altText: 'FactSet',
  },
  {
    src: img6,
    altText: 'CTRL+R Technologies',
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