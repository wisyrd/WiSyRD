import React from 'react';
import { Box, Heading, Text } from 'rebass';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from '../Widget';
import { Flex } from 'reflexbox'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class CombatStatWidget extends Widget {
    constructor(props){
        super(props);
        this.title = "Combat Stats";
        this.widgetType = "combat-stat-widget"
        this.tutorialText = <Text>This widget shows basic combat statistics needed most frequently. These statistics are directly influenced by the character's attribute modifiers. An in depth guide to combat can be found <a href="https://www.dndbeyond.com/sources/basic-rules/combat"target="blank">HERE</a></Text>
    
        this.initializeIfNew();
    }

    initialize(){

    }

    handleUpdate(event, field){
        this.setWidgetState({[field]: event.target.value})
    }

    renderPanel=()=> {
        return (
            <>

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box variant='backgroundBox'>
               
                    {/* ================================================
                                    Current HP Box
                    ================================================ */}
                    <Box variant="fullWidthBox">
                        <Text variant='cardHeaderSmall'>Current HP</Text>
                        <Input
                            id='currentHP'
                            type='number'
                            textAlign='center'
                            placeholder='#'
                            onChange={event=>this.handleUpdate(event, "curHP")} />
                    </Box>
                
                    {/* ================================================
                                        Max HP Box
                    ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeaderSmall'>Max HP</Text>
                                <Input
                                    id='maxHP'
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>this.handleUpdate(event, "maxHP")} />
                            </Box>

                            {/* ================================================
                                                    Temp HP Box
                                ================================================ */}
                            <Box variant="statsBox">
                                <Text variant='cardHeaderSmall'>Temp HP</Text>
                                <Input
                                    id='tempHP'
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>this.handleUpdate(event, "tempHP")} />
                            </Box>
                        </Flex>
                    </Box>
                            {/* ================================================
                                                    AC Box
                                ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeaderSmall'>AC</Text>
                                <Input
                                    id='AC'
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>this.handleUpdate(event, "AC")} />
                            </Box>

               
                    {/* ================================================
                                    Lower Bar Box
                    ================================================ */}

                            {/* ================================================
                                                    Initiative Box
                            ================================================ */}
                            <Box variant="statsBox">
                                <Text variant='cardHeaderSmall'>Initiative</Text>
                                <Input
                                    id='initiative'
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>this.handleUpdate(event, "initiative")} />
                            </Box>
                            </Flex>
                            </Box>

                            {/* ================================================
                                            Death Saves Box
                            ================================================ */}                    
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                {/* TODO: save death save state */}
                                <Text variant='cardHeaderSmall'>Death Saves</Text>
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
                                <Text variant='cardHeaderSmall'>Speed</Text>
                                <Input
                                    id='speed'
                                    type='number'
                                    textAlign='center'
                                    placeholder='#'
                                    onChange={event=>this.handleUpdate(event, "speed")} />
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Text>{this.props.children}</Text>
        </>)
    }
}
