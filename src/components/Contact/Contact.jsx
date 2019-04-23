import React from 'react'

import { StyleContact } from "./styles";

export default class Contact extends React.Component {
    render() {
        return(
        <StyleContact id={'Portfolio'}>
            <div className={"title"}>Contact</div>
            <div  className={"email"}>
                joelhenriqueprincipal@gmail.com
            </div>
        </StyleContact>
        )
    }
}