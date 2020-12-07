import React, { Component } from 'react';
import InputData from '../../components/input-data/input-data.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import BackButton from '../../components/back-button/back-button.component';
import { ReactComponent as LaptopSvg } from '../../assets/test.svg';
import M1Calc from '../../utils/m1Calculation';
import Warning from '../../components/warning/warning.component';

import '../mcpage/mcpage.component';

export class M1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miu: 0,
      lambda: 0,
      customer: 0,
      warning: false,
      warn: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      warning: false
    });
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
    let warn = '';
    if (miu === 0) {
      warn = 'Average service time cannot be zero';
    } else if (lambda === 0) {
      warn = 'Average arrival rate cannot be zero';
    } else if (customer === 0) {
      warn = 'Total customer cannot be zero';
    }
    if (warn === '') {
      const answer = new M1Calc(
        parseInt(lambda),
        parseInt(miu),
        parseInt(customer)
      );
      this.props.handleAnswer(answer);
      history.push('/answer');
    } else {
      this.setState({ warn: warn, warning: true });
    }
  }

  render() {
    const { handleChange, handleSubmit, handleBack } = this;
    const { lambda, miu, customer, warn, warning } = this.state;
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
        {warning ? (
          <div className="mc-warning">
            <Warning warnText={warn} handleClose={this.handleClose} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default M1Page;
