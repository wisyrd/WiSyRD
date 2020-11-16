import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label } from "@rebass/forms"
import Widget from './Widget';
import InventoryRow from './InventoryRow'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class InventoryWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Inventory widget";
        this.widgetType = "Inventory-widget"
        this.state = {rowArray: [0]}
    }
    addRow() {

        this.state.rowArray.push(0);
        this.setState(this.state)
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
            {this.state.rowArray.map(row => {
                return <InventoryRow />
            })}
            
            <Button onClick = {() => {this.addRow()}}>
          +         
    </Button>            
        </>
        )
           
    }
}