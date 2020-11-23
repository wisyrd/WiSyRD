import React from 'react';
import Widget from '../Widget';
import { Box, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { Input } from '@rebass/forms'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class AttributesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Attributes Widget";
        this.widgetType = "example-widget"
        this.tutorialText = <Text>Attributes can be inserted and editted here. The smaller number indicates the base number, and the larger number represents the modifier. You need only enter the base number and the modifier will be calculated. These attributes will directly effect other widget components and calculations. In depth information about character attributes may be found <a href="https://www.dndbeyond.com/sources/basic-rules/using-ability-scores#AbilityScoresandModifiers" target="blank">HERE</a></Text>
    
        this.initializeIfNew();
    }

    initialize(){
        console.log("Initializing!");
        this.setWidgetState({
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        })

        this.setExportedValue("strmod", 0)
        this.setExportedValue("dexmod", 0)
        this.setExportedValue("conmod", 0)
        this.setExportedValue("intmod", 0)
        this.setExportedValue("wismod", 0)
        this.setExportedValue("chamod", 0)

        // Placeholder
        this.setExportedValue("prof", 2);
    }


    handleChange(event, field) {
        const value = parseInt(event.target.value);
        const mod = Math.floor((value-10)/2);
        this.setWidgetState({[field]: value});

        this.setExportedValue(`${field}mod`, mod);
    }

    formatMod(mod){
        if(mod<0){
            return `-${mod}`;
        }
        else{
            return `+${mod}`;
        }
    }

    renderPanel=()=> {
        return (<>
        <Box>

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box variant='backgroundBox'>
                        <Tiles columns={[2]}>
            {/* ================================================
                                    STR
            ================================================ */}
                        <Box variant="attributesBox">
                            <Text variant='cardHeader'>Str</Text>
                            <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.strmod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "str")}
                                />
                            </Box>

            {/* ================================================
                                    Int
            ================================================ */}
                        <Box variant="attributesBox">
                           <Text variant='cardHeader'>Int</Text>
                           <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.intmod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='Int'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "int")}
                                />
                            </Box>

            {/* ================================================
                                    DEX
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Dex</Text>
                                <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.dexmod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='Dex'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "dex")}
                                />
                            </Box>

            {/* ================================================
                                    WIS
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Wis</Text>
                                <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.wismod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='Wis'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "wis")}
                                />
                            </Box>


            {/* ================================================
                                    CON
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Con</Text>
                                <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.conmod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='Con'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "con")}
                                />
                            </Box>

            {/* ================================================
                                    CHA
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Cha</Text>
                                <Text variant="attributesDetails">{this.formatMod(this.props.widgetState.exports.chamod)}</Text>
                                <Input
                                    textAlign='center'
                                    id='Cha'
                                    type='number'
                                    min='1'
                                    defaultValue='10'
                                    max='30'
                                    onChange={event=>this.handleChange(event, "cha")}
                                />
                            </Box>

                        </Tiles>
                </Box>

                <Text>{this.props.children}</Text>
        </Box>
            </>
        )
    }
}
