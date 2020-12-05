import React, { Component } from 'react';
import InputData from '../../components/input-data/input-data.components';
import SubmitButton from '../../components/submit-button/submit-button.component';
import BackButton from '../../components/back-button/back-button.component';
import { ReactComponent as LaptopSvg } from '../../assets/test.svg';

import './mcpage.styles.scss';

export class McPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intensity: 0,
      server: 0,
      customer: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleBack() {
    this.props.history.push('/');
  }

  render() {
    const { handleChange, handleBack } = this;
    const { intensity, server, customer } = this.state;
    return (
      <div className="mc">
        <div className="mc_left">
          <h1>M/M/c/K or M/M/s/N</h1>
          <InputData
            labelText="Traffic Intensity (&lambda; / &micro;)"
            value={intensity}
            handleChange={handleChange}
            min="0"
            name="intensity"
          />
          <InputData
            labelText="Total server (c) (s)"
            value={server}
            handleChange={handleChange}
            min="0"
            name="server"
          />
          <InputData
            labelText="Total customer (K) (N)"
            value={customer}
            handleChange={handleChange}
            min="0"
            name="customer"
          />
          <div className="mc__button">
            <SubmitButton>Submit Parameter</SubmitButton>
            <BackButton eventHandler={handleBack} />
          </div>
        </div>
        <div className="mc_right">
          <LaptopSvg />
        </div>
      </div>
    );
  }
}

export default McPage;
