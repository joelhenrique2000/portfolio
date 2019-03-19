import React from 'react'

import { StyleSkills } from './styles'
import SkillsPoints from './SkillsPoints'

export default class Skills extends React.Component {

    createSkills = () => {
        let tableSkills = [];
        for(let i=0; i<this.props.skills.length; i++) {
            tableSkills.push(
                <SkillsPoints
                    key={i}
                    name={this.props.skills[i].name}
                    points={this.props.skills[i].points}
                />
            );
        }
        return tableSkills
    }

    render() {
        return(
            <StyleSkills id={'Skills'}>
                <p className={"title"}>Skills</p>
                <div>{this.createSkills()}</div>
            </StyleSkills>
        )
    }
}