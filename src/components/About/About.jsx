import React from 'react'

import { StyleAbout } from './styles'

export default class About extends React.Component {
    render() {
        return (
            <StyleAbout>
                <div id={'About'} className={"photo"}>
                    <img src={this.props.photo}/>
                </div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
            </StyleAbout>
        )
    }
}