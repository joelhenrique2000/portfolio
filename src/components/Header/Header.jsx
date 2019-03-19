import React from "react";

import { StyleHeader, GlobalStyle } from "./styles.js";

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    }
  }

  ClickChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <React.Fragment>
        <StyleHeader>
          <GlobalStyle />
          <div className={"logo"}>
            <span>Joel</span>
            <span>Henrique</span>
          </div>
          <div className={"menu-hamburger"}>
            <input className={'only-mobile'} id="navbar" type="checkbox" onChange={this.ClickChange} checked={this.state.isChecked} />
            <label className={'only-mobile'} for="navbar">
              <div class="menu">
                <span class="hamburger" />
              </div> 
            </label>
            <ul>
              <li>
                <a href="#About" 
                onClick={() => { this.setState({isChecked: false}) }}>About</a>
              </li>
              <li>
                <a href="#Skills" onClick={() => { this.setState({isChecked: false}) }}>Skills</a>
              </li>
              <li>
                <a href="#Services" onClick={() => { this.setState({isChecked: false}) }}>Services</a>
              </li>
              <li>
                <a href="#Portfolio" onClick={() => { this.setState({isChecked: false}) }}>Portfolio</a>
              </li>
              <li>
                <a href="#Contact" onClick={() => { this.setState({isChecked: false}) }}>Contact</a>
              </li>
            </ul>
           
          </div>
        </StyleHeader>
      </React.Fragment>
    );
  }
}
