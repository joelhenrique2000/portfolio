import React from "react";

import { StyleHeader, GlobalStyle } from "./styles.js";

export default class Header extends React.Component {
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
            <input className={'only-mobile'} id="navbar" type="checkbox" />
            <label className={'only-mobile'} for="navbar">
              <div class="menu">
                <span class="hamburger" />
              </div>
            </label>
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
           
          </div>
        </StyleHeader>
      </React.Fragment>
    );
  }
}
