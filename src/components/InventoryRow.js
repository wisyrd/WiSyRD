import React from 'react'
import { Box, Flex, Button, Heading, Text, } from 'rebass';

export default function InventoryRow() {
    return (
            <Box variant='inventoryItem'>
                <Box variant='tableItem'>Item Name</Box>
                <Box>
                    <Flex className="invBox">
                        <Box variant='tableQT'>QT.</Box>
                        <Box variant='tableLocation'>Location</Box>
                        <Box variant='tableWeight'>Weight</Box>
                    </Flex>
                </Box>
            </Box>
    )
}


