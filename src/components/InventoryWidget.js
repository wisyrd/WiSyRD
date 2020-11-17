import React from 'react';
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input, Label } from "@rebass/forms"
import { Tiles } from '@rebass/layout';
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class InventoryWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Inventory widget";
        this.widgetType = "Inventory-widget"
    }

    renderPanel() {
        return (<>
            <Box width={350} {...this.props} className={"widget example-widget"}>

                <Box>
                <Text variant="cardHeader" htmlFor='Inventory'>Currency:</Text>
                <Box>
                    <Flex>
                        <Box variant="currencyBox">
                            <Text variant="cardHeader">Pp</Text>
                            <Input
                                id='platinum'
                                name="pp"
                                type="text"
                                placeholder='Pp'
                            />
                        </Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeader">Gp</Text>
                            <Input
                                id='gold'
                                name="gp"
                                type="text"
                                placeholder='Gp'
                            />
                        </Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeader">Sp</Text>
                            <Input
                                id='silver'
                                name="sp"
                                type="text"
                                placeholder='Sp'
                            /></Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeader">Cp</Text>
                            <Input
                                id='copper'
                                name="cp"
                                type="text"
                                placeholder='Cp'
                            /></Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeader">Ep</Text>
                            <Input
                                id='electrum'
                                name="ep"
                                type="text"
                                placeholder='Ep' /></Box>
                    </Flex>
                </Box>
            </Box>


            <Box
                p={3}
                width={1}
                bg='purple'>
                <Tiles columns={[2]}>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Imported Weight</Text>
                        <Text variant="attributesDetails">50</Text>
                    </Box>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Encumberance Weight</Text>
                        <Text variant="attributesDetails">50</Text>
                    </Box>
                </Tiles>
            </Box>



            <Box>
            <Flex>
                <Box width={1 / 8} p={3} color='background' bg='olive'>QT.</Box>
                <Box width={5 / 8} p={3} color='background' bg='burlywood'>Item Name</Box>
                <Box p={3} color='background' bg='olive'>Location</Box>
                <Box p={3} color='background' bg='burlywood'>Weight</Box>
            </Flex>
            <Flex>
                <Box width={1 / 8} p={3} color='background' bg='olive'>QT.</Box>
                <Box width={5 / 8} p={3} color='background' bg='burlywood'>Item Name</Box>
                <Box p={3} color='background' bg='olive'>Location</Box>
                <Box p={3} color='background' bg='burlywood'>Weight</Box>
            </Flex>
            </Box>
        </Box>
        </>
        )
    }
}