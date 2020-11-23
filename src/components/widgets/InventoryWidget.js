import React from 'react';
import Widget from '../Widget';
import { Box, Flex, Button, Text } from 'rebass';
import { Input } from "@rebass/forms";
import { Tiles } from '@rebass/layout';
import InventoryRow from './parts/InventoryRow';


// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class InventoryWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Inventory widget";
        this.widgetType = "Inventory-widget"
        this.tutorialText = <Text>Items and equipment held on person may be tracked here. Click the "+" in order to add a new row to insert a new item. Weight and incumberence may be tracked via this widget as well if desired. Amount of currency on hand and what denominations of it possessed may also be tracked using the inputs in the top portion of the widget. More in depth information about inventory may be found <a href="https://www.dndbeyond.com/sources/basic-rules/equipment" target="blank">HERE</a></Text>

        this.initializeIfNew();
    }
    
    initialize(){
        this.setWidgetState({itemArray: [0], weight: 50, capacity: 250});
    }

    addRow() {

        const oldItemArray = this.props.widgetState.itemArray || [];
        const numItems = oldItemArray.length;
        let newItemArray = [...oldItemArray];

        newItemArray.push(numItems);
        this.setWidgetState({itemArray: newItemArray})
    }

    handleRowUpdate=(event, field, rowNumber)=> {
        this.setWidgetState({[`${field}${rowNumber}`]: event.target.value});
      }

    handleUpdate=(event, field)=>{
        this.setWidgetState({[field]: event.target.value});
    }

    renderPanel = () => {
        let array = this.props.widgetState.itemArray || [];
        return (<>
            <Box variant='currencyBackgroundBox'>

                <Box variant='currencyContainer'>
                    <Text variant="cardHeaderSmall" htmlFor='Inventory'>Currency:</Text>
                    <Flex>
                        <Box variant="currencyBox">
                            <Text variant="cardHeaderSmall">Pp</Text>
                            <Input
                                name="pp"
                                type="number"
                                placeholder='Pp'
                                onChange={event=>this.handleUpdate(event, "pp")}
                            />
                        </Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeaderSmall">Gp</Text>
                            <Input
                                name="gp"
                                type="number"
                                placeholder='Gp'
                                onChange={event=>this.handleUpdate(event, "gp")}
                            />
                        </Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeaderSmall">Sp</Text>
                            <Input
                                name="sp"
                                type="number"
                                placeholder='Sp'
                                onChange={event=>this.handleUpdate(event, "sp")}
                            /></Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeaderSmall">Cp</Text>
                            <Input
                                name="cp"
                                type="number"
                                placeholder='Cp'
                                onChange={event=>this.handleUpdate(event, "cp")}
                            /></Box>

                        <Box variant="currencyBox">
                            <Text variant="cardHeaderSmall">Ep</Text>
                            <Input
                                name="ep"
                                type="number"
                                placeholder='Ep'
                                onChange={event=>this.handleUpdate(event, "pp")} /></Box>
                    </Flex>
                </Box>
            </Box>


            <Box variant='backgroundBox'>
                <Tiles columns={[2]}>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Weight</Text>
                        <Text variant="attributesDetails">{this.props.widgetState.weight}</Text>
                    </Box>
                    <Box variant="attributesBox">
                        <Text variant="attributesHeader">Capacity</Text>
                        <Text variant="attributesDetails">{this.props.widgetState.capacity}</Text>
                    </Box>
                </Tiles>
            </Box>



            <Box variant='fullWidthBox'>
                {array.map(row => {
                    return <InventoryRow handleUpdate={this.handleRowUpdate} rowNumber={row} />
                })}

                <Button onClick={() => { this.addRow() }} style={{margin:"0 auto"}}>
                    +
    </Button>
            </Box>
        </>
        )

    }
}
