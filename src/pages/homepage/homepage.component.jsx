import React, { Component } from 'react';
import './homepage.styles.scss';
import ButtonRound from '../../components/button-round/button-round.component';
import { ReactComponent as CalculatorSvg } from '../../assets/calculator.svg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, linkUrl) {
    const { history } = this.props;
    history.push(`/${linkUrl}`);
  }

  render() {
    return (
      <div className="homepage">
        <div className="homepage__content">
          <h1>Pilih mode kalkulasi</h1>
          <h3>Perhitungan teori antrian untuk jumlah pelanggan terbatas</h3>
          <div className="homepage__menu">
            <span>1 server</span>
            <ButtonRound eventHandler={(e) => this.handleClick(e, 'm1')}>
              M/M/1/K
            </ButtonRound>
            <span>c server</span>
            <ButtonRound eventHandler={(e) => this.handleClick(e, 'mc')}>
              M/M/c/K
            </ButtonRound>
          </div>
          <div className="homepage__name">
            <p>Nama Anggota :</p>
            <ul>
              <li>Fauzan Valdera - 1906379320</li>
              <li>Muhammad Zehan Bey -</li>
              <li>Riandy Ekaputra -</li>
              <li>Muhammad Fadhil Al Hafiz - </li>
            </ul>
          </div>
        </div>
        <div className="homepage__svg">
          <CalculatorSvg />
        </div>
      </div>
    );
  }
}

export default HomePage;
