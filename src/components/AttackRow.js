import React from 'react'
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input } from "@rebass/forms";

// add row component

export default function AttackRow() {
    return (
        <Flex>
            {/* <Label htmlFor="Hit">Hit</Label> */}
            <Input
              name="hit"
              type="text"
              placeholder="Hit Mod"
              width={1 / 3}
            />
            {/* <Label htmlFor="Range">Range</Label> */}
            <Input
              name="range"
              type="text"
              placeholder="Attack Range "
              width={1 / 3}
            />
            {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
            <Input
              name="damageType"
              type="text"
              placeholder="Damage"
              width={1 / 3}
            />
          </Flex>
    )
}