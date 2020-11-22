import React from 'react';
import { Box, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import { Link } from "react-router-dom";


export default function SheetCard(props) {
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
                        <Button><Link to="/user/sheet">Select {props.name} </Link></Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}