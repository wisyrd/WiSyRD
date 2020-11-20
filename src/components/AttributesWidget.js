import React from 'react';
import { Box, Button, Card, Heading, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { Input, Label, Checkbox } from '@rebass/forms'
import { Flex } from 'reflexbox'
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class AttributesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Attributes Widget";
        this.widgetType = "example-widget"
        this.tutorialText = <Text>Attributes can be inserted and editted here. The smaller number indicates the base number, and the larger number represents the modifier. You need only enter the base number and the modifier will be calculated. These attributes will directly effect other widget components and calculations. In depth information about character attributes may be found <a href="https://www.dndbeyond.com/sources/basic-rules/using-ability-scores#AbilityScoresandModifiers" target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (<>
        <Box width={350}>

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
                            <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='str'
                                    type='str'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    Int
            ================================================ */}
                        <Box variant="attributesBox">
                           <Text variant='cardHeader'>Int</Text>
                           <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='Int'
                                    type='Int'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    WIS
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Wis</Text>
                                <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='Wis'
                                    type='Wis'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    DEX
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Dex</Text>
                                <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='Dex'
                                    type='Dex'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    CHA
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Cha</Text>
                                <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='Cha'
                                    type='Cha'
                                    placeholder='10'
                                />
                            </Box>

            {/* ================================================
                                    CON
            ================================================ */}
                            <Box variant="attributesBox">
                                <Text variant='cardHeader'>Con</Text>
                                <Text variant="attributesDetails">+/- 0</Text>
                                <Input
                                    textAlign='center'
                                    id='Con'
                                    type='Con'
                                    placeholder='10'
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
