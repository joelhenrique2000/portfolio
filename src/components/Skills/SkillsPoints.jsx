import React from 'react'

import { StyleSkillsPoints } from './styles'

export default class SkillsPoints extends React.Component {
    
    createPointsTable = () => {
        let PointsTable = []
        for (let i = 0; i < 10; i++) {
            if(this.props.points <= i) {
                PointsTable.push(<div key={i} className={"point gray"}/>)
            }else {
                PointsTable.push(<div key={i} className={"point"}/>)
            }
            
        }
        return PointsTable
    }

    render() {
        return(
            <StyleSkillsPoints>
                <p>{this.props.name}</p>
                <div className={'pointsTable'}>
                    {this.createPointsTable()}
                </div>
            </StyleSkillsPoints>
        )
    }
}