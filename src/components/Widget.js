import React, { Component } from "react";
import { Flex, Box, Heading, Text, Button } from "rebass";
import TutorialButton from "./widgets/parts/TutorialButton";

export default class Widget extends Component {
    
    constructor(props) {
        if(new.target === Widget) {
            throw new TypeError("Cannot construct a base widget directly.");
        }
        super(props);
    
        this.id = props.id;

        this.stagedChanges = {};
        this.stagedExportChanges = {};

        let importedId = this.props.globalState[this.id].importedId;
        if(importedId!==undefined&&importedId!==null)
            this.importedId = importedId;
        else
            this.importedId = -1;
    }

    // Updates this widget's state with the given changes
    setWidgetState=(widgetStateChanges)=> {
        this.stagedChanges = {...this.stagedChanges, ...widgetStateChanges}

        let newWidgetState = {...this.props.widgetState, ...this.stagedChanges};
        this.props.setGlobalState({[this.props.id]: newWidgetState});
    }

    componentDidUpdate=()=>{
        this.stagedChanges = {};
        this.stagedExportChanges = {};
    }

    // Returns the value at key from the exports field of the imported widget
    getImportedValue(key) {
        if(this.importedId>=0)
            return this.props.globalState[this.importedId].exports[key];
        else
            return null;
    }

    // Sets the value at key in the exports field of this widget
    setExportedValue(key, value) {
        const oldExports = this.props.widgetState.exports || {};
        this.stagedExportChanges = {...this.stagedExportChanges, [key]: value}

        let newExports = {...oldExports, ...this.stagedExportChanges};
        
        this.setWidgetState({exports: newExports});
    }

    // Sets the import widget to be the given widgetId
    setImportWidget(widgetId) {
        this.importedId = widgetId;
        this.setWidgetState({importedId: widgetId});
    }

    setHeight(height) {
        let newLayout = {...this.props.widgetState.layout}
        newLayout.h = height;
        this.setWidgetState({layout: newLayout});
    }

    getHeight() {
        return this.props.widgetState.layout.h;
    }

    initializeIfNew() {
        console.log(this.props.widgetState);
        if(!this.props.widgetState.hasBeenInitialized){
            this.initialize();
            this.setWidgetState({hasBeenInitialized: true});
        }
    }

    // Override this if necessary
    initialize() {
        return;
    }

    // Don't touch this!
    render=()=>{
        return (
            <Box
                variant='widgetBox'
                className={`widget ${this.widgetType} ${this.props.className?this.props.className:""}`}
                height="100%"
                width={358}
                overflow="hidden">
                <Flex variant='widgetTitle'>
                    <TutorialButton setGlobalState={this.props.setGlobalState} tutorialText={this.tutorialText}/>
                    <Heading variant='widgetHeader' className="dragHandle">{this.id} {this.title}</Heading>
                </Flex>
                <Box p={1}>
                    {this.renderPanel()}
                </Box>
            </Box>
        )
    }


    // OVERRIDE THIS
    renderPanel=()=>{
        return (<>
            <Heading>YOU FORGOT TO OVERRIDE THE renderPanel() METHOD</Heading>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            <Text>kajsdfpqiwejfpiasdnfpiawefpiasenfpiasejnfpaseijfpaisefias</Text>
            </>
        )
    }
    
}
