import React, { Component } from 'react';
import './title-bar.styles.scss';
const { remote } = window.require('electron');

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maximized: false
    };
    this.close = this.close.bind(this);
    this.minimize = this.minimize.bind(this);
    this.maximize = this.maximize.bind(this);
    this.drag = this.drag.bind(this);
  }
  close() {
    const window = remote.getCurrentWindow();
    window.close();
  }

  minimize() {
    const window = remote.getCurrentWindow();
    window.minimize();
  }

  maximize() {
    const { maximized } = this.state;
    const window = remote.getCurrentWindow();
    if (maximized) {
      window.unmaximize();
    } else {
      window.maximize();
    }
    this.setState({
      maximized: !maximized
    });
  }

  drag() {
    const window = remote.getCurrentWindow();
    window.unmaximize();
    this.setState({
      maximized: false
    });
  }

  render() {
    return (
      <div className="title-bar">
        <div className="title-bar__content">
          <i class="fas fa-flask"></i>
          <p className="title-bar__name">Tugas Probstok</p>
        </div>
        <div className="title-bar__tool">
          <button className="minimize__button" onClick={this.minimize}>
            <i class="far fa-window-minimize"></i>
          </button>
          <button className="maximize__button" onClick={this.maximize}>
            <i class="fas fa-window-maximize"></i>
          </button>
          <button className="close__button" onClick={this.close}>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TitleBar;
