import React from 'react'

import { StyleServices } from './styles'

export default class Services extends React.Component {
    
    createTableServices = () => {

        let tableServices = [];

        for(let i=0; i<this.props.servicesList.length; i++) {
            tableServices.push(<div key={i} className={"service"}>{this.props.servicesList[i]}</div>);
        }

        return tableServices
    }
    
    render() {
        return(
            <StyleServices id={'Services'}>
                <p className={"title"}>Services</p>
                <div>{this.createTableServices()}</div>
            </StyleServices>
        )
    }
}