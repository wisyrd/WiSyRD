import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label } from "@rebass/forms"
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
            <Flex>
                <Label htmlFor='Inventory'>
                    Currency:
                            </Label>
                <Input
                    id='platinum'
                    name="pp"
                    type="text"
                    placeholder='Pp'
                    width={1 / 6} />
                <Input
                    id='gold'
                    name="gp"
                    type="text"
                    placeholder='Gp'
                    width={1 / 6} /> <Input
                    id='silver'
                    name="sp"
                    type="text"
                    placeholder='Sp'
                    width={1 / 6} /> <Input
                    id='copper'
                    name="cp"
                    type="text"
                    placeholder='Cp'
                    width={1 / 6} /> <Input
                    id='electrum'
                    name="ep"
                    type="text"
                    placeholder='Ep'
                    width={1 / 6} />
            </Flex>
            <Flex>
                <label>"Imported Weight?"//</label><label>// Encumberance Weight</label>
            </Flex>
            
            <Flex>
            <Box width={1/8} p={3} color='background' bg='olive'>QT.</Box>
                <Box width={5/8} p={3} color='background' bg='burlywood'>Item Name</Box>
                <Box p={3} color='background' bg='olive'>Location</Box>
                <Box p={3} color='background' bg='burlywood'>Weight</Box>
            </Flex>
            <Flex>
            <Box width={1/8} p={3} color='background' bg='olive'>QT.</Box>
                <Box width={5/8} p={3} color='background' bg='burlywood'>Item Name</Box>
                <Box p={3} color='background' bg='olive'>Location</Box>
                <Box p={3} color='background' bg='burlywood'>Weight</Box>
            </Flex>           
        </>
        )
    }
}