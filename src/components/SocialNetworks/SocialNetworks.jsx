import React from 'react'

import { StyleSocialNetworks } from './styles'
import facebook from '../../icons8Facebook.png'
import github from '../../icons8Github.png'
export default class SocialNetworks extends React.Component {
    render() {
        return(
            <StyleSocialNetworks>
                <a href={this.props.urlFacebook}><img src={facebook} alt="icone da rede social facebook" /></a>
                <a href={this.props.urlGithub}><img src={github} alt="icone da rede social github" /></a>
            </StyleSocialNetworks>
        )
    }
}