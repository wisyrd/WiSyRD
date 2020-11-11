import React, { Component } from "react";

export default class Widget extends Component {
    
    constructor(props) {
        super(props);

        this.id = props.id;
        this.state = {
            x: props.x,
            y: props.y
        }
    }

    render(){
        return (
            <div className={"widget "+thisprops.className}>
                {this.props.children}
            </div>
        )
    }
    
}
