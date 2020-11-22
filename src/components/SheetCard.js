import React from 'react';
import { Box, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import { Link } from "react-router-dom";


export default function SheetCard(props) {
    return (
        <Box variant='characterBox'>
            <Text variant='cardHeader'>{props.name}</Text>
            <Text variant='linkText'>
                <Link to="/user/sheet">Select {props.name} </Link>
            </Text>
        </Box>
    )
}