import React, { Component } from 'react';
import InputData from '../../components/input-data/input-data.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import BackButton from '../../components/back-button/back-button.component';
import { ReactComponent as LaptopSvg } from '../../assets/test.svg';
import McCalc from '../../utils/mcCalculation';

import './mcpage.styles.scss';

export class McPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lambda: 0,
      miu: 0,
      server: 0,
      customer: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit() {
    const { miu, lambda, server, customer } = this.state;
    const { history } = this.props;
    const answer = new McCalc(lambda, miu, customer, server);
    this.props.handleAnswer(answer, 'mc');
    history.push('/answer');
  }

  handleBack() {
    this.props.history.push('/');
  }

  render() {
    const { handleChange, handleBack, handleSubmit } = this;
    const { miu, lambda, server, customer } = this.state;
    return (
      <div className="mc">
        <div className="mc_left">
          <h1>M/M/c/K or M/M/s/N</h1>
          <InputData
            labelText="Average arrival rate (&lambda;)"
            value={lambda}
            handleChange={handleChange}
            min="0"
            name="lambda"
          />
          <InputData
            labelText="Average service time (&micro;)"
            value={miu}
            handleChange={handleChange}
            min="0"
            name="miu"
          />
          <InputData
            labelText="Total server (c) or (s)"
            value={server}
            handleChange={handleChange}
            min="0"
            name="server"
          />
          <InputData
            labelText="Total customer (K) or (N)"
            value={customer}
            handleChange={handleChange}
            min="0"
            name="customer"
          />
          <div className="mc__button">
            <SubmitButton eventHandler={handleSubmit}>
              Submit Parameter
            </SubmitButton>
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
