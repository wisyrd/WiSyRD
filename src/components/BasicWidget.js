import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label, Select } from "@rebass/forms"
import Widget from './Widget';
import TutorialButton from "./TutorialButton"

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class BasicWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Basic Info widget";
        this.widgetType = "Basic-widget"
        this.tutorialText = <Text>This widget controls the display of basic character information. Information may be input and editted freely as necessary. In depth information on selecting a class and race may be found <a href="https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#1ChooseaRace"target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (<>
                <Heading variant="heading">Basic Info</Heading>

                {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box variant='backgroundBox'>

                    {/* ================================================
                                Character Name Box
                ================================================ */}
                    {/* <Label htmlFor='Character Name'>
                            Name:
                            </Label> */}
                    <Box variant='fullWidthBox'>
                        <Text variant='cardHeader'>Character Name</Text>
                        <Input
                            id='charName'
                            name='name'
                            type='text'
                            placeholder='Character Name' />
                    </Box>

                    {/* ================================================
                                        Race Box
                    ================================================ */}

                    <Box>
                        <Flex>
                            {/* <Label htmlFor='Race'>
                            Race:
                            </Label> */}
                            <Box variant='halfWidthBox'>
                                <Text variant='cardHeader'>Race</Text>
                                <Input
                                    id='charRace'
                                    name='race'
                                    type='text'
                                    placeholder='Race' />
                            </Box>

                    {/* ================================================
                                        Class Box
                    ================================================ */}
                            {/* <Label htmlFor='Character Class'>
                            Class:
                            </Label> */}
                            <Box variant='halfWidthBox'>
                                <Text variant='cardHeader'>Class</Text>
                                <Select>
                                    <option value="barbarian">Barbarian</option>
                                    <option value="bard">Bard</option>
                                    <option value="cleric">Cleric</option>
                                    <option value="druid">Druid</option>
                                    <option value="fighter">Fighter</option>
                                    <option value="monk">Monk</option>
                                    <option value="paladin">Paladin</option>
                                    <option value="ranger">Ranger</option>
                                    <option value="rogue">Rogue</option>
                                    <option value="sorcerer">Sorcerer</option>
                                    <option value="warlock">Warlock</option>
                                    <option value="wizard">Wizard</option>
                                </Select>
                            </Box>
                        </Flex>
                    </Box>

                    {/* ================================================
                                        Level Box
                    ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeader'>Level</Text>                        
                                <Input
                                    id='charlvl'
                                    name="level"
                                    type="text"
                                    placeholder='level'/> 
                            </Box>
           
                    {/* ================================================
                                        Subclass Box
                    ================================================ */}
                            <Box variant='statsBox'>
                                <Text variant='cardHeader'>Subclass</Text>
                                    <Input
                                        id='charSub'
                                        name="charSub"
                                        type="text"
                                        placeholder='Subclass' />
                            </Box>

                    {/* ================================================
                                        Exp Box
                    ================================================ */}
                            <Box variant='statsBox'>
                                <Text variant='cardHeader'>Exp</Text>
                                <Input
                                    id='charExp'
                                    name="charExp"
                                    type="text"
                                    placeholder='Exp.'/>
                            </Box>

                        </Flex>
                    </Box>
                    <Flex>
                        <TutorialButton tutorialText={this.tutorialText}/>
                    </Flex>
                </Box>
            </>
        )
    }
}