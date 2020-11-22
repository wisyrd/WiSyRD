import React from 'react'
import { Box, Flex } from 'rebass';
import { Input } from "@rebass/forms";

// add row component

export default function AttackRow(props) {

  function handleUpdate(event, field){
    props.handleUpdate(event, field, props.rowNumber);
  }

  return (
    <Box variant='clusterMain'>
      <Box variant='tableName'>Attack</Box>
      <Input
        textAlign='center'
        name="attack"
        type="text"
        placeholder="Name"
        onChange={event=>handleUpdate(event,"name")} />
      <Box>
        <Flex className="attackBox">
          <Box variant='tableLeft'>
            <Box variant='tableLabel'>Hit</Box>
            <Input
              textAlign='center'
              name="hit"
              type="text"
              placeholder="#"
              onChange={event=>handleUpdate(event,"hit")} />
          </Box>

          <Box variant='tableMid'>
            <Box variant='tableLabel'>Damage</Box>
            <Input
              textAlign='center'
              name="damageType"
              type="text"
              placeholder="#" 
              onChange={event=>handleUpdate(event,"damage")} />
          </Box>

          <Box variant='tableRight'>
            <Box variant='tableLabel'>Range</Box>
            <Input
              textAlign='center'
              name="range"
              type="text"
              placeholder="#"
              onChange={event=>handleUpdate(event,"range")} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}