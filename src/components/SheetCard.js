import React from 'react';
import { Box, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import { Link } from "react-router-dom";


export default function SheetCard(props) {
    return (
        <Box>
            <Box>
                <Flex>
                    <Box width={1 / 2}><Text>{props.name}</Text></Box>
                    <Box width={1 / 2}><Button><Text><Link to={`/sheets/${props.link}`}>{props.link}</Link></Text></Button></Box>
                </Flex>
            </Box>
        </Box>
    )
}