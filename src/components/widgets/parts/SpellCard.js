import { Checkbox, Label } from '@rebass/forms';
import React, { useState } from 'react';
import { Box, Heading, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';

// NO STATE IMPORTING NECESSARY HERE, THE SPELLBOOK WIDGET PASSES ALL CRUCIAL PROPS INFO HERE

export default function SpellCard(props) {
    function showModal() {
        props.setGlobalState({modal: 
            {
            show: true,
            contents:
                (
                <Box className="modal-content" bg="white">
                    <Heading>{props.name}</Heading>
                    <Text>Description: {props.description}</Text>
                    <Text>Spell Duration: {props.duration}</Text>
                    <Text>Level: {props.level}</Text>
                    {props.vComponent ? (<Text>V Component: True</Text>) : ""}
                    {props.sComponent ? (<Text>S Component: True</Text>) : ""}
                    {props.material ? (<Text>Material: {props.material}</Text>) : "None"}
                </Box>
                )
        }})
    }

    return (
        <Box>
            <Box>
                <Flex>
                    <Box width={1 / 4}><Label><Checkbox /></Label> </Box>
                    <Box width={1 / 4}><Button onClick={showModal}><Text>{props.name}</Text></Button></Box>
                    <Text width={1 / 4 } fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>{props.castTime}</Text>
                    {props.ritual ? <Text width={1/4}>Ritual</Text> : <Text width={1 /4}></Text>}
                </Flex>
            </Box>
        </Box>
    )
}