import React from 'react'
import { Box, Flex, Button, Heading, Text, } from 'rebass';

export default function InventoryRow() {
    return (
        <Flex className="invBox">
        <Box width={1/8} p={3} color='background' bg='olive'>QT.</Box>
            <Box width={5/8} p={3} color='background' bg='burlywood'>Item Name</Box>
            <Box p={3} color='background' bg='olive'>Location</Box>
            <Box p={3} color='background' bg='burlywood'>Weight</Box>
        </Flex>
    )
}


