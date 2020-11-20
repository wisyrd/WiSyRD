import React, { useState } from 'react';
import { Box, Heading, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';

export default function SheetCard(props) {

    function goLink() {
        //Want to route the user to the character sheet (WidgetRenderer) that is tied to the name of the character they've given
        console.log("goLink")
    }

    return (
        <Box>
            <Box>
                <Flex>
                    <Box width={1 / 2}><Text>{props.name}</Text></Box>
                    <Box width={1 / 2}><Button onClick={goLink}><Text>{props.link}</Text></Button></Box>
                </Flex>
            </Box>
        </Box>
    )
}