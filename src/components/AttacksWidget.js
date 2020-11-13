import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import Widget from "./Widget";
import { Label, Input } from "@rebass/forms";

export default class AttacksWidget extends Widget {
  render() {
    return (
        <Box {...this.props} className={"widget attacks-widget"}>
        <Heading>Attack Widget</Heading>
          <Flex>
            {/* <Label htmlFor="Attack Name">Attack Name</Label> */}
            <Input
              id="attackName"
              name="attack"
              type="text"
              placeholder="Attack Name "
            />
          </Flex>
          <Flex>
            {/* <Label htmlFor="Hit">Hit</Label> */}
            <Input
              id="hit"
              name="hit"
              type="text"
              placeholder="Hit Mod"
              width={1 / 3}
            />
            {/* <Label htmlFor="Range">Range</Label> */}
            <Input
              id="range"
              name="range"
              type="text"
              placeholder="Attack Range "
              width={1 / 3}
            />
            {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
            <Input
              id="damageType"
              name="damageType"
              type="text"
              placeholder="Damage"
              width={1 / 3}
            />
          </Flex>
        </Box>
    );
  }
}

