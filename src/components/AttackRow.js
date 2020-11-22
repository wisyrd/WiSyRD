import React from 'react'
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input } from "@rebass/forms";

// add row component

export default function AttackRow() {
  return (
    <Box variant='clusterMain'>
      <Box variant='tableName'>Attack</Box>
      <Input
        textAlign='center'
        name="attack"
        type="text"
        placeholder="Name" />
      <Box>
        <Flex className="attackBox">
          <Box variant='tableLeft'>
            <Box variant='tableLabel'>Hit</Box>
            <Input
              textAlign='center'
              name="hit"
              type="text"
              placeholder="#" />
          </Box>

          <Box variant='tableMid'>
            <Box variant='tableLabel'>Damage</Box>
            <Input
              textAlign='center'
              name="damageType"
              type="text"
              placeholder="#" />
          </Box>

          <Box variant='tableRight'>
            <Box variant='tableLabel'>Range</Box>
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