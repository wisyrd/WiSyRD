import React from 'react';
import { Box, Heading, Text } from 'rebass';
import { Flex } from 'reflexbox';
import SingleCheckbox from "./SingleCheckbox";
import RitualButton from "./RitualButton";

export default function SpellCard(props) {
    
    return (
        <Box>
            <Flex><SingleCheckbox width={1 / 4} />
                <Text width={1 / 4}>{props.name}</Text>
                <Text width={1 / 4}>{props.castTime}</Text>
                {props.ritual ? <RitualButton width={1 / 4} /> : ""}
            </Flex>
        </Box>
    )
}