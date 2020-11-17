import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import Widget from "./Widget";
import { Label, Input } from "@rebass/forms";

export default class AttacksWidget extends Widget {
  render() {
    return (
      <Box width={350} {...this.props} className={"widget attacks-widget"}>
        <Heading variant="heading">Attack Widget</Heading>

        {/* ================================================
                                Primary box styling
        ================================================ */}
        <Box
          p={3}
          width={1}
          bg='purple'>

          {/* ================================================
                          Attack Name Box
        ================================================ */}
          {/* <Label htmlFor="Attack Name">Attack Name</Label> */}
          <Box variant="fullWidthBox">
            <Text variant='cardHeader'>Attack Name</Text>
            <Input
              id="attackName"
              name="attack"
              type="text"
              placeholder="Attack Name "
            />
          </Box>

          {/* ================================================
                          Max HP Box
        ================================================ */}
          {/* <Label htmlFor="Hit">Hit</Label> */}
          <Box>
            <Flex>
              <Box variant="statsBox">
                <Text variant='cardHeader'>Hit Mod</Text>
                <Input
                  id="hit"
                  name="hit"
                  type="text"
                  placeholder="Hit Mod" />
              </Box>

              {/* ================================================
                          Attack Range Box
        ================================================ */}
              {/* <Label htmlFor="Range">Range</Label> */}
              <Box variant="statsBox">
                <Text variant='cardHeader'>Attack Range</Text>
                <Input
                  id="range"
                  name="range"
                  type="text"
                  placeholder="Attack Range " />
              </Box>

              {/* ================================================
                          Damage Box
        ================================================ */}
              {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
              <Box variant='statsBox'>
                <Text variant='cardHeader'>Damage</Text>
                <Input
                  id="damageType"
                  name="damageType"
                  type="text"
                  placeholder="Damage" />
              </Box>

            </Flex>
          </Box>

        </Box>
      </Box>
    );
  }
}

