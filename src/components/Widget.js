import React, { Component } from "react";
import { Flex, Box, Heading, Text, Button } from "rebass";

export default class Widget extends Component {
    
    constructor(props) {
        if(new.target === Widget) {
            throw new TypeError("Cannot construct a base widget directly.");
        }
        super(props);

        this.id = props.id;
    }

    setWidgetState=(widgetStateChanges)=> {
        let newWidgetState = {...this.props.widgetState};
        for (const key in widgetStateChanges) {
            newWidgetState[key] = widgetStateChanges[key];
        }
        console.log({[this.props.id]: newWidgetState});
        this.props.setGlobalState({[this.props.id]: newWidgetState});
    }

    render=()=>{
        return (
            <Box
                className={`widget ${this.widgetType} ${this.props.className?this.props.className:""}`}
                bg="#dddddd"
                height={(this.props.widgetState.layout.h * 46)-8}
                width={358}>
                <Flex bg="primary" color="white" px={2}>
                    <Heading className="dragHandle"width={3/4}>{this.id} {this.title}</Heading>
                </Flex>
                <Box p={1}>
                    {this.renderPanel()}
                </Box>
            </Box>
        )
    }

    handleChangeHeight=()=>{
        this.setWidgetState({layout: {
            x: this.props.widgetState.layout.x,
            y: this.props.widgetState.layout.y,
            w: 1,
            h: 2
        }});
    }

    // OVERRIDE THIS
    renderPanel=()=>{
        return (<>
            <Heading>YOU FORGOT TO OVERRIDE THE renderPanel() METHOD</Heading>
            <Button onClick={()=>this.handleChangeHeight()}>Biggen</Button>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            </>
        )
    }
    
}
