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
                        <Button><Link to="/user/sheet">Select {props.name} </Link></Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}