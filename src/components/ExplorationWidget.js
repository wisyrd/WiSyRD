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

  renderPanel() {
    return (
      <>
        <Text>{this.props.children}</Text>
        <Flex>
          <Box
            width={1 / 3}
            px={3}
            py={3}
            sx={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "white",
              borderRadius: 8,
            }}
          >
            <Label
              htmlFor="speed"
              fontSize={[3]}
              fontWeight="bold"
              color="black"
              py={1}
            >
              Speed
            </Label>
            <Input id="speed" name="speed" type="integer" placeholder="" />
          </Box>
          <Box
            width={1 / 3}
            px={3}
            py={3}
            sx={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "white",
              borderRadius: 8,
            }}
          >
            <Label
              htmlFor="mount speed"
              fontSize={[3]}
              fontWeight="bold"
              color="black"
              py={1}
            >
              Mount Speed
            </Label>
            <Input
              id="mound speed"
              name="mound speed"
              type="integer"
              placeholder=""
            />
          </Box>
          <Box
            width={1 / 3}
            px={3}
            py={3}
            sx={{
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "white",
              borderRadius: 8,
            }}
          >
            <Label
              htmlFor="vehicle"
              fontSize={[3]}
              fontWeight="bold"
              color="black"
              py={1}
            >
              Vehicle
            </Label>
            <Input id="vehicle" name="vehicle" type="integer" placeholder="" />
          </Box>
        </Flex>
        <Box>
          <Label htmlFor="exhaustion">Exhaustion: {this.state.value}</Label>
          <Slider
            onChange={this.handleIncrement}
            id="exhaustion"
            name="exhaustion"
            defaultValue={0}
            step="1"
            max="6"
            bg="primary"
          />
          <Text>
            {this.state.description}
          </Text>
        </Box>
        {/* <Box>
           <Text>
            Test       
           </Text> 
        </Box> */}
      </>
    );
  }
}
