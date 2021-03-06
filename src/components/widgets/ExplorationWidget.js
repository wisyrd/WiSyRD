import React from "react";
import { Box, Button, Heading, Text, Flex } from "rebass";
import { Input, Label, Checkbox, Slider } from "@rebass/forms";
import Widget from "../Widget";
const DESCRIPTIONS = [
  "Not exhausted", "Disadvantage on Ability Checks", "	Speed halved", "Disadvantage on Attack rolls and Saving Throws", "Hit point maximum halved","Speed reduced to 0", "Death"
]

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class ExplorationWidget extends Widget {
  constructor(props) {
    super(props);
    this.title = "Exploration Widget";
    this.widgetType = "exploration-widget";
    this.tutorialText = <Text>travel based statistics may be stored and tracked here. Different speeds for various methods of transportation may be tracked simultaneously. Use the slider to track levels of exhaustion as given. Each stage of the slider will provide a describe of the newly acquired penalty of exhaustion. In depth descriptions of travel and exhaustion may be found <a href="https://www.dndbeyond.com/sources/basic-rules/adventuring#Movement"target="blank">HERE</a></Text>

    this.initializeIfNew();

  }

  initialize(){
    this.setWidgetState({value: 0, description: ""});
  }

  handleIncrement = (event) => {
    this.setWidgetState({value:event.target.value, description: DESCRIPTIONS[event.target.value]})
  }

  handleUpdate = (event, field) =>{
    this.setWidgetState({[field]: event.target.value})
  }

  renderPanel=()=> {
    return (
      <>
        <Text>{this.props.children}</Text>
        <Box variant='backgroundBox'>
          <Flex>
            <Box variant='statsBox'>
              <Text variant='cardHeaderSmall'>Speed</Text>
              <Input 
                textAlign='center'
                name="speed" 
                type="number" 
                placeholder="#"
                onChange={event=>this.handleUpdate(event, "speed")} />
            </Box>

            <Box variant='statsBox'>
              <Text variant='cardHeaderSmall'>Mount</Text>
              <Input
                textAlign='center'
                name="mountspeed"
                type="number"
                placeholder="#"
                onChange={event=>this.handleUpdate(event, "mountspeed")} />
            </Box>

            <Box variant='statsBox'>
              <Text variant='cardHeaderSmall'>Vehicle</Text>
              <Input 
                textAlign='center'
                name="vehiclespeed" 
                type="number" 
                placeholder="#"
                onChange={event=>this.handleUpdate(event, "vehiclespeed")} />
            </Box>
          </Flex>
        </Box>
        
        <Box variant='fullWidthBox'>
          <Text variant='cardHeaderSmall' htmlFor="exhaustion">Exhaustion:</Text>
          <Text variant='attributesDetails'>{this.props.widgetState.value}</Text>
          <Slider
            onChange={this.handleIncrement}
            id="exhaustion"
            name="exhaustion"
            defaultValue={0}
            step="1"
            max="6"
            bg="primary"
          />
          <Text variant='infoText'>{this.props.widgetState.description}</Text>
        </Box>
      </>
    );
  }
}
