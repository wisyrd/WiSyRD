import React from 'react';
import { Box, Heading, Text } from 'rebass';
import Widget from './Widget';
import { Flex } from 'reflexbox';
import SingleCheckbox from "./SingleCheckbox";
import { Label } from "@rebass/forms";
import TutorialButton from "./TutorialButton";
export default class SpellSlotWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Spell Slot Widget";
        this.widgetType = "spell-slot-widget";
        // NEEDS TO IMPORT BOTH THE CLASS AND LEVEL OF THE USER HERE
        this.state = {levelState: 15, classState: "druid"}
        this.tutorialText = <Text><a href="" target="blank">Spell Slot Tutorial</a></Text>;
    }
    
    showSlots() {
        if (this.state.classState == "warlock")
        {
            if (this.state.levelState == 1)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
            if (this.state.levelState >= 2 && this.state.levelState <= 10)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
            if (this.state.levelState >= 11 && this.state.levelState <= 16)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
            if (this.state.levelState >= 17)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
        }
        if (this.state.classState == "paladin" || this.state.classState == "ranger")
        {
            if (this.state.levelState == 1)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState} has no spell slots.</Text></Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 2)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 3 || this.state.levelState == 4)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 5 || this.state.levelState == 6)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 7 || this.state.levelState == 8)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 9 || this.state.levelState == 10)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 11 || this.state.levelState == 12)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 13 || this.state.levelState == 14)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 15 || this.state.levelState == 16)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 17 || this.state.levelState == 18)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                        <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                        </Flex>
                    </Box>
                )
            }
            if (this.state.levelState == 19 || this.state.levelState == 20)
            {
                return (
                    <Box>
                        <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                        <Flex>
                            <Text
                            fontSize={[1, 2, 3]}
                            fontWeight='bold'
                            color='primary'>
                                Spell Slots for Level 1 Spells:</Text>
                                <Flex><Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                <Label><SingleCheckbox/></Label>
                                </Flex>
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                        </Flex>
                        <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                        </Flex>
                        <Flex>
                        <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                        </Flex>
                    </Box>
                )
            }
        }
        if (this.state.classState  == "wizard" || this.state.classState  == "bard" || this.state.classState  == "cleric" || this.state.classState  == "druid" || this.state.classState  == "sorcerer")
                {
                    if (this.state.levelState == 1)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 2)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 3)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 4)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 5)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 6)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                </Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 7)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 8)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 9)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 10)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 11 || this.state.levelState == 12)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 13 || this.state.levelState == 14)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 15 || this.state.levelState == 16)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 8 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 17)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 8 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 9 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 18)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 8 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 9 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }if (this.state.levelState == 19)
                    {
                        return (
                            <Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    </Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex> 
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                                </Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 8 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 9 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            </Box>
                        )
                    }
                    if (this.state.levelState == 20)
                        {
                            return (<Box>
                                <Flex><Text>Level {this.state.levelState} {this.state.classState}</Text></Flex>
                                <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 1 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 2 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 3 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 4 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex> 
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 5 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 6 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 7 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label>
                                    <Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 8 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex>
                            <Flex>
                                <Text
                                fontSize={[1, 2, 3]}
                                fontWeight='bold'
                                color='primary'>
                                    Spell Slots for Level 9 Spells:</Text>
                                    <Flex><Label><SingleCheckbox/></Label></Flex>
                            </Flex></Box>)
                        }
                
    }
}

    renderPanel=()=> {
        return (<>
            <Heading>{this.props.children}</Heading>
                {this.showSlots()}
            </>
        )
    }
}