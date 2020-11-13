import React, { Component } from "react";
import { Box, Heading } from "rebass";

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
            <Box
                className={`widget ${this.widgetType} ${this.props.className?this.props.className:""}`}
                bg="#dddddd">
                <Box bg="primary" color="white" px={2}>
                <Heading>{this.id} {this.title}</Heading>
                </Box>
                <Box p={1}>
                    {this.renderPanel()}
                </Box>
            </Box>
        )
    }

    // OVERRIDE THIS
    renderPanel(){
        return (
            <Heading>YOU FORGOT TO OVERRIDE THE renderFrame() METHOD</Heading>
        )
    }
    
}
