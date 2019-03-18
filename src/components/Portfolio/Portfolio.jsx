import React from "react";

import { StylePortfolio, StyleImage } from "./styles";

export default class Portfolio extends React.Component {

    createSkills = () => {
        let tableProjects = [];
        for(let i=0; i<this.props.portfolioList.length; i++) {
            
            const { photo, link, title } = this.props.portfolioList[i];

            tableProjects.push(
                <section key={i}>
                    <a href={link}>
                        <StyleImage image={photo.Foto}/>
                    </a>
                    <p>{title}</p>
                </section>
            );
        }
        return tableProjects
    }

  render() {
    return (
      <StylePortfolio id={'Portfolio'}>
        <div className={"title"}>Portfolio</div>
        <div className={'portfolio'}>{this.createSkills()}</div>
      </StylePortfolio>
    );
  }
}
