import React from 'react'
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, } from '@rebass/forms'
import { BiCrosshair } from "react-icons/bi";
import { FaBalanceScaleRight, FaHashtag } from 'react-icons/fa'

export default function InventoryRow() {
    return (
        <Box variant='inventoryItem'>
            <Box variant='tableItem'>
                <Input
                    id='itemName'
                    type='integer'
                    textAlign='center'
                    placeholder='Item Name' />
            </Box>
            <Box>
                <Flex className="invBox">
                    <Box variant='tableQT'>
                        <Flex>
                            <Box variant='iconBox'><FaHashtag /></Box>
                            <Box varient='itemBox'>
                                <Input
                                    id='quantity'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                        </Flex>
                    </Box>
                    <Box variant='tableLocation'>
                        <Flex>
                            <Box variant='iconBox'><BiCrosshair /></Box>
                            <Box variant='itemBox'>
                                <Input
                                    id='location'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                        </Flex>
                    </Box>
                    <Box variant='tableWeight'>
                        <Flex>
                            <Box variant='iconBox'><FaBalanceScaleRight /></Box>
                            <Box variant='itemBox'>
                                <Input
                                    id='weight'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

