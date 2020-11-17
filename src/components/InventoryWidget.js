import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label } from "@rebass/forms"
import Widget from './Widget';
import InventoryRow from './InventoryRow'
import TutorialButton from "./TutorialButton"

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class InventoryWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Inventory widget";
        this.widgetType = "Inventory-widget"
        this.state = { rowArray: [0] }
        this.tutorialText= <Text>Items and equipment held on person may be tracked here. Click the "+" in order to add a new row to insert a new item. Weight and incumberence may be tracked via this widget as well if desired. Amount of currency on hand and what denominations of it possessed may also be tracked using the inputs in the top portion of the widget. More in depth information about inventory may be found <a href="https://www.dndbeyond.com/sources/basic-rules/equipment"target="blank">HERE</a></Text>
    }
    addRow() {

        this.state.rowArray.push(0);
        this.setState(this.state)
    }
    renderPanel=()=> {
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
    <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>        
        </>
        )
           
    }
}