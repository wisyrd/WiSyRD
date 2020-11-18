import React from 'react'
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input } from "@rebass/forms";

// add row component

export default function AttackRow() {
  return (
    <Box>
      <Box variant='fullWidthBox'>
        <Text variant='cardHeader'>Attack Name</Text>
        <Input
          name="attack"
          type="text"
          placeholder="Attack Name "/>
      </Box>

                  {/* =============Hit Mod============= */ }
      <Box>
        <Flex>
          <Box variant='statsBox'>
            <Text variant='cardHeader'>Hit Mod</Text>
            <Input
              name="hit"
              type="text"
              placeholder="Hit Mod" />
          </Box>

          {/* =============Attack Range============= */}
          <Box variant='statsBox'>
            <Text variant='cardHeader'>Attack Range</Text>
            <Input
              name="range"
              type="text"
              placeholder="Attack Range " />
          </Box>

          {/* =============Damage============= */}
          <Box variant='statsBox'>
            <Text variant='cardHeader'>Damage</Text>
            <Input
              name="damageType"
              type="text"
              placeholder="Damage" />
          </Box>
    </Flex>
  </Box>
  </Box > 
    )
}