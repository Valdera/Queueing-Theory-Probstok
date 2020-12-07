import React, { Component } from 'react';
import './answer.styles.scss';
import BackButton from '../../components/back-button/back-button.component';
import AnswerItem from '../../components/answer-item/answer-item.component';
import { ReactComponent as MathSvg } from '../../assets/math.svg';
import InputData from '../../components/input-data/input-data.component';
import Circle from '../../components/circle/circle.component';
import CircleArr from '../../components/circle-arr/circle-arr.component';

import './answer.styles.scss';

export class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.generateDiagram = this.generateDiagram.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     answer: this.props.answer,
  //     mode: this.props.mode
  //   });
  // }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleBack() {
    this.props.history.push('/');
  }

  generateDiagram() {
    const { answer } = this.props;
    const mode = answer.mode;
    let arrElement = [];
    if (mode === 'm1') {
      for (let i = 0; i <= answer.customer + 1; i++) {
        if (i === answer.customer + 1) {
          arrElement.push(<Circle mid={i} />);
        } else if (i === answer.customer) {
          arrElement.push(<CircleArr top="0" bot="0" mid={i} />);
        } else {
          arrElement.push(<CircleArr top="&lambda;" bot="&micro;" mid={i} />);
        }
      }
    } else if (mode === 'mc') {
      if (answer.server > 1) {
        for (let i = 0; i < answer.server - 1; i++) {
          arrElement.push(
            <CircleArr top="&lambda;" num={i + 1} bot="&micro;" mid={i} />
          );
        }
      }
      for (let i = answer.server - 1; i < answer.customer - 1; i++) {
        arrElement.push(
          <CircleArr top="&lambda;" num={answer.server} bot="&micro;" mid={i} />
        );
      }
      for (let i = answer.customer - 1; i <= answer.customer + 1; i++) {
        if (i === answer.customer + 1) {
          arrElement.push(<Circle mid={i} />);
        } else if (i === answer.customer) {
          arrElement.push(<CircleArr top="0" bot="0" mid={i} />);
        } else {
          arrElement.push(
            <CircleArr
              top="&lambda;"
              num={answer.server}
              bot="&micro;"
              mid={i}
            />
          );
        }
      }
    }
    return arrElement;
  }

  render() {
    const { handleBack, handleChange } = this;
    const { answer } = this.props;
    const { n } = this.state;
    const diagram = this.generateDiagram();
    console.log(answer);
    return (
      <div className="answer">
        <div className="answer-left">
          <div className="answer-svg">
            <MathSvg />
          </div>
          <span>Diagram Alir:</span>
          <div className="answer-queue">
            <div>{diagram !== [] ? diagram.map((value) => value) : null}</div>
          </div>
        </div>
        <div className="answer-right">
          <div className="answer-title">
            <BackButton eventHandler={handleBack} />
            <h1>{answer.mode === 'mc' ? 'M/M/c/K' : 'M/M/1/K'} Answer:</h1>
          </div>

          <AnswerItem
            label="The traffic intensity (p)"
            answer={answer.intensity.toFixed(4)}
          />
          <AnswerItem
            label="The effective arrival rate (&lambda;e)"
            answer={answer.lambdaE.toFixed(4)}
          />
          <AnswerItem
            label="The expected number of customers in the system (L)"
            answer={answer.l.toFixed(4)}
          />
          <AnswerItem
            label="The average length of the queue (Lq)"
            answer={answer.lq.toFixed(4)}
          />
          <AnswerItem
            label="The the average time a customer spends in the system (W)"
            answer={answer.w.toFixed(4)}
          />
          <AnswerItem
            label="The waiting time in the queue (Wq)"
            answer={answer.wq.toFixed(4)}
          />
          <div className="answer-pn">
            <InputData
              labelText="The probability that there are n customers in the system (Pn)"
              value={n}
              handleChange={handleChange}
              min="0"
              name="n"
            />
            <p> = {answer.getPn(n).toFixed(4)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
