import React, { Component } from 'react';
import InputData from '../../components/input-data/input-data.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import BackButton from '../../components/back-button/back-button.component';
import { ReactComponent as LaptopSvg } from '../../assets/test.svg';
import M1Calc from '../../utils/m1Calculation';

import '../mcpage/mcpage.component';

export class M1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miu: 0,
      lambda: 0,
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

  handleBack() {
    this.props.history.push('/');
  }

  handleSubmit() {
    const { miu, lambda, customer } = this.state;
    const { history } = this.props;
    const answer = new M1Calc(lambda, miu, customer);
    this.props.handleAnswer(answer, 'm1');
    history.push('/answer');
  }

  render() {
    const { handleChange, handleSubmit, handleBack } = this;
    const { lambda, miu, customer } = this.state;
    return (
      <div className="mc">
        <div className="mc_left">
          <h1>M/M/1/K or M/M/1/N</h1>
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

export default M1Page;
