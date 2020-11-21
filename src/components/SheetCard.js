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
            <Box >
                <Flex>
                    <Box variant='characterBox'>
                        <Text variant='cardHeader'>{props.name}</Text>
                        <Text variant='ingestionText'>Race</Text>
                        <Text variant='modalText'>Elf</Text>
                        <Text variant='ingestionText'>Level</Text>
                        <Text variant='modalText'>12</Text>
                        <Button>Select {props.name}</Button>
                    </Box>
                    <Box>
                        <Button onClick={goLink}>
                            <Text>{props.link}</Text>
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}