import React from 'react'

import { StylePresentation } from './styles'

export default class Presentation extends React.Component {
    render() {
        return(
            <StylePresentation>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </StylePresentation>
        )
    }
}