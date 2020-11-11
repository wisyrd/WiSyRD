import React, { Component } from "react";

export default class Widget extends Component {
    
    constructor(props) {
        if(new.target === Widget) {
            throw new TypeError("Cannot construct a base widget directly.");
        }
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
