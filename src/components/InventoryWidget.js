import React from 'react';
import { Box, Flex, Button, Heading, Text } from 'rebass';
import { Input, Label } from "@rebass/forms"
import { Tiles } from '@rebass/layout';
import Widget from './Widget';
import InventoryRow from './InventoryRow'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class InventoryWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Inventory widget";
        this.widgetType = "Inventory-widget"
        this.state = { rowArray: [0] }
        this.tutorialText = <Text>Items and equipment held on person may be tracked here. Click the "+" in order to add a new row to insert a new item. Weight and incumberence may be tracked via this widget as well if desired. Amount of currency on hand and what denominations of it possessed may also be tracked using the inputs in the top portion of the widget. More in depth information about inventory may be found <a href="https://www.dndbeyond.com/sources/basic-rules/equipment" target="blank">HERE</a></Text>
    }
    addRow() {

        this.state.rowArray.push(0);
        this.setState(this.state)
    }
    renderPanel = () => {
        return (<>
            <Box variant='currencyBackgroundBox'>

                <Box variant='currencyContainer'>
                    <Text variant="cardHeader" htmlFor='Inventory'>Currency:</Text>
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


            <Box variant='backgroundBox'>
                <Tiles columns={[2]}>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Imported Weight</Text>
                        <Text variant="attributesDetails">50</Text>
                    </Box>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Encumbered Weight</Text>
                        <Text variant="attributesDetails">50</Text>
                    </Box>
                </Tiles>
            </Box>



            <Box variant='fullWidthBox'>
                <Box>
                    <Flex>
                        <Box variant='tableQT'>QT.</Box>
                        <Box variant='tableLocation'>Location</Box>
                        <Box variant='tableWeight'>Weight</Box>
                    </Flex>
                </Box>
                {this.state.rowArray.map(row => {
                    return <InventoryRow />
                })}

                <Button onClick={() => { this.addRow() }}>
                    +
    </Button>
            </Box>
        </>
        )

    }
}
