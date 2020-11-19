import React from "react";
import { Box, Button, Heading, Text, Flex } from "rebass";
import { Input, Label, Checkbox, Slider } from "@rebass/forms";
import Widget from "./Widget";
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

    this.state = {
      value: 0,
    };
    this.handleIncrement = (event) => {
      console.log("handleIncrement");
      console.log(event.target.value);
      this.setState({ value: event.target.value, description: DESCRIPTIONS[event.target.value] });
      console.log(this.state);
    };
  }

  renderPanel=()=> {
    return (
      <>
        <Text>{this.props.children}</Text>
        <Box variant='backgroundBox'>
          <Flex>
            <Box variant='statsBox'>
              <Text variant='cardHeader'>Speed</Text>
              <Input 
                id="speed" 
                name="speed" 
                type="integer" 
                placeholder="" />
            </Box>

            <Box variant='statsBox'>
              <Text variant='cardHeader'>Mount Speed</Text>
              <Input
                id="mound speed"
                name="mound speed"
                type="integer"
                placeholder=""/>
            </Box>

            <Box variant='statsBox'>
              <Text variant='cardHeader'>Vehicle</Text>
              <Input 
                id="vehicle" 
                name="vehicle" 
                type="integer" 
                placeholder="" />
            </Box>
          </Flex>
        </Box>
        
        <Box variant='fullWidthBox'>
          <Text variant='cardHeader' htmlFor="exhaustion">Exhaustion:</Text>
          <Text variant='attributesDetails'>{this.state.value}</Text>
          <Slider
            onChange={this.handleIncrement}
            id="exhaustion"
            name="exhaustion"
            defaultValue={0}
            step="1"
            max="6"
            bg="primary"
          />
          <Text variant='infoText'>{this.state.description}</Text>
        </Box>
      </>
    );
  }
}
