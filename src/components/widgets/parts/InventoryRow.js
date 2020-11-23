import React from 'react'
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, } from '@rebass/forms'
import { BiCrosshair } from "react-icons/bi";
import { FaBalanceScaleRight, FaHashtag } from 'react-icons/fa'

export default function InventoryRow(props) {
    return (
        <Box variant='inventoryItem'>
            <Box variant='tableItem'>
                <Input
                    type='text'
                    textAlign='center'
                    placeholder='Item Name'
                    onChange={event=>props.handleUpdate(event, "itemname", props.rowNumber)} />
            </Box>
            <Box>
                <Flex className="invBox">
                    <Box variant='tableQT'>
                        <Flex>
                            <Box variant='iconBox'><FaHashtag /></Box>
                            <Box variant='itemBox'>
                                <Input
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>props.handleUpdate(event, "itemquantity", props.rowNumber)} />
                            </Box>
                        </Flex>
                    </Box>
                    <Box variant='tableLocation'>
                        <Flex>
                            <Box variant='iconBox'><BiCrosshair /></Box>
                            <Box variant='itemBox'>
                                <Input
                                    type='text'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>props.handleUpdate(event, "itemlocation", props.rowNumber)} />
                            </Box>
                        </Flex>
                    </Box>
                    <Box variant='tableWeight'>
                        <Flex>
                            <Box variant='iconBox'><FaBalanceScaleRight /></Box>
                            <Box variant='itemBox'>
                                <Input
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>props.handleUpdate(event, "itemweight", props.rowNumber)} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}


