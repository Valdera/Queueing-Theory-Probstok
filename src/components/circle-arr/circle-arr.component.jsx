import { ReactComponent as CircleArrSvg } from '../../assets/circlearr.svg';
import './circle-arr.styles.scss';
import React, { Component } from 'react';

export class CircleArr extends Component {
  static defaultProps = {
    num: ''
  };
  render() {
    const { top, bot, mid, num } = this.props;
    return (
      <div className="circlearr">
        <p className="circlearr-top">{top}</p>
        <div className="circlearr-svg">
          <CircleArrSvg />
        </div>
        <p className="circlearr-mid">{mid}</p>
        <p className="circlearr-bot">
          {num}
          {bot}
        </p>
      </div>
    );
  }
}

export default CircleArr;
