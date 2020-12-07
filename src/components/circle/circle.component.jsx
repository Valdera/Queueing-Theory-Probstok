import React from 'react';
import { ReactComponent as CircleSvg } from '../../assets/circle.svg';
import './circle.styles.scss';

const Circle = ({ mid }) => {
  return (
    <div className="circle">
      <div className="circle-svg">
        <CircleSvg />
      </div>
      <p className="circle-mid">{mid}</p>
    </div>
  );
};

export default Circle;
