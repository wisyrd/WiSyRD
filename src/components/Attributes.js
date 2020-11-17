import React from 'react';
import { Box, Button, Card, Heading, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from './Widget';
import { Flex } from 'reflexbox'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class ExampleWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Attributes Widget";
        this.widgetType = "Attributes-widget"
    }

    renderPanel() {
        return (<>
        <Box width={350}>
            <Heading
            color="black"
            bg='yellow'
            >Attributes</Heading>

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
                        <Tiles columns={[2]}>
            {/* ================================================
                                    STR
            ================================================ */}
                        <Box variant="attributesBox">
                            <Text variant="attributesHeader">Str</Text>
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
                           <Text variant="attributesHeader">Int</Text>
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
                                <Text variant="attributesHeader">Wis</Text>
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
                                <Text variant="attributesHeader">Dex</Text>
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
                                <Text variant="attributesHeader">Cha</Text>
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
                                <Text variant="attributesHeader">Con</Text>
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