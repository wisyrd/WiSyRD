import React from 'react';
import { Box, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import { Link } from "react-router-dom";


export default function SheetCard(props) {
    let link = "/sheets/"+props.id;
    return (
        <Box variant='characterBox'>
            <Text variant='cardHeader'>{props.name}</Text>
            <Text variant='linkText'>
                <Link to={link}>Select {props.name} </Link>
            </Text>
        </Box>
    )
}