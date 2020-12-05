import './App.css';
import TitleBar from './components/title-bar/title-bar.component';
import HomePage from './pages/homepage/homepage.component';
import M1Page from './pages/m1page/m1page.component';
import McPage from './pages/mcpage/mcpage.component';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  changePage() {}

  render() {
    return (
      <div className="App">
        <TitleBar />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/m1" component={M1Page} />
            <Route exact path="/mc" component={McPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
