import React, { Component } from 'react';
import InputData from '../../components/input-data/input-data.component';
import SubmitButton from '../../components/submit-button/submit-button.component';
import BackButton from '../../components/back-button/back-button.component';
import { ReactComponent as LaptopSvg } from '../../assets/test.svg';
import McCalc from '../../utils/mcCalculation';
import Warning from '../../components/warning/warning.component';

import './mcpage.styles.scss';

export class McPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lambda: 0,
      miu: 0,
      server: 0,
      customer: 0,
      warning: false,
      warn: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleClose() {
    this.setState({
      warning: false
    });
  }

  handleSubmit() {
    const { miu, lambda, server, customer } = this.state;
    const { history } = this.props;
    let warn = '';
    if (miu === 0) {
      warn = 'Average service time cannot be zero';
    } else if (lambda === 0) {
      warn = 'Average arrival rate cannot be zero';
    } else if (server === 0) {
      warn = 'Total server cannot be zero';
    } else if (customer === 0) {
      warn = 'Total customer cannot be zero';
    }
    if (warn === '') {
      const answer = new McCalc(
        parseInt(lambda),
        parseInt(miu),
        parseInt(customer),
        parseInt(server)
      );
      this.setState({ warn });
      this.props.handleAnswer(answer);
      history.push('/answer');
    } else {
      this.setState({ warn: warn, warning: true });
    }
  }

  handleBack() {
    this.props.history.push('/');
  }

  render() {
    const { handleChange, handleBack, handleSubmit } = this;
    const { miu, lambda, server, customer, warn, warning } = this.state;
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
        {warning ? (
          <div className="mc-warning">
            <Warning warnText={warn} handleClose={this.handleClose} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default McPage;
