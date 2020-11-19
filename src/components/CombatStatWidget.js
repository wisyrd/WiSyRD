import React from 'react';
import { Box, Heading, Text } from 'rebass';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from './Widget';
import { Flex } from 'reflexbox'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class CombatStatWidget extends Widget {
    constructor(props){
        super(props);
        this.title = "Combat Stats";
        this.widgetType = "combat-stat-widget"
        this.tutorialText = <Text>This widget shows basic combat statistics needed most frequently. These statistics are directly influenced by the character's attribute modifiers. An in depth guide to combat can be found <a href="https://www.dndbeyond.com/sources/basic-rules/combat"target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (
            <>

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
               
                    {/* ================================================
                                    Current HP Box
                    ================================================ */}
                    <Box variant="fullWidthBox">
                        <Text variant='cardHeader'>Current HP</Text>
                        <Input
                            id='currentHP'
                            type='integer'
                            textAlign='center'
                            placeholder='CurrentHP' />
                    </Box>
                
                    {/* ================================================
                                        Max HP Box
                    ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Max HP</Text>
                                <Input
                                    id='maxHP'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>

                            {/* ================================================
                                                    Temp HP Box
                                ================================================ */}
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Temp HP</Text>
                                <Input
                                    id='tempHP'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                        </Flex>
                    </Box>
                            {/* ================================================
                                                    AC Box
                                ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>AC</Text>
                                <Input
                                    id='AC'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>

               
                    {/* ================================================
                                    Lower Bar Box
                    ================================================ */}

                            {/* ================================================
                                                    Initiative Box
                            ================================================ */}
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Initiative</Text>
                                <Input
                                    id='initiative'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                            </Flex>
                            </Box>

                            {/* ================================================
                                            Death Saves Box
                            ================================================ */}                    
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Death Saves</Text>
                                <Box>
                                    <Text variant='infoText'>Sucesses</Text>
                                    <Flex variant='checkBoxBox'>
                                        <Label><Checkbox id='deathSaveOne' name='deathSaveOne' /></Label>
                                        <Label><Checkbox id='deathSaveTwo' name='deathSaveTwo' /></Label>
                                        <Label><Checkbox id='deathSaveThree' name='deathSaveThree' /></Label>
                                    </Flex>
                                </Box>

                                <Box>
                                <Text variant='infoText'>Failures</Text>
                                    <Flex variant='checkBoxBox'>
                                        <Label><Checkbox id='deathSaveOne' name='deathSaveOne' /></Label>
                                        <Label><Checkbox id='deathSaveTwo' name='deathSaveTwo' /></Label>
                                        <Label><Checkbox id='deathSaveThree' name='deathSaveThree' /></Label>
                                    </Flex>
                                </Box>
                            </Box>

                            {/* ================================================
                                            Speed Box
                            ================================================ */}
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Speed</Text>
                                <Input
                                    id='speed'
                                    type='integer'
                                    textAlign='center'
                                    placeholder='#' />
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Text>{this.props.children}</Text>
        </>)
    }
}
