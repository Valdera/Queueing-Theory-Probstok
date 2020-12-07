import './App.css';
import TitleBar from './components/title-bar/title-bar.component';
import HomePage from './pages/homepage/homepage.component';
import M1Page from './pages/m1page/m1page.component';
import McPage from './pages/mcpage/mcpage.component';
import Answer from './pages/answerpage/answer.component';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      mode: ''
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(answer, mode) {
    this.setState({
      answer: answer,
      mode: mode
    });
  }

  render() {
    return (
      <div className="App">
        <TitleBar />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/m1"
              component={(props) => (
                <M1Page {...props} handleAnswer={this.handleAnswer} />
              )}
            />
            <Route
              exact
              path="/mc"
              component={(props) => (
                <McPage {...props} handleAnswer={this.handleAnswer} />
              )}
            />
            <Route
              exact
              path="/answer"
              component={(props) => (
                <Answer
                  {...props}
                  answer={this.state.answer}
                  mode={this.state.mode}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
