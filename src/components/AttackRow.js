import React from 'react'
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input } from "@rebass/forms";

// add row component

export default function AttackRow() {
  return (
    <Box variant='attack'>
      <Box variant='tableAtkName'>Attack</Box>
      <Input
        textAlign='center'
        name="attack"
        type="text"
        placeholder="Name" />
      <Box>
        <Flex className="attackBox">
          <Box variant='tableHit'>
            <Box variant='attackLabel'>Hit</Box>
            <Input
              textAlign='center'
              name="hit"
              type="text"
              placeholder="#" />
          </Box>

          <Box variant='tableRange'>
            <Box variant='attackLabel'>Damage</Box>
            <Input
              textAlign='center'
              name="damageType"
              type="text"
              placeholder="#" />
          </Box>

          <Box variant='tableDamage'>
            <Box variant='attackLabel'>Range</Box>
            <Input
              textAlign='center'
              name="range"
              type="text"
              placeholder="#" />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}