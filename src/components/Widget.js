import React, { Component } from "react";
import { Flex, Box, Heading, Button } from "rebass";

export default class Widget extends Component {
    
    constructor(props) {
        if(new.target === Widget) {
            throw new TypeError("Cannot construct a base widget directly.");
        }
        super(props);

        this.id = props.id;
        this.globalState = props.globalState;
        this.setGlobalState = props.setGlobalState;
        this.widgetState = props.globalState[this.id];

        this.moveUp.bind(this);
        this.moveDown.bind(this);
    }

    setWidgetState=(widgetStateChanges)=> {
        let newWidgetState = {...this.globalState[this.id]};
        for (const key in widgetStateChanges) {
            newWidgetState[key] = widgetStateChanges[key];
        }
        console.log({[this.id]: newWidgetState});
        this.setGlobalState({[this.id]: newWidgetState});
    }

    setX=(x)=>{
        this.setWidgetState({x});
    }

    setY=(y)=>{
        this.setWidgetState({y});
    }

    setPos=(x, y)=>{
        this.setX(x);
        this.setY(y);
    }

    moveUp=()=>{
        // this.setX(this.widgetState.x - 1.5);
        this.setX(12);
    }

    moveDown=()=>{
        this.setX(this.globalState[this.id].x + 1.5);
    }

    render=()=>{
        return (
            <Box
                className={`widget ${this.widgetType} ${this.props.className?this.props.className:""}`}
                bg="#dddddd">
                <Flex bg="primary" color="white" px={2}>
                    <Heading width={3/4}>{this.id} {this.title}</Heading>
                    <Flex width={1/4}>
                        <Button variant="secondary" mx={1} onClick={event=>this.moveUp()}>&uarr;</Button>
                        <Button variant="secondary" ml={1} onClick={event=>this.moveDown()}>&darr;</Button>
                    </Flex>
                </Flex>
                <Box p={1}>
                    {this.renderPanel()}
                </Box>
            </Box>
        )
    }

    // OVERRIDE THIS
    renderPanel=()=>{
        return (
            <Heading>YOU FORGOT TO OVERRIDE THE renderPanel() METHOD</Heading>
        )
    }
    
}
