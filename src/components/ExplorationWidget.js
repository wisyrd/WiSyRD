import React from "react";
import { Box, Button, Heading, Text, Flex } from "rebass";
import { Input, Label, Checkbox, Slider } from "@rebass/forms";
import Widget from "./Widget";

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
      this.setState({ value: event.target.value });
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
          <Label htmlFor="exhaustion">Exhaustion:</Label>
          {/* {this.state.value} */}
           {/* const Exhaustion (event) => {
              if (this.state.value === 1) {
                  <ul>
                      "You're tired"
                  </ul>
                  
              } else {
                  <ul>
                      "Not tired"
                  </ul>
              }
        }  */}
          <Slider
            onChange={this.handleIncrement}
            id="exhaustion"
            name="exhaustion"
            defaultValue={0}
            step="1"
            max="6"
            bg="primary"
          />
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
